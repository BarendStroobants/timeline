<?php

namespace App\Form;

use App\Entity\Event;
use phpDocumentor\Reflection\Types\String_;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class EventMakerType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('start')
            ->add('stop')
            ->add('activity', ChoiceType::class, [
                'choices' => [
                    'sleep' => 'string',
                    'work' => 'string',
                    'travel' => 'string',
                    'study' => 'string',
                    'eat' => 'string',
                    'hobby' => 'string',
                ]
            ])
            ->add('location')
            ->add('description')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Event::class,
        ]);
    }
}
