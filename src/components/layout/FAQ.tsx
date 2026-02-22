//src/components/layout/FAQ.tsx

"use client";

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Qu'est-ce que Visiloo ?",
    answer: "Visiloo est une plateforme marketing local tout-en-un qui aide les entreprises à centraliser leur présence en ligne, à gérer leur e-réputation et à piloter leurs réseaux de points de vente. Nous vous aidons à attirer plus de clients localement."
  },
  {
    question: "Comment Visiloo peut-il améliorer ma visibilité locale ?",
    answer: "Visiloo diffuse automatiquement vos informations (horaires, adresse, téléphone) sur plus de 40 plateformes (Google, Apple Plans, Waze, etc.), optimise votre SEO local et vous aide à générer plus d'avis clients, ce qui booste votre classement dans les recherches locales."
  },
  {
    question: "L'IA Léo est-elle facile à utiliser ?",
    answer: "Oui, l'Assistant IA Léo est conçu pour être intuitif. Il rédige des réponses personnalisées, empathiques et sans fautes à vos avis clients en quelques secondes. Vous gardez toujours le contrôle final avant publication pour assurer la cohérence de votre marque."
  },
  {
    question: "Puis-je gérer plusieurs établissements avec Visiloo ?",
    answer: "Absolument. Visiloo est conçu pour gérer de 1 à 1000 établissements avec la même simplicité. Notre tableau de bord multi-sites vous permet de comparer les performances de vos points de vente, de gérer les droits utilisateurs et d'harmoniser votre image de marque sur l'ensemble de votre réseau."
  },
  {
    question: "Quels sont les tarifs de Visiloo ?",
    answer: "Nous proposons plusieurs plans adaptés à vos besoins, du plan gratuit pour tester l'interface aux plans Essential et Premium AI pour une visibilité et une gestion avancée. Vous pouvez consulter notre page 'Pricing' pour plus de détails sur les fonctionnalités et les tarifs mensuels ou annuels."
  },
];

const FAQ: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Questions Fréquemment Posées
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Trouvez rapidement les réponses à vos interrogations sur Visiloo et découvrez comment notre plateforme peut vous aider.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="border border-gray-200 rounded-2xl px-6 py-4 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pt-4 text-base text-gray-600 leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;