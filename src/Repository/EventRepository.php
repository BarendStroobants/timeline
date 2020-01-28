<?php

namespace App\Repository;

use App\Domain\AggregatedTimeperiodResult;
use App\Domain\AnalyzerResult;
use App\Domain\EventResult;
use App\Entity\Event;
use App\Entity\Person;
use App\Util\Analyzer;
use DateInterval;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use Monolog\DateTimeImmutable;

/**
 * @method Event|null find($id, $lockMode = null, $lockVersion = null)
 * @method Event|null findOneBy(array $criteria, array $orderBy = null)
 * @method Event[]    findAll()
 * @method Event[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EventRepository extends ServiceEntityRepository
{
    const ONE_DAY = 1440;

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

    /**
     * @return array|AggregatedTimeperiodResult
     * @throws \Exception
     */
    public function getUsefulDataArray(Person $person, Analyzer $analyzer): array
    {
/*
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
*/

        $minuteArray = [];

        $holdover = [];
        foreach ($this->findBy(['person' => $person]) as $key => $event) {
            $analyzerResult = $analyzer->minuteGetter($event->getStart(), $event->getStop());

            $nextDayEnd = $analyzerResult->getEndRelative() - self::ONE_DAY;

            $nextDay = new DateTimeImmutable(true);
            $nextDay->setDate(intval($event->getStart()->format("y")), intval($event->getStart()->format("m")), intval($event->getStart()->format("d")));
            $nextDay->add(new DateInterval('P1D'));
            $analyzerResult->setEndRelative(self::ONE_DAY);


            $tempStartEvent = new DateTimeImmutable(true);
            $tempStartEvent->setDate(intval($event->getStart()->format("y")), intval($event->getStart()->format("m")), intval($event->getStart()->format("d")));
            $minuteArray[] = new EventResult(
                $analyzerResult,
                $event->getActivity(),
                $tempStartEvent
            );

            //$totalBeginning[$event->getActivity()] += $analyzerResult->getTotalMinutes();

            if ($analyzerResult->getEndRelative() > self::ONE_DAY) {
                $holdover[$nextDay->format('d')][0] = new EventResult(
                    new AnalyzerResult(
                        0,
                        $nextDayEnd
                    ),
                    $event->getActivity(),
                    $nextDay
                );

                //$totalBeginning[$event->getActivity()] += $analyzerResult->getTotalMinutes();
            }
        }

        foreach ($holdover as $key => $holder) {
            $minuteArray[] = $holder[0];
        }

        return $minuteArray;
    }
}
