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

    public function getUsefulDataArray (Person $person) {
        $events = $this->findBy([
            'person' => $person,
        ]);

        $anal = new Analyzer();

        $minuteArray = [];
        foreach ($events as $key => $event){
            $info = $anal->minuteGetter($event->getStart(), $event->getStop());

            $minuteArray[$event->getStart()->format('d')][0] = $info;
            $minuteArray[$event->getStart()->format('d')][0]['activity'] = $event->getActivity();
            $minuteArray[$event->getStart()->format('d')][0]['date'] = $event->getStart()->format('d');
        }

        return $minuteArray;
    }
}
