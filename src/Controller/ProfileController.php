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
     * @param Analyzer $analyzer
     * @return \Symfony\Component\HttpFoundation\RedirectResponse|\Symfony\Component\HttpFoundation\Response
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
            //check if date is greater
            if (!$form->get('stop') < $form->get('start')) {
                $this->addFlash('error', 'Please check time input');
                return $this->redirectToRoute('profile');
            }
           $event = $form->getData();
           $event->setPerson($this->getUser());
           $em = $this->getDoctrine()->getManager();
           $em->persist($event);
           $em->flush();

          return $this->redirectToRoute('profile');
        }

        return $this->render('profile/index.html.twig', [
            'form' => $form->createView(),
            'getEvents' => $getEvents,
            'getEvents2' => $getEvents2
        ]);
    }
}
