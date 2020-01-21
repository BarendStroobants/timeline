<?php

namespace App\Controller;

use App\Form\EventMakerType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Util\Analyzer;

class ProfileController extends AbstractController
{
    /**
     * @Route("/profile", name="profile")
     */
    public function index()
    {
        $analyer = new Analyzer();

        $date = new \DateTime();
        $date->modify('-3 days');
        $dateStart = $date->format('d');
        $dateEnd = new \DateTime();
        $analyerArray = $analyer->minuteGetter($date, $dateEnd);
       // var_dump($analyerArray);

      //  var_dump($analyerArray["end"]); //-strtotime($analyer["start"]));

      //  $dateDiff = $analyerArray['start']->diff($analyerArray['end']);

     //  $minutes = intval($dateDiff->format('%i'));
     //   $hours = intval($dateDiff->format('%h'));
       // $totalMinutes = ($hours * 60) + $minutes;


        // var_dump($totalMinutes);



        $form = $this->createForm(EventMakerType::class);

        return $this->render('profile/index.html.twig', [
            'form' => $form->createView(),
            'events' => $analyerArray,

        ]);
    }
}
