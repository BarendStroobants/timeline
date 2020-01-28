<?php

namespace App\Controller;

use App\Domain\EventChecker;
use App\Entity\Event;
use App\Exception\EventCheckerError;
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
     * @return RedirectResponse|Response
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
            try {
                $eventChecker = new EventChecker($form, $this->getDoctrine()->getManager());
                $eventChecker->check();
                $eventChecker->save($this->getUser());
            }
            catch(EventCheckerError $e) {
                $this->addFlash('error', $e->getMessage());
                return $this->redirectToRoute('profile');
            }

          $this->addFlash('success', 'Your message has been added!');
          return $this->redirectToRoute('profile');
        }

        var_dump($getEvents2);
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


