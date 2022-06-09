<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class VueController extends AbstractController
{
//* @Route("/app/{route}", requirements={"route"=".*"}, name="vue")

    /**
     * @Route("/", requirements={"route"=".*"}, name="vue")
     */
    public function index(): Response
    {
        $words = ['sky', 'cloud', 'wood', 'rock', 'forest',
            'mountain', 'breeze'];
        return $this->render('vue/index.html.twig', [
            'controller_name' => 'VueController',
            'words' => $words
        ]);
    }
    /**
     * @Route("/demo", requirements={"route"=".*"}, name="demo")
     */
    public function demo(): Response
    {
        $words = ['sky', 'cloud', 'wood', 'rock', 'forest',
            'mountain', 'breeze'];
        return $this->render('demo/index.html.twig', [
            'controller_name' => 'demoController',
            'words' => $words
        ]);
    }
    /**
     * @Route("/save", requirements={"route"=".*"}, name="save")
     */
    public function save(): Response
    {
    //    dd('ok');
        //        $words = ['sky', 'cloud', 'wood', 'rock', 'forest',
//            'mountain', 'breeze'];
//        return $this->render('demo/index.html.twig', [
//            'controller_name' => 'demoController',
//            'words' => $words
//        ]);
    }
}
