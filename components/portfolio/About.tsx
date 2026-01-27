'use client';

import { User, Target, Award, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  const highlights = [
    {
      icon: User,
      title: 'Professionnel',
      description: 'Diplômé en Licence Système Informatique et Logiciel, prêt à relever tous les défis.',
    },
    {
      icon: Target,
      title: 'Solutions',
      description: 'Une approche orientée résultats, alliant qualité de code et performance optimale.',
    },
    {
      icon: Award,
      title: 'Expertise',
      description: 'Maîtrise complète du développement web, mobile et de la maintenance IT.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Une veille technologique constante pour proposer des solutions innovantes.',
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-muted/30">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-slate-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-slate-600 bg-clip-text text-transparent">À Propos de Moi</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-slate-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8 animate-in slide-in-from-left duration-700 delay-200">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Jeune diplômé passionné par le développement informatique, je me spécialise
              dans la création de <span className="font-semibold text-blue-600">solutions web et mobiles</span> innovantes
              et performantes.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              En tant que <span className="font-semibold text-blue-600">développeur fullstack</span>, je maîtrise
              l'ensemble du cycle de développement, de la conception à la mise en production.
              Mon expertise s'étend également à la <span className="font-semibold text-blue-600">maintenance informatique</span> et
              au <span className="font-semibold text-blue-600">design</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mon approche se concentre sur la création de solutions adaptées aux besoins
              spécifiques de chaque client, en privilégiant la qualité, la performance et
              l'expérience utilisateur.
            </p>
          </div>

          <div className="relative animate-in slide-in-from-right duration-700 delay-400">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-slate-500 to-cyan-500 rounded-3xl transform rotate-3 opacity-20 blur-lg"></div>
            <div className="relative glass-card bg-card/50 p-10 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold mb-8 text-foreground">Mes Valeurs</h3>
              <ul className="space-y-6">
                {[
                  'Excellence technique et rigueur professionnelle',
                  'Innovation et apprentissage continu',
                  'Communication claire et collaboration efficace',
                  'Engagement et respect des délais'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2.5 group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="glass-card bg-card/30 border-0 hover:-translate-y-2 group"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:rotate-6 transition-all duration-300">
                  <item.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
