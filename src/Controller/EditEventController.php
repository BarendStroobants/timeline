<?php

namespace App\Controller;

use App\Domain\EventChecker;
use App\Entity\Event;
use App\Exception\EventCheckerError;
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
            try {
                $eventChecker = new EventChecker($form, $this->getDoctrine()->getManager(), $this->getUser());
                $eventChecker->check();
                $eventChecker->save($this->getUser());
            }
            catch(EventCheckerError $e) {
                $this->addFlash('error', $e->getMessage());
                return $this->redirectToRoute('profile');
            }

            $this->addFlash('success', 'your event as been updated!');
            return $this->redirectToRoute('profile');
        }

        return $this->render('edit_event/index.html.twig', [
            'form' => $form->createView(),
        ]);


}



}
