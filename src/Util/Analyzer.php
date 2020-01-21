<?php

namespace Util;

use DateTime;
use DateTimeImmutable;
use Doctrine\ORM\Mapping as ORM;
use PhpParser\Node\Expr\Array_;

class Analyzer
{

    /**
     * Analyzer constructor.
     */
    public function __construct()
    {
    }

    public function minuteMaker($array): array
    {
        return [];
    }

    public function minuteGetter(\DateTime $dateStart, \DateTime $dateEnd): array
    {



        $totalMinsOfDay = 1440;

        $dateStart->setDate(2020,1, 21);
        $start = $dateStart->setTime(9, 30, 00);
        $eventStart = (intval($dateStart->format("h"))*60);
        $eventStart += intval($dateStart->format('i'));

        $dateEnd->setDate(2020,1, 21);
        $end = $dateEnd->setTime(9, 30, 00);

        $dateDiff = $dateStart->diff($dateEnd);



        $minutes = intval($dateDiff->format('%i'));
        $hours = intval($dateDiff->format('%h'));
        $totalMinutes = ($hours * 60) + $minutes;










        $dataArray = [
            'start' => $start,
            'end' => $end,
            'activity' => 'sleep',
            'location' => 'home',
            'description' => 'resting my eyes',
            'totalMinutes' => $totalMinutes,
          //  'value' => $value
            'eventStart' => $eventStart,
            ];

        return $dataArray;
    }
}




