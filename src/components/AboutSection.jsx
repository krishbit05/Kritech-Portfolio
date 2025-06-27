import { Briefcase, Code, Database, PenTool, PenToolIcon, User } from "lucide-react"

export const AboutSection = ()=>{
    return(
        <section id="about" className="py-24 px-4 relative">
            <div className="contianer mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Web Developer & Tech creator</h3>
                        <p className="text-muted-foreground">I’m a Computer Science student passionate about Full Stack Web Development. I’ve been actively learning and building with technologies like the MERN stack (MongoDB, Express, React, Node.js), along with modern tools like Next.js, TypeScript, and Tailwind CSS.</p>
                        <p className="text-muted-foreground">I'm capable of designing and developing fully responsive, scalable web applications from scratch — both frontend and backend. I enjoy turning ideas into functional products and constantly explore new technologies to stay ahead in the field.</p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>
                            <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-color duration-300">
                                Downlaod CV
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">Build responsive modern websites with strong backend logic using both SQL and NoSQL databases</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Database className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Strong Data Structures and Algorithms</h4>
                                    <p className="text-muted-foreground"> Proficient in solving DSA problems involving arrays, trees, graphs, dynamic programming, and more</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <PenToolIcon     className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Modern Tools</h4>
                                    <p className="text-muted-foreground"> Experienced with Git and GitHub for source control, collaboration, and deployment workflows,Skilled in using Figma for wireframing and prototyping user interfaces</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}