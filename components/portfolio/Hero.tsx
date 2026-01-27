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
      value: '7+',
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
      className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8"
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

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 mb-12">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400" />
          </span>
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span className="text-sm font-semibold text-white">
            Disponible pour de nouveaux projets
          </span>
        </div>

        {/* Title */}
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-black mb-12">
          <span className="block text-white">Bhrayane Freudel</span>
          <span className="block mt-4 bg-gradient-to-r from-blue-400 via-cyan-500 to-indigo-400 bg-clip-text text-transparent">
            YENOU
          </span>
        </h1>

        {/* Roles */}
        <div className="flex justify-center gap-6 mb-16">
          <div className="px-8 py-4 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center gap-4 text-white">
            <Code2 className="w-6 h-6 text-blue-400" />
            <span className="font-bold">Fullstack</span>
          </div>
          <div className="px-8 py-4 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center gap-4 text-white">
            <Smartphone className="w-6 h-6 text-cyan-400" />
            <span className="font-bold">Mobile</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-16">
          Transformez vos idées en{' '}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-bold">
            solutions numériques d'excellence
          </span>
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row justify-center gap-8 mb-24">
          <Button
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-12 py-8 text-xl rounded-3xl"
          >
            Me contacter <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
          <Button
            onClick={() => scrollToSection('skills')}
            className="border border-white/20 bg-transparent text-white hover:bg-white/10 px-12 py-8 text-xl rounded-3xl"
          >
            Voir mes compétences <Terminal className="ml-3 w-6 h-6" />
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="relative text-center">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-10 rounded-3xl blur-xl`}
                />
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                  <div className="flex justify-center mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div
                    className={`text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-4`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 uppercase font-bold">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
