import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useLanguage } from "@/hooks/useLanguage";
import { Menu, X, Globe } from "lucide-react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'nav.features', href: '#features' },
    { key: 'nav.security', href: '#security' },
    { key: 'nav.pricing', href: '#pricing' },
    { key: 'nav.about', href: '#about' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'nav-blur' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gradient">
              Oketra
            </h1>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
                >
                  {t(item.key)}
                </a>
              ))}
            </div>
          </div>

          {/* Right side controls */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
              className="h-9 px-3"
            >
              <Globe className="h-4 w-4 mr-2" />
              {language.toUpperCase()}
            </Button>
            
            <ThemeToggle />
            
            <Button className="btn-hero">
              {t('hero.cta')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="h-9 w-9 p-0"
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md border-t border-border">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </a>
              ))}
              
              <div className="flex items-center space-x-2 px-3 py-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
                  className="h-9 px-3"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  {language.toUpperCase()}
                </Button>
              </div>
              
              <div className="px-3 py-2">
                <Button className="btn-hero w-full">
                  {t('hero.cta')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}