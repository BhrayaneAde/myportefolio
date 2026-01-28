'use client';

import { GraduationCap, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Education() {
  const education = [
    {
      degree: 'Licence en Système Informatique et Logiciel',
      institution: 'Université Les Cours Sonou Porto-Novo',
      period: 'Diplôme universitaire',
      description: 'Formation complète en développement logiciel, architecture système et gestion de projets informatiques.',
      highlights: [
        'Développement d\'applications web et mobile',
        'Architecture et conception de systèmes',
        'Bases de données et gestion de données',
        'Réseaux et sécurité informatique',
      ],
    },
    {
      degree: 'Diplôme de Technicien (DT)',
      institution: 'Lycée Technique Industriel de Porto-Novo',
      period: 'Formation technique',
      description: 'Formation technique approfondie en maintenance informatique et électronique.',
      highlights: [
        'Maintenance matériel informatique',
        'Électronique et systèmes embarqués',
        'Réseaux informatiques',
        'Diagnostic et dépannage',
      ],
    },
  ];

  return (
    <section id="education" className="py-20 px-8 lg:px-16 xl:px-24 bg-slate-50">
      <div className="w-full">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Formation & Éducation
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-slate-400 via-slate-600 to-slate-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Une solide formation académique et technique
          </p>
        </div>

        <div className="space-y-8 w-full">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="border-2 border-slate-200 hover:border-slate-400 hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <CardContent className="p-0">
                <div className="md:flex">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-600 text-white p-8 md:w-1/3 flex flex-col justify-center items-center text-center">
                    <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                    <p className="text-slate-200 text-sm">{edu.period}</p>
                  </div>

                  <div className="p-8 md:w-2/3">
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="w-5 h-5 text-slate-600" />
                      <h4 className="text-lg font-semibold text-slate-900">
                        {edu.institution}
                      </h4>
                    </div>

                    <p className="text-slate-700 mb-6 leading-relaxed">
                      {edu.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {edu.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-600 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 border-2 border-slate-200 w-full">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Certifications & Compétences Complémentaires
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-items-stretch">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
              <Award className="w-6 h-6 text-slate-700 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Développement Web</h4>
                <p className="text-sm text-slate-600">Frontend & Backend moderne</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
              <Award className="w-6 h-6 text-slate-700 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Applications Mobile</h4>
                <p className="text-sm text-slate-600">Flutter & React Native</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
              <Award className="w-6 h-6 text-slate-700 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Maintenance IT</h4>
                <p className="text-sm text-slate-600">Support & Infrastructure</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
