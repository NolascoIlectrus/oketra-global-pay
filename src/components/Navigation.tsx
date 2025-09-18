import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useLanguage } from "@/hooks/useLanguage";
import { Globe } from "lucide-react";

export function Navigation() {
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
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'nav-blur' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Language & Theme */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
              className="h-8 px-2 text-sm"
            >
              <Globe className="h-3 w-3 mr-1" />
              {language.toUpperCase()}
            </Button>
            <ThemeToggle />
          </div>

          {/* Center - Logo and Navigation */}
          <div className="flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              <h1 className="text-xl font-bold font-garet">
                Oketra
              </h1>
              
              <div className="hidden md:flex items-center space-x-6">
                {navItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors font-garet"
                  >
                    {t(item.key)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - CTA Button */}
          <Button className="btn-hero">
            {t('hero.cta')}
          </Button>
        </div>
      </div>
    </nav>
  );
}