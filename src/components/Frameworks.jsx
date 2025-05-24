import { OrbitingCircles } from "./OrbitingCircles";
import css from "../assets/logos/css3.svg";
import git from "../assets/logos/git.svg";
import html from "../assets/logos/html5.svg";
import javascript from "../assets/logos/javascript.svg"; // fixed case
import microsoft from "../assets/logos/microsoft.svg";
import react from "../assets/logos/react.svg";
import tailwind from "../assets/logos/tailwindcss.svg";
import vite from "../assets/logos/vitejs.svg";

export function Frameworks() {
  const skillsMap = {
    css3: css,
    git: git,
    html5: html,
    javascript: javascript,
    microsoft: microsoft,
    react: react,
    tailwindcss: tailwind,
    vitejs: vite,
  };

  const skills = Object.keys(skillsMap);

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={skillsMap[skill]} alt={skill} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {[...skills].reverse().map((skill, index) => (
          <Icon key={index} src={skillsMap[skill]} alt={skill} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src, alt }) => (
  <img src={src} alt={alt} className="duration-200 rounded-sm hover:scale-110" />
);
