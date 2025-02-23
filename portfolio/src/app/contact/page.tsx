"use client";

import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
        <p className="text-xl mb-12 text-gray-300">
          Feel free to reach out to me via any of the platforms below!
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center">

          {/* Email Button */}
          <a href="mailto:ahmetkurtms@hotmail.com">
            <Button className="w-full md:w-auto bg-zinc-900 border-green-500/20 hover:border-green-500/50 hover:bg-green-500">
              <FaEnvelope className="mr-2 h-5 w-5" />
              Email
            </Button>
          </a>

          {/* Instagram Button */}
          <a href="https://instagram.com/ahmetkurtms" target="_blank" rel="noopener noreferrer">
            <Button className="w-full md:w-auto bg-zinc-900 border-green-500/20 hover:border-green-500/50 hover:bg-green-500">
              <FaInstagram className="mr-2 h-5 w-5" />
              Instagram
            </Button>
          </a>

          {/* LinkedIn Button */}
          <a href="https://linkedin.com/in/ahmetkurtms" target="_blank" rel="noopener noreferrer">
            <Button className="w-full md:w-auto bg-zinc-900 border-green-500/20 hover:border-green-500/50 hover:bg-green-500">
              <FaLinkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
          </a>

          {/* GitHub Button */}
          <a href="https://github.com/ahmetkurtms" target="_blank" rel="noopener noreferrer">
            <Button className="w-full md:w-auto bg-zinc-900 border-green-500/20 hover:border-green-500/50 hover:bg-green-500">
              <FaGithub className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Contact;
