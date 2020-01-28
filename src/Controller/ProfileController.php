<?php

namespace App\Controller;

use App\Entity\Event;
use App\Form\EventMakerType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Util\Analyzer;
use Symfony\Component\HttpFoundation\Response;

class ProfileController extends AbstractController
{
    /**
     * @Route("/profile", name="profile")
     * @param Request $request
     * @param Analyzer $analyzer
     * @return RedirectResponse|\Symfony\Component\HttpFoundation\Response
     */
    public function index(Request $request, Analyzer $analyzer)
    {

        if (!$this->getUser()) {
            $this->redirectToRoute('app_login');
        }

        $getEvents = $this->getDoctrine()->getRepository(Event::class)->findBy([
            'person' => $this->getUser(),
        ]);

        $getEvents2 = $this->getDoctrine()->getRepository(Event::class)->getUsefulDataArray($this->getUser(), $analyzer);

        $form = $this->createForm(EventMakerType::class);
        $event = new Event();
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {


           $diff = $form->get('start')->getData()->diff($form->get('stop')->getData());
            //no backwards time interval ie: stop time is before begin time
           if ($diff->invert == 1) {
                $this->addFlash('error', 'Please check time input');
                return $this->redirectToRoute('profile');
            //no events longer than 24 hours (as it is not the point of time management"
                }
            if ($diff->days > 1) {
                $this->addFlash('error', 'Please limit your activity time within 24 hours');
                return $this->redirectToRoute('profile');
                }

        //send off to database
           $event = $form->getData();
           $event->setPerson($this->getUser());
           $em = $this->getDoctrine()->getManager();
           $em->persist($event);
           $em->flush();

          $this->addFlash('success', 'Your message has been added!');
          return $this->redirectToRoute('profile');
        }

        return $this->render('profile/index.html.twig', [
            'form' => $form->createView(),
            'getEvents' => $getEvents,
            'getEvents2' => $getEvents2
        ]);
    }


    /**
     * @Route("profile/delete/{event}", requirements={"event" = "\d+"}, name="delete_event", methods={"DELETE"})
     * @param Event $event
     * @return RedirectResponse
     */

    public function deleteEvent (Event $event) {
        $em = $this->getDoctrine()->getManager();
        $em->remove($event);
        $em->flush();
        $this->addFlash('success', 'You have deleted the event');
        return $this->redirectToRoute('profile');

    }

}


