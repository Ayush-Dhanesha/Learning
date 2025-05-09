import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <div className="pb-20 bg-gray-950">
      <div className="container py-32">
        <div className="flex justify-center ">
          <p className="uppercase font-semibold text-emerald-500 text-4xl tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
            Real-world Projects
          </p>
        </div>
        <h2 className="font-serif text-3xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-white/60 text-center mt-4">
          Here are some of the projects I've worked on with wide range of concepts and hard-coded data.
        </p>
      </div>

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioProjects.map((project) => (
            <div key={project.title} className="bg-gray-900 rounded-3xl relative z-0 after:content-[''] after:absolute after:inset-0 after:blur-3xl after:z-10 overflow-hidden after:outline after:outline-2 after:-outline-offset-2 after:outline-white/20 after:pointer-events-none after:opacity-0 after:transition-opacity after:duration-300 after:hover:opacity-100">
              <Image src={grainImage} alt="Grain" fill className="absolute opacity-15 -z-10 inset-0" />
              <div className="relative z-20 p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent gap-2 bg-clip-text inline-flex font-bold uppercase tracking-widest text-sm">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-serif mt-2">{project.title}</h3>
                <hr className="border-white/15 border-t-2 my-4"/>
                <ul className="flex flex-col gap-4 mt-4">
                  {project.results.map((result) => (
                    <li key={result.title} className="flex items-center gap-2 text-white/60">
                      <CheckCircleIcon className="size-4 text-emerald-500 flex-shrink-0"/>
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>
                <a href={project.link} className="block mt-8">
                  <button className="bg-white text-gray-900 rounded-3xl inline-flex items-center justify-center gap-2 h-12 w-full max-w-sm mx-auto">  
                    View Live Site
                    <ArrowUpRightIcon className="size-4"/>
                  </button>
                </a>
              </div>
              <div className="relative h-[300px] md:h-[400px] w-full rounded-3xl overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
