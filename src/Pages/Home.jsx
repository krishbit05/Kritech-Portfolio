import { AboutSection } from "../components/AboutSection.jsx";
import { ContactSection } from "../components/ContactSection.jsx";
import { Footer } from "../components/Footer.jsx";
import { HeroSection } from "../components/HeroSection.jsx";
import { Navbar } from "../components/Navbar.jsx";
import { ProjectSection } from "../components/Projects.jsx";
import { SkillsSection } from "../components/SkillsSection.jsx";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home=()=>{
    return(
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <StarBackground/>
            <Navbar/>
            <main>
                <HeroSection/>
                <AboutSection/>
                <SkillsSection/>
                <ProjectSection/>
                <ContactSection/>
            </main>
            <Footer/>
        </div>
    )
};