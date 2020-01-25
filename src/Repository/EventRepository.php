<?php

namespace App\Repository;

use App\Entity\Event;
use App\Entity\Person;
use App\Util\Analyzer;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Event|null find($id, $lockMode = null, $lockVersion = null)
 * @method Event|null findOneBy(array $criteria, array $orderBy = null)
 * @method Event[]    findAll()
 * @method Event[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EventRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Event::class);
    }

    // /**
    //  * @return Event[] Returns an array of Event objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('e.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Event
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */

    public function getUsefulDataArray(Person $person, Analyzer $anal): array
    {

        $events = $this->findBy([
            'person' => $person,
        ]);
        $superCounterExtreme = 0;

        $totalBeginning = [
            "sleep" => 0,
            "work" => 0,
            "travel" => 0,
            "study" => 0,
            "eat" => 0,
            "hobby" => 0,
            "wash" => 0,
            "rest" => 0,
        ];

        $minuteArray = [];

        $holdover = [];
        $counter = 0;
        $indexCounter = 0;
        foreach ($events as $key => $event) {

            if ($indexCounter !== $event->getStart()->format('d')) {
                $counter = 0;
            }

            $indexCounter = intval($event->getStart()->format('d'));
            $indexMonthCounter = intval($event->getStart()->format('m')) - 1;
            $indexYearCounter = intval($event->getStart()->format('Y'));


            $info = $anal->minuteGetter($event->getStart(), $event->getStop());

            if ($info['endRelative'] > 1440) {

                $nextDayEnd = $info['endRelative'] - 1440;
                $nextDay = (int)$event->getStart()->format('d') + 1;

                $info['endRelative'] = 1440;
                $minuteArray[$superCounterExtreme] = $info;
                $minuteArray[$superCounterExtreme]['activity'] =
                $minuteArray[$superCounterExtreme]['date'] = $indexCounter;
                $minuteArray[$superCounterExtreme]['month'] = $indexMonthCounter;
                $minuteArray[$superCounterExtreme]['year'] = $indexYearCounter;
                $counter++;

                $totalBeginning[$event->getActivity()] += $info['totalMinutes'];


                $info['startRelative'] = 0;
                $info['endRelative'] = $nextDayEnd;
                $info['totalMinutes'] = $nextDayEnd;
                $holdover[$nextDay][0] = $info;
                $holdover[$nextDay][0]['activity'] = $event->getActivity();
                $holdover[$nextDay][0]['date'] = $nextDay;
                $holdover[$nextDay][0]['month'] = $indexMonthCounter;
                $holdover[$nextDay][0]['year'] = $indexYearCounter;

                $totalBeginning[$event->getActivity()] += $info['totalMinutes'];

            } else {
                $minuteArray[$superCounterExtreme] = $info;
                $minuteArray[$superCounterExtreme]['activity'] = $event->getActivity();
                $minuteArray[$superCounterExtreme]['date'] = $indexCounter;
                $minuteArray[$superCounterExtreme]['month'] = $indexMonthCounter;
                $minuteArray[$superCounterExtreme]['year'] = $indexYearCounter;
                $counter++;

                $totalBeginning[$event->getActivity()] += $info['totalMinutes'];
            }


            $superCounterExtreme++;
        }


        foreach ($holdover as $key => $holder) {
            $minuteArray[] = $holder[0];
        }


        return $minuteArray;
    }
}
