<?php
declare(strict_types=1);

namespace App\Domain;

class AnalyzerResult
{
    /** @var int */
    private $startRelative;
    /** @var int */
    private $endRelative;
    /** @var int */
    private $totalMinutes;

    public function __construct(int $startRelative, int $totalMinutes)
    {
        $this->startRelative = $startRelative;
        $this->endRelative =  $startRelative + $totalMinutes;
        $this->totalMinutes = $totalMinutes;
    }

    public function getStartRelative(): int
    {
        return $this->startRelative;
    }

    public function getEndRelative(): int
    {
        return $this->endRelative;
    }

    /**
     * @param int $startRelative
     */
    public function setStartRelative(int $startRelative): void
    {
        $this->startRelative = $startRelative;
    }

    /**
     * @param int $endRelative
     */
    public function setEndRelative(int $endRelative): void
    {
        $this->endRelative = $endRelative;
    }

    /**
     * @param int $totalMinutes
     */
    public function setTotalMinutes(int $totalMinutes): void
    {
        $this->totalMinutes = $totalMinutes;
    }

    public function getTotalMinutes(): int
    {
        return $this->totalMinutes;
    }
}
