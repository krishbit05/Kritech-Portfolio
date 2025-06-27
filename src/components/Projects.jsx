import { ArrowRight, ExternalLink, GithubIcon } from "lucide-react"

const projects = [
    {
        id: 3,
        title: "Xtwitter clone",
        description: "A sleek and responsive landing page for X (formerly Twitter) built with Tailwind CSS, featuring modern UI elements, dark mode styling, and mobile-first design principles — perfect for showcasing brand presence or social integration.",
        image: "/images/x.jpeg",
        tag: ["Tailwindcss", "HTML", "Javascript"],
        demoUrl: "#",
        githubUrl: "https://github.com/krishbit05/X-Twitter",
    },
    {
        id: 4,
        title: "Netflix Clone",
        description: "A simple Netflix clone built using only HTML, CSS, and JavaScript, featuring a responsive layout, movie poster grid, and interactive UI — mimicking the look and feel of the original Netflix homepage with dynamic movie listings using TMDB API.",
        image: "/images/net1.jpeg",
        tag:["HTML/CSS", "API", "JavaScript"],
        demoUrl: "#",
        githubUrl: "https://github.com/krishbit05/Netflix-clone",
    },
    {
        id: 5,
        title: "Todo App",
        description: "A clean and responsive To-Do App built with HTML, CSS, and JavaScript, allowing users to add, delete, and mark tasks as completed — with a minimal UI and real-time task management.Beautiful effects after task completion. ",
        image: "/images/todo.jpeg",
        tag: ["HTML", "CSS", "JavaScript"],
        demoUrl: "#",
        githubUrl: "https://github.com/krishbit05/Todo-App",
    }
]

export const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo deserunt recusandae odit voluptate rerum iure autem dolore dolorem quisquam nisi?
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-fit transition-transform duration-300 group-hover:scale-110" />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tag.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary border">{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><ExternalLink/> </a>
                                    <a href={project.githubUrl}target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><GithubIcon/></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-center mt-12">
                <a href="https://github.com/krishbit05" target="_blank " className="cosmic-button w-fit flex items-center mx-auto gap-2">
                    Check My Github <ArrowRight size={16}/>
                </a>
            </div>
        </section>
    )
}