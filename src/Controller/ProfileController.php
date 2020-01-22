<?php

namespace App\Controller;

use App\Entity\Event;
use App\Form\EventMakerType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Util\Analyzer;

class ProfileController extends AbstractController
{
    /**
     * @Route("/profile", name="profile")
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\RedirectResponse|\Symfony\Component\HttpFoundation\Response
     * @throws \Exception
     */
    public function index(Request $request)
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
        $event = new Event();
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

           $event = $form->getData();
           $em = $this->getDoctrine()->getManager();
           $em->persist($event);
           $em->flush();

           return $this->redirectToRoute('profile');
        }

        return $this->render('profile/index.html.twig', [
            'form' => $form->createView(),
            'events' => $analyerArray,

        ]);
    }
}
