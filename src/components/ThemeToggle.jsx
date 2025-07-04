import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.add("light");
            document.documentElement.classList.remove("dark");
        }
    }, [])
    function ToggleTheme() {
        if (isDarkMode) {
            document.documentElement.classList.add("light");
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.remove("light");
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    }
    return <button onClick={ToggleTheme} className={cn("z-50 rounded-full transistion-colors duration-300"
    ,"focus:outline-hidden",
    )}>
        {isDarkMode ? <Sun className="h-6 w-6 text-yellow-300" /> : <Moon className="h-6 w-6 text-blue-800" />}</button>
}