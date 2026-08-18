import HTMLIcon from "../assets/icons/HTML5.svg?react";
import CSSIcon from "../assets/icons/CSS3.svg?react";
import JSIcon from "../assets/icons/JavaScript.svg?react";
import TSIcon from "../assets/icons/TypeScript.svg?react";
import ReactIcon from "../assets/icons/React.svg?react";
import NextIcon from "../assets/icons/NextJs.svg?react";
import TailwindIcon from "../assets/icons/TailwindCss.svg?react";
import GitIcon from "../assets/icons/GitHub.svg?react";
import MySQLIcon from "../assets/icons/MySQL.svg?react";
import PythonIcon from "../assets/icons/Python.svg?react";
import ViteIcon from "../assets/icons/Vite.svg?react";
import ESLintIcon from "../assets/icons/ESLint.svg?react";

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen relative flex flex-col justify-center gap-10 px-6 md:px-12 lg:px-20 text-black/80 bg-[#f0b98c] "
    >
      <p className="text-2xl font-bold">SKILLS</p>
      <div className="grid grid-cols-4 gap-4 p-8">
        <div className="flex flex-col items-center gap-2">
          <HTMLIcon className="h-10 w-10" />
          <span>HTML5</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <CSSIcon className="w-10 h-10" />
          <span>CSS3</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <JSIcon className="w-10 h-10" />
          <span>JavaScript</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <TSIcon className="w-10 h-10" />
          <span>TypeScript</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <ReactIcon className="w-10 h-10" />
          <span>React</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <NextIcon className="w-10 h-10" />
          <span>Next.js</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <TailwindIcon className="w-10 h-10" />
          <span>Tailwind CSS</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <GitIcon className="w-10 h-10" />
          <span>Git & GitHub</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <MySQLIcon className="w-10 h-10" />
          <span>MySQL</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <PythonIcon className="w-10 h-10" />
          <span>Python</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <ViteIcon className="w-10 h-10" />
          <span>Vite</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <ESLintIcon className="w-10 h-10" />
          <span>ESLint</span>
        </div>
      </div>
    </section>
  );
}

export default Skills;
