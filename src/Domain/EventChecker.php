<?php
declare(strict_types=1);

namespace App\Domain;

use App\Entity\Person;
use App\Exception\EventCheckerError;
use App\Form\EventMakerType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Form\Form;
use Symfony\Component\Security\Core\User\UserInterface;

class EventChecker
{
    /** @var EventMakerType */
    private $form;

    /** @var EntityManagerInterface */
    private $em;

    public function __construct(Form $form, EntityManagerInterface $em)
    {
        $this->form = $form;
        $this->em = $em;
    }

    public function check() : void
    {
        $diff = $this->form->get('start')->getData()->diff($this->form->get('stop')->getData());
        //no backwards time interval ie: stop time is before begin time
        if ($diff->invert == 1) {
            throw new EventCheckerError('Please check time input');
            //no events longer than 24 hours (as it is not the point of time management"
        }
        if ($diff->days > 1) {
            throw new EventCheckerError('Please limit your activity time within 24 hours');
        }
    }

    public function save(Person $person) : void
    {
        //send off to database
        $event = $this->form->getData();
        $event->setPerson($person);
        $this->em->persist($event);
        $this->em->flush();
    }
}
