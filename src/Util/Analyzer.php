<?php

namespace App\Util;

use App\Domain\AnalyzerResult;
use DateTime;

class Analyzer
{
    public function minuteGetter(\DateTime $dateStart, \DateTime $dateEnd): AnalyzerResult
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

        return new AnalyzerResult($startRelative, $totalMinutes);
    }
}




