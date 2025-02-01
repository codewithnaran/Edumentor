"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-background shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          EduMentor
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="text-foreground hover:text-primary">
            Home
          </Link>
          <Link href="/courses" className="text-foreground hover:text-primary">
            Courses
          </Link>
          <Link
            href="/community"
            className="text-foreground hover:text-primary"
          >
            Community
          </Link>
          <Link href="/login" className="text-foreground hover:text-primary">
            Login
          </Link>
        </nav>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background">
          <nav className="flex flex-col space-y-2 p-4">
            <Link href="/" className="text-foreground hover:text-primary">
              Home
            </Link>
            <Link
              href="/courses"
              className="text-foreground hover:text-primary"
            >
              Courses
            </Link>
            <Link
              href="/community"
              className="text-foreground hover:text-primary"
            >
              Community
            </Link>
            <Link href="/login" className="text-foreground hover:text-primary">
              Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
