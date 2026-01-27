'use client';

import { Code, Server, Smartphone, Database, Wrench } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Vue.js', 'React', 'Next.js', 'Tailwind CSS'],
    },
    {
      icon: Server,
      title: 'Backend',
      color: 'from-green-500 to-emerald-500',
      skills: ['PHP', 'Laravel', 'FastAPI', 'Node.js', 'Express', 'Python'],
    },
    {
      icon: Smartphone,
      title: 'Mobile',
      color: 'from-orange-500 to-red-500',
      skills: ['Flutter', 'React Native', 'Développement Cross-platform'],
    },
    {
      icon: Database,
      title: 'Bases de Données',
      color: 'from-slate-500 to-slate-700',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'REST API'],
    },
    {
      icon: Wrench,
      title: 'Autres Compétences',
      color: 'from-amber-500 to-yellow-600',
      skills: ['Git', 'Maintenance Informatique', 'Support Réseau', 'Design UI/UX'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Compétences Techniques
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-slate-400 via-slate-600 to-slate-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Une expertise complète pour concevoir et développer vos projets numériques
            de A à Z
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="border-2 border-slate-200 hover:border-slate-400 hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              <CardContent className="p-0">
                <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                  <category.icon className="w-10 h-10 mb-3" />
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-slate-100 text-slate-800 hover:bg-slate-900 hover:text-white transition-colors duration-300 px-3 py-1 text-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 md:p-12 border-2 border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Technologies Maîtrisées
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js',
              'Vue.js', 'Tailwind CSS', 'PHP', 'Laravel', 'Python', 'FastAPI',
              'Node.js', 'Express', 'Flutter', 'MySQL', 'PostgreSQL', 'MongoDB',
              'REST API', 'Git', 'Docker'
            ].map((tech, index) => (
              <Badge
                key={index}
                className="bg-slate-900 text-white hover:bg-slate-700 transition-colors duration-300 px-4 py-2 text-base"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
