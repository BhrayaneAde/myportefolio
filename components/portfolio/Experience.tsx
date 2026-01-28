'use client';

import { Briefcase, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Experience() {
  const experiences = [
    {
      title: 'Responsable Service Informatique & Développement',
      company: 'International Logistique & Tours',
      period: 'Poste actuel',
      description: 'Gestion complète du service informatique et développement de solutions digitales pour optimiser les processus logistiques.',
      achievements: [
        'Management de l\'infrastructure IT',
        'Développement d\'applications métier',
        'Support technique et formation des équipes',
      ],
    },
    {
      title: 'Développeur Back-end',
      company: 'SmartApp Bénin',
      period: 'Expérience professionnelle',
      description: 'Développement et maintenance d\'applications web avec PHP/Laravel et gestion de bases de données.',
      achievements: [
        'Architecture d\'APIs REST robustes',
        'Optimisation des performances backend',
        'Intégration de services tiers',
      ],
    },
    {
      title: 'Stagiaire Développeur',
      company: 'HighFive University',
      period: 'Stage professionnel',
      description: 'Participation au développement de plateformes éducatives et apprentissage des bonnes pratiques.',
      achievements: [
        'Développement frontend avec Vue.js',
        'Collaboration en équipe agile',
        'Tests et debugging',
      ],
    },
    {
      title: 'Support Informatique & Réseau',
      company: 'Vipp Interstis',
      period: 'Mission technique',
      description: 'Maintenance du parc informatique, gestion réseau et support utilisateur.',
      achievements: [
        'Installation et configuration système',
        'Résolution de problèmes techniques',
        'Documentation des procédures',
      ],
    },
    {
      title: 'Assistant Responsable Informatique',
      company: 'Kapital Humain & Conseils',
      period: 'Expérience en conseil',
      description: 'Assistance dans la gestion IT et le développement de solutions digitales RH.',
      achievements: [
        'Automatisation de processus',
        'Formation des utilisateurs',
        'Veille technologique',
      ],
    },
    {
      title: 'Développeur Stagiaire',
      company: 'T-PAPY Consulting',
      period: 'Stage de formation',
      description: 'Initiation au développement professionnel et aux méthodologies projet.',
      achievements: [
        'Développement web fullstack',
        'Gestion de projets clients',
        'Apprentissage des frameworks modernes',
      ],
    },
    {
      title: 'Technicien Maintenance PC & GSM',
      company: 'OLA GSM Maintenance',
      period: 'Expérience technique',
      description: 'Réparation et maintenance de matériel informatique et téléphonie mobile.',
      achievements: [
        'Diagnostic et réparation hardware',
        'Service client de qualité',
        'Gestion des stocks de pièces',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-8 lg:px-16 xl:px-24 bg-white">
      <div className="w-full">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Expériences Professionnelles
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-slate-400 via-slate-600 to-slate-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Un parcours diversifié dans le développement et les services informatiques
          </p>
        </div>

        <div className="space-y-6 w-full">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="border-2 border-slate-200 hover:border-slate-400 hover:shadow-lg transition-all duration-300 group"
            >
              <CardContent className="p-6 md:p-8 w-full">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-600 mb-2">
                      <Briefcase className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                  <div className="hidden md:block w-16 h-16 bg-slate-100 rounded-full flex-shrink-0 group-hover:bg-slate-900 transition-colors duration-300">
                    <div className="w-full h-full flex items-center justify-center">
                      <Briefcase className="w-8 h-8 text-slate-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                </div>

                <p className="text-slate-700 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
