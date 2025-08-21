import { Briefcase, Code, BookOpenText } from "lucide-react";

export const AboutSection = () => {
    return <section id="about" className="py-25 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>
             <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                This section is about my background and the skills I have developed along the way. I am passionate about learning and always looking for ways to grow, whether it is improving my skills or learning something new!
             </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-32 items-stretch">
                <div className="space-y-8">
                    <h3 className="text-2xl font-bold">Education</h3>
                    <div className="space-y-3">
                        <h4 className="text-muted-foreground font-bold">Master of Science in Computer Science </h4>
                        <p className="text-muted-foreground"> University of South Florida </p>
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-muted-foreground font-bold">Pathway to Computing Graduate Certificate</h4>
                        <p className="text-muted-foreground"> University of South Florida </p>
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-muted-foreground font-bold">Associate of Science in Computer Programming and Analysis (Software Development)</h4>
                        <p className="text-muted-foreground"> Valencia College </p>
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-muted-foreground font-bold">Bachelor of Science in Hospitality Management</h4>
                        <p className="text-muted-foreground"> University of Central Florida (Rosen College of Hospitality Management) </p>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 gap-3">
                    <h3 className="text-2xl font-bold">Skills</h3>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6"/>
                            </div>
                            <div className="grid grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3 text-left">
                                <h4 className="font-semibold"> Python </h4>
                                <h4 className="font-semibold"> Java </h4>
                                <h4 className="font-semibold"> C </h4>
                                <h4 className="font-semibold"> HTML </h4>
                                <h4 className="font-semibold"> CSS </h4>
                                <h4 className="font-semibold"> JavaScript</h4>
                                <h4 className="font-semibold"> MySQL </h4>     
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <BookOpenText className="h-6 w-6"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold">Data Structures and Algorithms</h4>
                                <h4 className="font-semibold">Introduction to Artificial Intelligence</h4>
                                <h4 className="font-semibold">Operating Systems</h4>
                            </div>
                        </div>
                    </div>
                    
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold">Leadership</h4>
                                <h4 className="font-semibold">Communication</h4>
                                <h4 className="font-semibold">Team Collaboration</h4>
                                <h4 className="font-semibold">Time Management and Prioritization</h4>
                                <h4 className="font-semibold">Problem Solving</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
};