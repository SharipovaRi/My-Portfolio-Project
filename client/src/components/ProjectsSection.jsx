import { Github, ExternalLink, CircleArrowRight } from "lucide-react";

const projects = [
{
    /* Project 1*/
    id: 1,
    title: "MunchMatch",
    description: "Developed the backend for a personalized meal planning website that generates custom meal plans based on user-defined criteria. The project was built using Java (Spring Boot), H2 database, React, TypeScript, and other technologies.",
    image: "/projects/Picture1.png",
    tags: ["Java", "H2", "Spring Boot", "REST API"],
    githubURL:"https://github.com/joaovictorbarrera/MunchMatch.git",
    projectURL: "https://munchmatch-production.up.railway.app",
}
]

export const ProjectsSection = () =>{

    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured Projects</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">This is my past and current projects. These projects highlight my skills and reflect my growth as a developer. </p>
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> 
            {projects.map((project, key) => (
                <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                    <div className="h-48 overflow-hidden ">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top transition-transform duration-500 scale-107  translate-x-2 group-hover:scale-115"/>
                    </div>
                    <div className="p-4">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag) =>(
                                <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground ">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    
                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    <div className="flex justify-between items-center"> 
                        <div className="flex space-x-3">
                           
                            <a href={project.projectURL} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300" > <ExternalLink size={20} /> 
                            </a>
                            
                            <a href={project.githubURL} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300" > <Github size={20} /> 
                            </a>
                        </div>
                    </div>
                </div>
                </div>
            ))}
        </div>

        <div className="text-center mt-12">
            <a className="button w-fit flex items-center mx-auto gap-2" 
            target="blank"
            href="https://github.com/SharipovaRi">
                Check my GitHub <CircleArrowRight size={16}/>
            </a>
        </div>

        </div>
    </section>;
};