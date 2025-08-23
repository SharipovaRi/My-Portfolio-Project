import {ChevronUp, CircleArrowUp } from "lucide-react";

export const Footer = () => {
    return <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-center items-center gap-x-4"> 
            <p className="text-sm text-muted-foreground "> &copy; {new Date().getFullYear()} Rita Sharipova Portfolio. All rights reserved.</p> 
            <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-secondary transition-colors ">
                <ChevronUp size={20}/>
            </a>
                
            
        </footer>
};