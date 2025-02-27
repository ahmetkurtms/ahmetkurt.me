import type React from 'react';
import {
  FaDocker,
  FaGit,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaJs,
  FaLinux,
  FaVuejs,
} from 'react-icons/fa';
import {
  SiC,
  SiFigma,
  SiNuxtdotjs,
  SiOpencv,
  SiPython,
  SiVercel,
  SiGnubash,
  SiPostgresql,
  SiAdobephotoshop,
  SiNotion,
} from 'react-icons/si';
import { VscVscodeInsiders } from 'react-icons/vsc';
import { Button } from '@/components/ui/button';

const TechIcon = ({
  icon: Icon,
  name,
  level,
}: {
  icon: React.ElementType;
  name: string;
  level: number;
}) => {
  const getLevelWidth = (level: number) => {
    if (level >= 90) return '100%';
    if (level >= 70) return '80%';
    if (level >= 50) return '60%';
    if (level >= 30) return '40%';
    return '20%';
  };

  return (
    <div className='block'>
      <div className='tech-icons group relative flex flex-col items-center justify-center p-4 bg-gray-100 dark:bg-zinc-900 rounded-lg border border-green-500/20 hover:bg-gray-200 dark:hover:bg-zinc-800 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10'>
        <Icon className='w-12 h-12 text-green-500 group-hover:scale-0 transition-transform duration-300' />

        <div className='absolute flex flex-col items-center scale-0 group-hover:scale-100 transition-all duration-300'>
          <span className='text-sm font-medium text-black dark:text-white select-none cursor-default tracking-wide mb-2'>
            {name}
          </span>
          <div className='w-32 relative h-2'>
            <div className='absolute w-full h-full bg-gray-200 dark:bg-zinc-700 rounded-full'>
              <div className='absolute w-full h-full flex justify-between px-[1px]'>
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className='w-[1px] h-full bg-gray-400 dark:bg-zinc-600'
                  />
                ))}
              </div>
            </div>
            <div
              className='absolute top-0 h-full bg-green-500 rounded-full transition-all duration-300'
              style={{ width: getLevelWidth(level) }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Skills() {
  const techStack = [
    {
      icon: SiC,
      name: 'C',
      level: 60,
    },
    {
      icon: FaCss3Alt,
      name: 'CSS',
      level: 80,
    },
    {
      icon: FaDocker,
      name: 'Docker',
      level: 80,
    },
    {
      icon: SiFigma,
      name: 'Figma',
      level: 80,
    },
    {
      icon: FaGit,
      name: 'Git',
      level: 80,
    },
    {
      icon: FaHtml5,
      name: 'HTML',
      level: 90,
    },
    {
      icon: FaJava,
      name: 'Java',
      level: 80,
    },
    {
      icon: FaJs,
      name: 'JavaScript',
      level: 60,
    },
    {
      icon: FaLinux,
      name: 'Linux',
      level: 80,
    },
    {
      icon: SiNuxtdotjs,
      name: 'Nuxt.js',
      level: 60,
    },
    {
      icon: SiOpencv,
      name: 'OpenCV',
      level: 40,
    },
    {
      icon: SiPostgresql,
      name: 'PostgreSQL',
      level: 80,
    },
    {
      icon: SiPython,
      name: 'Python',
      level: 80,
    },
    {
      icon: FaVuejs,
      name: 'Vue.js',
      level: 60,
    },
  ];

  const tools = [
    {
      icon: SiAdobephotoshop,
      name: 'Adobe Photoshop',
      level: 60,
    },
    {
      icon: SiGnubash,
      name: 'Bash',
      level: 80,
    },
    {
      icon: SiFigma,
      name: 'Figma',
      level: 80,
    },
    {
      icon: SiNotion,
      name: 'Notion',
      level: 100,
    },
    {
      icon: SiVercel,
      name: 'Vercel',
      level: 80,
    },
    {
      icon: VscVscodeInsiders,
      name: 'VS Code',
      level: 100,
    },
  ];

  return (
    <div className='space-y-12 w-full'>
      {/* Professional Skillset Section */}
      <section>
        <h2 className='text-2xl font-bold mb-8'>
          Professional{' '}
          <span className='text-green-500 font-extrabold'>Skillset</span>
        </h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center pb-12'>
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className='transform hover:-translate-y-1 transition-transform duration-300'
            >
              <TechIcon icon={tech.icon} name={tech.name} level={tech.level} />
            </div>
          ))}
        </div>
      </section>

      {/* Tools I Use Section */}
      <section>
        <h2 className='text-2xl font-bold mb-8'>
          Tools <span className='text-green-500 font-extrabold'>I Use</span>
        </h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center pb-12'>
          {tools.map((tool) => (
            <div
              key={tool.name}
              className='transform hover:-translate-y-1 transition-transform duration-300'
            >
              <TechIcon icon={tool.icon} name={tool.name} level={tool.level} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
