import { ChevronDown, CircleArrowDown } from "lucide-react"

export const HeroSection = () => {
    return <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="containter max-w-4xl mx-auto text-center  z-10">
            <div className="space-y-6">
                <img src="/projects/pic.jpg" alt="My Photo" className="rounded-xl shadow-lg w-full max-w-sm lg:max-w-md mx-auto transition-all duration-300"/>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hi, I'm </span>
                    <span className="text-gradient opacity-0 animate-fade-in-delay-1">Rita </span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Sharipoiva</span>

                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    Master's student in Computer Science with a background in Hospitality Management, now transitioning into the IT field. Passionate about combining interpersonal skills with technical knowledge to solve real-world problems.
                </p>
                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="button">
                        View My Work
                    </a>
                </div>
            </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2">
                Scroll
            </span>
            <ChevronDown className="h-5 w-5 text-primary" />

           
        </div>
    </section>

};