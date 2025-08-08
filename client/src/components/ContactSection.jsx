import { Linkedin, Mail, MapPin, Send} from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

export const ContactSection = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
  });
  const [status, setStatus] = useState(""); 
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("back-portfolio-project-production.up.railway.app", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (err) {
      setStatus("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

    return (
    <section id="contact" className="py-24 px-4 relative bg-secondaary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Contact Me</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                I am always open to new opportunities and collaborations. Feel free to reach out. 
                <br />
                Hope to hear from you soon. Thank you!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-8 mt-6">Contact Information</h3>
                    
                    <div className="space-y-12 justify-center text-left">
                    {/*Email*/}
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Mail className="h-6 w-6 text-secondary"/>
                            </div>
                            <div>
                                <h4 className="font-medium">Email</h4>
                                <a href="mailto:ritasharipova10@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">ritasharipova10@gmail.com</a>
                            </div>
                        </div>
                    {/*LinkedIn*/}
                    
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Linkedin className="h-6 w-6 text-secondary"/>
                            </div>
                            <div>
                                <h4 className="font-medium">LinkedIn</h4>
                                <a href="https://linkedin.com/in/rita-sharipova" target="blank" className="text-muted-foreground hover:text-primary transition-colors">linkedin.com/in/rita-sharipova</a>
                            </div>
                        </div>
                    {/*Address*/}
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <MapPin className="h-6 w-6 text-secondary"/>
                            </div>
                            <div>
                                <h4 className="font-medium">Location</h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors">Orlando/Tampa, Florida</a>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                    <form className="space-y-6 text-left" onSubmit={handleSubmit}> 
                        {/*Name*/}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                            <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                            placeholder="Jane Doe"
                            />
                        </div>
                        {/*Email*/}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                            <input 
                            type="email"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                            placeholder="janedoe@gmail.com"
                            />
                        </div>

                        {/*Message*/}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                            <textarea 
                            id="message"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-4 border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                            placeholder="Hello! I would like to contact you about..."
                            />
                        </div>
                        
                        {/*Submit*/}
                        <button
                            type="submit"
                            disabled={loading}
                            className={cn("button w-full flex items-center justify-center gap-2", {
                            "opacity-50 cursor-not-allowed": loading,
                            })}
                        >
                            {loading ? "Sending..." : "Send Message"}
                            <Send size={16} />
                        </button>

                        {/* Feedback */}
                        {status && <p className="text-sm mt-2 text-muted-foreground">{status}</p>}
                    </form>
                </div>
            </div>
        </div>
    </section>
    );
};