<?php

namespace App\Controller;

use App\Form\EventMakerType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ProfileController extends AbstractController
{
    /**
     * @Route("/profile", name="profile")
     */
    public function index()
    {

        $form = $this->createForm(EventMakerType::class);

        return $this->render('profile/index.html.twig', [
            'controller_name' => 'ProfileController',
            'form' => $form->createView()
        ]);
    }
}
