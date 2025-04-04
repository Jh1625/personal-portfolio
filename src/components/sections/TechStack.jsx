import { RiReactjsLine } from "react-icons/ri"
import { FaNodeJs } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"
import { SiMysql } from "react-icons/si"
import { SiJetpackcompose } from "react-icons/si"
import { RevealOnScroll } from "../RevealOnScroll";


export const TechStack = () => {
    return (
    <section id ="techstack" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
          <div className = "border-b border-neutral-800">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Technologies</h2>
                  <div className = "flex flex-wrap items-center justify-center gap-4">
                      <div className = "rounded-2xl border-4 border-neutral-800 p-4 hover:-translate-y-1 transition-all">
                        <RiReactjsLine className = "text-7xl text-cyan-400"/>
                      </div>
                      <div className = "rounded-2xl border-4 border-neutral-800 p-4 hover:-translate-y-1 transition-all">
                        <FaNodeJs  className = "text-7xl text-green-500"/>
                      </div>
                      <div className = "rounded-2xl border-4 border-neutral-800 p-4 hover:-translate-y-1 transition-all">
                        <RiTailwindCssFill className = "text-7xl text-cyan-400"/>
                      </div>
                      <div className = "rounded-2xl border-4 border-neutral-800 p-4 hover:-translate-y-1 transition-all">
                        <SiMysql className = "text-7xl text-[00758f]"/>
                      </div>
                      <div className = "rounded-2xl border-4 border-neutral-800 p-4 hover:-translate-y-1 transition-all">
                        <SiJetpackcompose className = "text-7xl text-green-500"/>
                      </div>
                  </div>
              </div>
            </RevealOnScroll>
    </section>
    );
  };
  