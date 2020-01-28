<?php

namespace App\Controller;

use App\Entity\Event;
use App\Form\EventMakerType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class EditEventController extends AbstractController
{
    /**
     * @Route("profile/edit/{event}", requirements={"event" = "\d+"}, name="edit_event")
     * @param Event $event
     * @return RedirectResponse|Response
     */

    public function index (Request $request, Event $event) {

        $form = $this->createForm(EventMakerType::class, $event);

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

            $this->addFlash('success', 'your event as been updated!');
            return $this->redirectToRoute('profile');
        }

        return $this->render('edit_event/index.html.twig', [
            'form' => $form->createView(),
        ]);


}



}
