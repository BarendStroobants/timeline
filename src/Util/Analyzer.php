<?php

namespace App\Util;

use DateTime;
use DateTimeImmutable;
use Doctrine\ORM\Mapping as ORM;
use PhpParser\Node\Expr\Array_;

class Analyzer
{
    //define('TOTALMINUTESINDAY', 1440);
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



        $dateDiff = $dateStart->diff($dateEnd);

        $minutes = intval($dateDiff->format('%i'));
        $hours = intval($dateDiff->format('%h'));
        $totalMinutes = ($hours * 60) + $minutes;
        $date = new DateTime();
        $date->setDate($dateStart->format('Y'), $dateStart->format('m'), $dateStart->format('d'));
        $date->setTime(0, 0, 0);


        $startRelative = $date->diff($dateStart);
        $hours = $startRelative->format('%h');
        $mins = $startRelative->format('%i');

        $ele = $hours * 60;
        $startRelative = $ele + $mins;

        $endRelative = $startRelative + $totalMinutes;

        $dataArray = [
            'startRelative' => $startRelative,
            'endRelative' => $endRelative,
            'totalMinutes' => $totalMinutes,

        ];

        return $dataArray;
    }
}




