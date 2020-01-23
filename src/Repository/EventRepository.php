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

    public function getUsefulDataArray (Person $person):array{

        $events = $this->findBy([
            'person' => $person,
        ]);

        $anal = new Analyzer();

        $minuteArray = [];
        $counter = 0;
        $indexCounter = 0;
        foreach ($events as $key => $event) {

            if ($indexCounter !== $event->getStart()->format('d')) {
                $counter = 0;
            }

            $indexCounter = $event->getStart()->format('d');

            $info = $anal->minuteGetter($event->getStart(), $event->getStop());
            if ($info['endRelative'] > 1440){

                $nextDayEnd = $info['endRelative']-1440;
                $nextDay = (int)$event->getStart()->format('d')+1;

                $info['endRelative'] = 1440;
                $minuteArray[$indexCounter][$counter] = $info;
                $minuteArray[$indexCounter][$counter]['activity'] = $event->getActivity();
                $minuteArray[$indexCounter][$counter]['date'] = $event->getStart()->format('d');
                $counter++;

                $info['startRelative'] = 0;
                $info['endRelative'] = $nextDayEnd;
                $minuteArray[$nextDay][$counter] = $info;
                $minuteArray[$nextDay][$counter]['activity'] = $event->getActivity();
                $minuteArray[$nextDay][$counter]['date'] = (string)$nextDay;
                $counter++;

            } else {
                $minuteArray[$indexCounter][$counter] = $info;
                $minuteArray[$indexCounter][$counter]['activity'] = $event->getActivity();
                $minuteArray[$indexCounter][$counter]['date'] = $event->getStart()->format('d');
                $counter++;

            }




        }

        return $minuteArray;
    }
}
