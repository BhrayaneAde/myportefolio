'use client';

import { ArrowRight, Code2, Smartphone, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
      
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/30 rounded-full blur-[100px] animate-pulse delay-700"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-pulse"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 hover:scale-105 transition-transform cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Disponible pour de nouveaux projets
          </span>
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-8 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
          <span className="text-foreground">Bhrayane Freudel</span>{' '}
          <span className="block mt-2 bg-gradient-to-r from-primary via-purple-400 to-accent bg-clip-text text-transparent pb-4">
            YENOU
          </span>
        </h1>

        <div className="flex items-center justify-center gap-4 mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          <div className="glass px-6 py-3 rounded-2xl flex items-center gap-3 text-foreground/80">
            <Code2 className="w-5 h-5 text-primary" />
            <span className="font-medium">Fullstack</span>
          </div>
          <div className="glass px-6 py-3 rounded-2xl flex items-center gap-3 text-foreground/80">
            <Smartphone className="w-5 h-5 text-accent" />
            <span className="font-medium">Mobile</span>
          </div>
        </div>

        <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
          Transformez vos idées en <span className="text-foreground font-semibold">solutions numériques d'excellence</span>.
          Expertise technique et créativité au service de votre vision.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-700">
          <Button
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-lg rounded-2xl shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 group"
          >
            Me contacter
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('skills')}
            className="glass hover:bg-white/20 border-white/10 text-foreground px-10 py-7 text-lg rounded-2xl hover:-translate-y-1 transition-all duration-300"
          >
            Voir mes compétences
            <Terminal className="ml-2 w-5 h-5" />
          </Button>
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-3 gap-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-14 duration-700 delay-1000">
          {[
            { value: '7+', label: 'Années d\'Expérience' },
            { value: '10+', label: 'Projets Majeurs' },
            { value: '100%', label: 'Satisfaction Client' }
          ].map((stat, index) => (
            <div key={index} className="text-center group cursor-default">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-b from-foreground to-foreground/50 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
