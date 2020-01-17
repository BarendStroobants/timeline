<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class TimelineController extends AbstractController
{
    /**
     * @Route("/", name="timeline")
     */
    public function index()
    {
        return $this->render('timeline/index.html.twig', [

        ]);
    }
}
