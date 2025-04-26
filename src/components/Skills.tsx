import React from "react";

type Skill = {
  name: string;
  logo: string;
  description: string;
};

const programmingLanguages: Skill[] = [
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    description: "Versatile language great for backend, data science, and automation.",
  },
  {
    name: "Java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    description: "Robust, object-oriented programming language used in enterprise applications.",
  },
  {
    name: "SQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    description: "Structured query language for managing relational databases.",
  },
  {
    name: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    description: "Markup language used to structure content on the web.",
  },
  {
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    description: "Stylesheet language used to describe the presentation of a document.",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    description: "Dynamic programming language used for interactive web development.",
  },
];

const tools: Skill[] = [
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    description: "Popular open-source relational database management system.",
  },
  {
    name: "Git & GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    description: "Version control system and platform for collaborative coding.",
  },
  {
    name: "Arduino",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
    description: "Open-source electronics platform for building digital devices.",
  },
];

const SkillCard = ({ skill }: { skill: Skill }) => (
  <div className="bg-white dark:bg-gray-700 shadow-md dark:shadow-none hover:shadow-xl dark:hover:shadow-lg transition-auto transition-shadow duration-0 ease-in-out rounded-2xl p-4 flex items-center space-x-4">
    <img src={skill.logo} alt={skill.name} className="w-12 h-12" />
    <div>
      <h3 className="text-lg font-semibold text-black dark:text-white">{skill.name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{skill.description}</p>
    </div>
  </div>
);

const SkillsShowcase: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="p-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center underline decoration-blue-400 dark:text-white">
          Skills & Expertise
        </h2>

        <h3 className="text-2xl font-bold mb-4 dark:text-white">Programming Languages</h3>
        <div className="grid md:grid-cols-3 gap-4 mb-8 bg-black-20 p-4">
          {programmingLanguages.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>

        <h3 className="text-2xl font-bold mb-4 dark:text-white">Tools</h3>
        <div className="grid md:grid-cols-3 gap-4 mb-8 bg-black-20 p-4">
          {tools.map((tool) => (
            <SkillCard key={tool.name} skill={tool} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsShowcase;