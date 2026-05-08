import { ArrowUpRight } from "lucide-react";
import React from "react";
import { FaGithub } from "react-icons/fa";
import {AnimatedBorderButton} from "../components/AnimatedBorderButton";

const Project = [
  {
    title: "KnowMada",
    description:
      "A Ai video generator that creates videos from text input. It uses a combination of natural language processing and computer vision techniques to generate videos that are relevant to the input text.",
    image: "/Projects/Knowmada.png",
    tags: [
      "React",
      "Node.js",
      "Express",
      "Neon",
      "OpenAi",
      "Azure",
      "Typescript",
    ],
    link: "https://knowmada.vercel.app/",
    github: "https://github.com/AhmadMasood5/aivideocoursegenerator",
  },
  {
    title: "Pos Fertilizer",
    description:
      "A fertilizer management system that helps shop owners manage their inventory and sales.",
    image: "/Projects/PosFertilizer.png",
    tags: ["React", "Node.js", "Express", "Supabase", "Typescript"],
    link: "https://posfertilizers.vercel.app/",
    github: "https://github.com/AhmadMasood5/POS-Fertilizers",
  },
  {
    title: "Moveit",
    description:
      "A frontend for a moving company website that provides moving services to customers. It has a user-friendly interface and allows customers to book moving services online.",
    image: "/Projects/Moveit.png",
    tags: ["React", "Node.js", "Javascript"],
    link: "https://ahmadmasood5.github.io/Moveit/",
    github: "https://github.com/AhmadMasood5/Moveit",
  },
  {
    title: "Tindog",
    description:
      "A Frontend for a dog dating app that allows users to find their perfect dog match. It has a user-friendly interface and allows users to swipe right or left to find their perfect dog match.",
    image: "/Projects/TIndog.png",
    tags: ["React", "Node.js", "Javascript"],
    link: "https://ahmadmasood5.github.io/Tindog/",
    github: "https://github.com/AhmadMasood5/Tindog",
  },
  {
    title: "Estate",
    description:
      "A frontend for a real estate website that allows users to search for properties and view property details. It has a user-friendly interface and allows users to filter properties based on their preferences.",
    image: "/Projects/Estate.png",
    tags: ["React", "Node.js", "Javascript"],
    link: "https://ahmadmasood5.github.io/Estate/",
    github: "https://github.com/AhmadMasood5/Estate",
  },
];
const Projects = () => {
  return (
    <section id="Projects" className="py-32 relative overflow-hidden">
      {/*BG Glows*/}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/*Section Header*/}

        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 mt-4 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that <span className="font-serif italic font-normal text-white"> make an impact.</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web application to innovative tools that solves real-world problems.
          </p>
        </div>
        {/*Projects Grid*/}
        <div className="grid md:grid-cols-2 gap-8">
          {Project.map((project, index)=>(
            <div key={project.title} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1" style={{
              animationDelay: `${(index + 1) * 100}ms`
            }}>
              {/*Image*/}
              <div className="relative overflow-hidden aspect-video">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60"/>
                {/*Overlay Links*/}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                    <ArrowUpRight className="w-5 h-5"/>
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                    <FaGithub className="w-5 h-5"/>
                  </a>
                </div>

              </div>
              {/*Content*/}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 group-hover:translate-y-1 transition-all"/>
                </div>
                <p className="text-muted-foreground text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">{project.tags.map((tag,idx)=>(
                  <span key={`${tag}-${idx}`} className="px-4 py-1.5 rounded-full bg-surface text-sm font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                    {tag}
                  </span>
                ))}</div>
              </div>
            </div>
          ))}

          
        </div>
        {/*CTA Button*/}
          <div className="text-center mt-12 animate-fade-in animation-delay-500">
            <AnimatedBorderButton>
              View All Projects
              <ArrowUpRight className="w-5 h-5"/>
            </AnimatedBorderButton>
          </div>
      </div>
    </section>
  );
};

export default Projects;
