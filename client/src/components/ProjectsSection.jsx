import { Github, ExternalLink, CircleArrowRight, ChevronRight } from "lucide-react";

const projects = [
{
    /* Project 1*/
    id: 1,
    title: "AI Beauty Product Success Predictor",
    description: "End-to-end machine learning platform that predicts beauty product launch success using historical Sephora data. Features SHAP explainability, a Gemini-powered AI assistant, FastAPI backend, Next.js frontend, and real-time deployment on Railway.",
    image: "/projects/Picture.png",
    tags: ["Python", "Fast API", "SHAP", "Scikit-Learn", "Next.js", "TypeScript", " Gemini API ", "Railway"],
    githubURL:"https://github.com/SharipovaRi/beauty_product_success_predictor",
    websiteURL: "https://beauty-launch.up.railway.app/"
},
{
    /* Project 2*/
    id: 2,
    title: "E-Commerce Website Review Prediction System",
    description: "End-to-end Machine Learning system that predicts customer review ratings (1-5 ratings) and identifies dissatisfaction risk based on both review text and structured e-commerce data.",
    image: "/projects/Picture2.png",
    tags: ["Python", "Fast API", "Docker", "Streamlit", "GitHub Actions", "Pytest"],
    githubURL:"https://github.com/SharipovaRi/ecommerce_review_prediction_system",
    websiteURL: "https://e-commerce-review-prediction-system.up.railway.app/" 
},
{
    /* Project 3*/
    id: 3,
    title: "Operations Analytics and Risk Monitoring Platform",
    description: "Developed an end-to-end analytics platform that combines operational, customer behavior, and sales data to support business intelligence, forecasting, anomaly detection, and risk monitoring. Built using Python, PostgreSQL, SQL, and Power BI.",
    image: "/projects/Picture4.png",
    tags: ["Python", "PostgreSQL", "SQL", "Power BI"],
    githubURL:"https://github.com/SharipovaRi/operations_analytics_and_risk_monitoring.git"
},
{
    /* Project 4*/
    id: 4,
    title: "Hotel Revenue & Guest Experience Analytics",
    description:  "Built interactive Excel and Power BI dashboards to analyze hotel booking performance and guest review data. The project explores revenue trends, cancellations, customer segments, occupancy patterns, and guest satisfaction across 119K+ bookings and 515K+ reviews.",
    image: "/projects/Picture5.png",
    tags: ["Excel", "Power BI", "Power Query", "Pivot Tables"],
    githubURL:"https://github.com/SharipovaRi/hotel_revenue_and_guest_experience_analytics.git"
},
{
    /* Project 5*/
    id: 5,
    title: "MunchMatch",
    description: "Developed the backend for a personalized meal planning website that generates custom meal plans based on user-defined criteria. The project was built using Java (Spring Boot), H2 database, React, TypeScript, and other technologies.",
    image: "/projects/Picture1.png",
    tags: ["Java", "H2", "Spring Boot", "REST API"],
    githubURL:"https://github.com/joaovictorbarrera/MunchMatch.git"
}
]

export const ProjectsSection = () =>{

    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured Projects</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"> These past and current projects showcase my skills, demonstrate my practical experience, and reflect my ongoing growth. </p>
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> 
            {projects.map((project, key) => (
                <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col">
                    <div className="h-64 overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top transition-transform duration-500 scale-100  translate-x-2 group-hover:scale-115"/>
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                            >
                                {tag}
                            </span>
                            ))}
                        </div>

                        <h3 className="text-xl font-semibold mb-1">
                            {project.title}
                        </h3>

                        <p className="text-muted-foreground text-sm mb-4">
                            {project.description}
                        </p>
                    <div className="flex justify-between items-center mt-auto">
                    <div className="flex space-x-3">

                    <a
                        href={project.githubURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                        <Github size={20} />
                    </a>

                    {project.websiteURL && (
                        <a
                        href={project.websiteURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                        <ExternalLink size={20} />
                        </a>
                    )}

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
                Check my GitHub <ChevronRight size={16}/>
            </a>
        </div>

        </div>
    </section>;
};