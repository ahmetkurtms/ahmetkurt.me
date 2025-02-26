import type React from "react";
import { FaDocker, FaGit, FaHtml5, FaCss3Alt, FaJava, FaJs, FaLinux, FaVuejs } from "react-icons/fa";
import { SiC, SiFigma, SiNuxtdotjs, SiOpencv, SiPython, SiVercel } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import { Button } from "@/components/ui/button";

const TechIcon = ({ icon: Icon, name }: { icon: React.ElementType; name: string }) => (
  <div className="tech-icons group relative flex items-center justify-center p-4 bg-zinc-900 rounded-lg border border-green-500/20 hover:bg-zinc-800 transition-all duration-300">
    <Icon className="w-12 h-12 text-green-500 group-hover:scale-0 transition-transform duration-300" />

    <span className="absolute text-sm text-white scale-0 group-hover:scale-100 transition-transform duration-300">
      {name}
    </span>
  </div>
);

export default function Skills() {
  const techStack = [
    { icon: SiC, name: "C" },
    { icon: FaCss3Alt, name: "CSS" },
    { icon: FaDocker, name: "Docker" },
    { icon: SiFigma, name: "Figma" },
    { icon: FaGit, name: "Git" },
    { icon: FaHtml5, name: "HTML" },
    { icon: FaJava, name: "Java" },
    { icon: FaJs, name: "JavaScript" },
    { icon: FaLinux, name: "Linux" },
    { icon: SiNuxtdotjs, name: "Nuxt.js" },
    { icon: SiOpencv, name: "OpenCV" },
    { icon: SiPython, name: "Python" },
    { icon: FaVuejs, name: "Vue.js" },
  ];

  const tools = [
    { icon: VscVscodeInsiders, name: "VS Code" },
    { icon: SiFigma, name: "Figma" },
    { icon: SiVercel, name: "Vercel" },
  ];


  return (
    <div className="space-y-12 w-full">
      {/* Professional Skillset Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">
          Professional <span className="text-green-500">Skillset</span>
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 justify-center pb-12">
          {techStack.map((tech) => (
            <div key={tech.name} className="col-span-1">
              <TechIcon icon={tech.icon} name={tech.name} />
            </div>
          ))}
        </div>
      </section>

      {/* Tools I Use Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">
          Tools <span className="text-green-500">I Use</span>
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 justify-center pb-12">
          {tools.map((tool) => (
            <div key={tool.name} className="col-span-1">
              <TechIcon icon={tool.icon} name={tool.name} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
