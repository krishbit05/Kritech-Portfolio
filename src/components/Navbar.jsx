import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10); // ✅ corrected
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed w-full z-40 transition-all duration-300 items-center",
                isScrolled
                    ? "py-3 bg-primary/20 backdrop-blur-2xl shadow-lg"
                    : "py-5"
            )}
        >
            <div className="container flex items-center justify-between">
                {/* Logo */}
                <a
                    className="text-xl font-bold text-primary flex items-center"
                    href="#hero"
                >
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">Kritech </span>
                        Portfolio
                    </span>
                </a>
                <div className="flex justify-center gap-1 sm:gap-8">
                    {/* Desktop nav */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item, key) => (
                            <a key={key} href={item.href} className="text-foreground hover:text-purple-700 font-bold transition-colors">
                                {item.name}
                            </a>
                        ))}
                    </div>
                    {/* mobile nav  */}
                    <button onClick={() => setIsMenu((prev) => !prev)} className="md:hidden z-50 p-2 text-foreground" aria-label={isMenuOpen ? "close Menu" : "open Menu"} >{isMenuOpen ? <X /> : <Menu />}</button>
                    <div className={cn("fixed min-h-screen inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                        "transition-all duration-300 md:hidden",
                        isMenuOpen ? "fixed pointer-events-auto" : "hidden")}>
                        <div className="flex flex-col space-y-8 text-xl">
                            {navItems.map((item, key) => (
                                <a key={key} href={item.href}
                                    className="text-foreground hover:text-primary transition-colors"
                                    onClick={() => setIsMenu(false)}>
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
};
