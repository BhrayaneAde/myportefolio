'use client';

import { useEffect, useState } from 'react';
import {
  ArrowRight,
  Code2,
  Smartphone,
  Terminal,
  Sparkles,
  Zap,
  Rocket,
  Trophy,
  Target
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    {
      value: '4+',
      label: "Années d'Expérience",
      icon: Rocket,
      color: 'from-slate-500 to-gray-600'
    },
    {
      value: '10+',
      label: 'Projets Majeurs',
      icon: Target,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      value: '100%',
      label: 'Satisfaction Client',
      icon: Trophy,
      color: 'from-indigo-500 to-blue-600'
    }
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-black overflow-hidden flex items-center justify-start px-8 lg:px-16 xl:px-24"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900/20 to-black" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/svg%3E')]" />
      </div>

      {/* Mouse follower */}
      <div
        className="absolute w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 blur-sm opacity-60 pointer-events-none transition-all duration-300"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${isLoaded ? 1 : 0})`
        }}
      />

      <div className="relative z-10 w-full max-w-none">
        {/* Network Background Effect */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="2" fill="#60a5fa" opacity="0.5" />
                <line x1="50" y1="50" x2="100" y2="0" stroke="#60a5fa" strokeWidth="0.5" opacity="0.3" />
                <line x1="50" y1="50" x2="100" y2="100" stroke="#60a5fa" strokeWidth="0.5" opacity="0.3" />
                <line x1="50" y1="50" x2="0" y2="100" stroke="#60a5fa" strokeWidth="0.5" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#network)" />
          </svg>
        </div>

        {/* Main Content */}
        <div className="relative z-10 pt-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            <span className="text-sm font-medium text-white">
              Disponible pour de nouveaux projets
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black leading-none mb-8">
            <span className="block text-white mb-2">PLUS QU'UN</span>
            <span className="block text-white mb-2">DÉVELOPPEMENT,</span>
            <span className="block text-transparent bg-gradient-to-r from-blue-400 via-cyan-500 to-indigo-400 bg-clip-text mb-2">
              JE CONÇOIS
            </span>
            <span className="block text-white">DES EXPÉRIENCES</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-2xl mb-12 leading-relaxed">
            Développeur Fullstack passionné, je transforme vos idées en solutions numériques innovantes et performantes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105"
            >
              Démarrer un projet <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={() => scrollToSection('skills')}
              className="border-2 border-white/30 bg-transparent text-white hover:bg-white/10 font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300"
            >
              Voir mes compétences <Terminal className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="absolute bottom-8 left-0 right-0 px-8 lg:px-16 xl:px-24">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
            {/* Left side - Categories */}
            <div className="flex flex-col sm:flex-row gap-8 lg:gap-12 text-sm font-bold text-gray-400 uppercase tracking-wider">
              <div className="hover:text-white transition-colors cursor-pointer">
                CRÉER DES EXPÉRIENCES
              </div>
              <div className="hover:text-white transition-colors cursor-pointer">
                CRÉER DES SENSATIONS
              </div>
              <div className="hover:text-white transition-colors cursor-pointer">
                CRÉER DES ÉMOTIONS
              </div>
            </div>

            {/* Right side - Stats */}
            <div className="flex gap-8">
              {stats.slice(0, 2).map((stat, index) => (
                <div key={index} className="text-left lg:text-right">
                  <div className="text-2xl lg:text-3xl font-black text-white">{stat.value}</div>
                  <div className="text-xs lg:text-sm text-gray-400 uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
