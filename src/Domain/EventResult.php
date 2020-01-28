<?php
declare(strict_types=1);

namespace App\Domain;

class EventResult
{
    /** @var string */
    private $activity;

    /** @var \DateTimeImmutable */
    private $date;

    /**
     * @var AnalyzerResult
     */
    private $analyzerResult;

    public function __construct(AnalyzerResult $analyzerResult, string $activity, \DateTimeImmutable $date)
    {
        $this->activity = $activity;
        $this->date = $date;
        $this->analyzerResult = $analyzerResult;
    }

    public function getActivity(): string
    {
        return $this->activity;
    }

    public function getDate(): \DateTimeImmutable
    {
        return $this->date;
    }

    public function getAnalyzerResult(): AnalyzerResult
    {
        return $this->analyzerResult;
    }

    public function  __sleep()
    {
        return json_encode([
            'startRelative' => $this->getAnalyzerResult()->getStartRelative(),
            'endRelative' => $this->getAnalyzerResult()->getEndRelative(),
            'totalMinutes' => $this->getAnalyzerResult()->getTotalMinutes(),
            'activity' => $this->getActivity(),
            'day' => $this->getDate()-format('d'),
            'month' => $this->getDate()->format('m'),
            'year' => $this->getDate()->format('y')
        ]);
    }
}
