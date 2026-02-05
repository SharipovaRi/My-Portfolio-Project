
import { ExternalLink } from "lucide-react";
import { useState } from "react";


export const ExperienceSection = () => {

    const [showDetails, setShowDetails] = useState({
        one: false,
        two: false,
        three: false,
        four: false,
        five: false,
        six: false,
        seven: false,
        eight: false,
        nine: false,
    });

    function toggleDetail(key) {
        setShowDetails(prev => ({
            ...prev,
            [key]: !prev[key],
        }));
        }
        
    return <section id="experience" className="py-25 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center"> Experience </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                My academic and professional journey uniquely blends Hospitality and Information Technology that has allowed me to develop both interpersonal and technical skills. Additionally, I have engaged in extracurricular activities that showcase my various abilities and demonstrate my initiative. 
             </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-stretch">
                
                <div className="grid grid-cols-1 gap-3">
                <h3 className="text-2xl font-bold"> Work Experience </h3>
                
                <div className="gradient-border p-6 card-hover">
                    <div className="flex flex-col gap-4">
                        <div className="text-muted-foreground font-bold">
                            <h2>Bellini College Graduate Student Ambassador at University of South Florida</h2>  
                        </div>
                    
                    <button
                    onClick={()=> toggleDetail('three')}
                    className="self-center px-2 py-1 text-xs font-medium border rounded-md bg-secondary text-secondary-foreground">
                    {showDetails.three ? "Hide Info":"More Info"}
                    </button>    

                    {showDetails.three && (
                        <div className="text-sm text-secondary">
                            <ul className="list-disc list-inside text-sm text-secondary space-y-2 text-left">
                                <li>
                                    Represented Bellini College of Artificial Intelligence, Cybersecurity, and Computing to prospective and current graduate students, providing clear guidance on academic programs, campus resources, and student life. 
                                </li>
                                <li>
                                    Delivered responsive, professional support during orientations, campus events, and community-building activities, helping students understand academic expectations and available support services. 
                                </li>
                                <li>
                                    Communicated regularly with diverse audiences in one-on-one and group settings, answering questions clearly and professionally. 
                                </li>
                            </ul>
                        </div>
                    )}
                    
                    </div>
                </div> 

                <div className="gradient-border p-6 card-hover">
                    <div className="flex flex-col gap-4">
                        <div className="text-muted-foreground font-bold">
                            <h2>Laboratory Assistant at Computer Programming and Information Technology Laboratory</h2>  
                        </div>
                    
                        <button
                        onClick={()=> toggleDetail('one')}
                        className="self-center px-2 py-1 text-xs font-medium border rounded-md bg-secondary text-secondary-foreground">
                        {showDetails.one ? "Hide Info":"More Info"}
                        </button> 

                        {showDetails.one && (
                            <div className="text-sm text-secondary">
                                <ul className="list-disc list-inside text-sm text-secondary space-y-2 text-left">
                                <li>
                                    Provided tutoring and support to students in Python, C, and Java by reviewing code, identifying logical errors, and explaining programming concepts clearly in both in-person and online settings, while focusing on fundamental programming principles to build a strong foundation. 

                                </li>
                                <li>
                                    Assisted 10+ faculty members with software setup, troubleshooting, and classroom technology needs across Windows and  macOS environments to support effective course delivery and minimize technical disruptions during class and lab sessions. 
                                </li>
                                <li>
                                    Maintained accurate records and performed routine maintenance checks on 100+ computers to ensure consistency, reliability, and compliance with system requirements. 
                                </li>
                                </ul>
                            </div>
                        )}

                    </div>
                </div>
                

                <div className="gradient-border p-6 card-hover">
                    <div className="flex flex-col gap-4">
                        <div className="text-muted-foreground font-bold">
                            <h2>Gallery Lead/Supervisor on Duty at Hyatt Place Orlando Airport</h2>  
                        </div>

                    <button
                    onClick={()=>  toggleDetail('two')}
                    className="self-center px-2 py-1 text-xs font-medium border rounded-md bg-secondary text-secondary-foreground">
                    {showDetails.two ? "Hide Info":"More Info"}
                    </button>    

                    {showDetails.two && (
                        <div className="text-sm text-secondary">
                            <ul className="list-disc list-inside text-sm text-secondary space-y-2 text-left">
                               <li>
                                    Supervised front-desk operations for a 120+ room hotel, maintaining a positive guest experience by addressing inquiries, resolving concerns, and ensuring smooth operations in a fast-paced, high-volume environment. 
                                </li>
                                <li>
                                    Led and coached a 15+ member team, holding daily briefings and providing individual mentorship to enhance team performance and promote company values.
                                </li>
                                <li>
                                    Acted as Manager on Duty, resolving escalated issues promptly, supporting various departments, and ensuring smooth operations in the absence of management.
                                </li>
                                <li>
                                    Actively assisted in conducting hiring sessions and new hire training for over 10+ people, helping them quickly adapt to responsibilities and successfully integrate into the team.
                                </li>
                                <li>
                                    Managed scheduling, inventory tracking, and documentation for front desk and food & beverage operations, ensuring deadlines, records, and operational data were accurate, organized, and kept up to date. 
                                </li>   
                            </ul>
                        </div>
                    )}    
                    
                    </div>
                </div> 
                

                <div className="gradient-border p-6 card-hover">
                    <div className="flex flex-col gap-4">
                        <div className="text-muted-foreground font-bold">
                            <h2>Gallery Host/Front Desk Employee at Hyatt Place Orlando Airport</h2>  
                        </div>
                    
                    <button
                    onClick={()=> toggleDetail('three')}
                    className="self-center px-2 py-1 text-xs font-medium border rounded-md bg-secondary text-secondary-foreground">
                    {showDetails.three ? "Hide Info":"More Info"}
                    </button>    

                    {showDetails.three && (
                        <div className="text-sm text-secondary">
                            <ul className="list-disc list-inside text-sm text-secondary space-y-2 text-left">
                                <li>
                                    Delivered exceptional customer service by efficiently managing check-ins and check-outs for both individual guests and group reservations.
                                </li>
                                <li>
                                    Created and handled reservations for groups and individual guests with accuracy and attention to detail.
                                </li>
                                <li>
                                    Assisted in the hotel bar, café, breakfast area, and e-room, providing support and ensuring a positive guest experience.
                                </li>
                                <li>
                                    Set up and serviced meeting rooms to meet client specifications and maintain smooth operations.
                                </li>
                                <li>
                                    Worked with documentation and internal hospitality programs (e.g., Opera).
                                </li> 
                            </ul>
                        </div>
                    )}
                    
                    </div>
                </div> 
                
            </div>

                <div>
                  <div className="grid grid-cols-1 gap-3">
                <h3 className="text-2xl font-bold"> Extracurricular Activities</h3>
                {/*1*/}                
                <div className="gradient-border p-6 card-hover">
                    <div className="flex flex-col gap-4">

                       <div className="text-muted-foreground font-bold">
                            <h2>Vice President of “Source Code” IT & Programming Club</h2>  
                        </div> 

                        <button
                    onClick={()=> toggleDetail('four')}
                    className="self-center px-2 py-1 text-xs font-medium border rounded-md bg-secondary text-secondary-foreground">
                    {showDetails.four ? "Hide Info":"More Info"}
                    </button>    

                    {showDetails.four && (
                        <div className="text-sm text-secondary">
                            <p> Planned and coordinated 10+ IT-related events, workshops, and guest speaker sessions, ensuring smooth execution and helping members engage effectively with technical content. Encouraged participation and guided club members during events, reinforcing understanding of programming concepts and fostering a collaborative learning environment. 
                            </p>
                        </div>
                    )}
                    

                    </div>
                </div>
                {/*2*/} 
                <div className="gradient-border p-6 card-hover">
                    <div className="flex flex-col gap-4">
                        <div className="text-muted-foreground font-bold">
                            <h2>Treasurer/Vice President of the National Association for Catering and Events</h2>  
                        </div> 

                        <button
                    onClick={()=> toggleDetail('five')}
                    className="self-center px-2 py-1 text-xs font-medium border rounded-md bg-secondary text-secondary-foreground">
                    {showDetails.five ? "Hide Info":"More Info"}
                    </button>    

                    {showDetails.five && (
                        <div className="text-sm text-secondary">
                            <p> Managed the organization’s budget and coordinated 10+ events, including workshops and guest speaker sessions, guiding members and connecting them with hospitality industry professionals. Created and managed social media content on Instagram and Facebook to share event information, industry insights, and professional opportunities, keeping members engaged and informed. 
                            </p>
                        </div>
                    )}
                    </div>
                </div> 
                {/*3*/} 
                <div className="gradient-border p-6 card-hover">
                    <div className="flex flex-col gap-4">
                        <div className="text-muted-foreground font-bold">
                            <h2>Registered Student Organizations Representative at Rosen Life (Student Government Association)</h2>  
                        </div> 

                        <button
                    onClick={()=> toggleDetail('six')}
                    className="self-center px-2 py-1 text-xs font-medium border rounded-md bg-secondary text-secondary-foreground">
                    {showDetails.six ? "Hide Info":"More Info"}
                    </button>    

                    {showDetails.six && (
                        <div className="text-sm text-secondary">
                            <p> Worked as part of the Rosen Life student team, collaborating with peers in different roles to plan and execute events that promoted student involvement, engagement, and community on campus. Communicated with students to gather feedback, share information, and ensure events met participants' needs while building connections across the campus community. 
                            </p>
                        </div>
                    )}

                    </div>
                </div> 
                </div>  
                </div>

                <div>
                  <div className="grid grid-cols-1 gap-3">
                <h3 className="text-2xl font-bold"> Additional Experience </h3>
                                
                <div className="gradient-border p-6 card-hover">
                    <div className="flex flex-col gap-4">

                       <div className="text-muted-foreground font-bold">
                            <h2> Featured in University of South Florida's website article</h2>  
                        </div> 

                        <button
                                onClick={()=> toggleDetail('seven')}
                                className="self-center px-2 py-1 text-xs font-medium border rounded-md bg-secondary text-secondary-foreground">
                                {showDetails.seven ? "Hide Info":"More Info"}
                        </button>    

                    {showDetails.seven && (
                        <div className="text-sm text-secondary">
                            <p> The article was published about my career transition from Hospitality to IT. The story was featured on the USF Innovative Education website and shared on the LinkedIn pages of USF Innovative Education and the USF Bellini College of Artificial Intelligence, Cybersecurity, and Computing.
                                <a href="https://www.usf.edu/innovative-education/news/2025/from-hospitality-to-tech-rita-sharipovas-pathway-to-computing.aspx" target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300" ><ExternalLink size={20} /> 
                            </a>
                            </p>
                        </div>
                    )}

                    </div>
                </div>

                           
                <div className="gradient-border p-6 card-hover">
                    <div className="flex flex-col gap-4">

                       <div className="text-muted-foreground font-bold">
                            <h2>Participated in the Intercollegiate Programming Competition (2024/2025)</h2>  
                        </div> 

                        <button
                            onClick={()=> toggleDetail('eight')}
                            className="self-center px-2 py-1 text-xs font-medium border rounded-md bg-secondary text-secondary-foreground">
                            {showDetails.eight ? "Hide Info":"More Info"}
                        </button>    

                    {showDetails.eight && (
                        <div className="text-sm text-secondary">
                            <p> Participated in the Intercollegiate Programming Competition, a statewide contest for college students across Florida. Competed using Java (2024) and Python (2025), earning 3rd place in 2024 and 4th place in 2025.
                            </p>
                        </div>
                    )}
                    

                    </div>
                </div>
               
                                          
                <div className="gradient-border p-6 card-hover">
                    <div className="flex flex-col gap-4">

                       <div className="text-muted-foreground font-bold">
                            <h2>Volunteered at UCF Nights Hacks, UCF Career Fair, Valencia Club Fair, etc.</h2>
                        </div> 

                        <button
                            onClick={()=> toggleDetail('nine')}
                            className="self-center px-2 py-1 text-xs font-medium border rounded-md bg-secondary text-secondary-foreground">
                            {showDetails.nine ? "Hide Info":"More Info"}
                        </button>    

                    {showDetails.nine && (
                        <div className="text-sm text-secondary">
                            <p> Served as a member of the University of Central Florida Volunteer Club and also, participated as a volunteer in various events and fairs for UCF and Valencia college to support event coordination and enhance communication skills.
                            </p>
                        </div>
                    )}

                    </div>
                </div>
            
                </div>
                </div>
            </div>
        </div>
    
    </section>
    }