import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { Download, Play, ArrowRight } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center animate-fade-in">
          {/* Main heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-gradient">
              {t('hero.title')}
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            {t('hero.subtitle')}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-scale-in">
            <Button className="btn-hero text-lg px-8 py-4 glow-primary">
              <Download className="h-5 w-5" />
              {t('hero.cta')}
              <Play className="h-4 w-4 ml-2" />
            </Button>
            
            <Button variant="ghost" className="btn-ghost text-lg group">
              {t('hero.learn-more')}
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Hero Illustration */}
          <div className="relative animate-float">
            <div className="relative mx-auto max-w-2xl">
              <img 
                src={heroIllustration} 
                alt="Oketra App Interface"
                className="w-full h-auto rounded-3xl shadow-strong"
              />
              
              {/* Floating cards */}
              <div className="absolute -top-8 -left-8 animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="bg-card border border-border rounded-2xl p-4 shadow-medium backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Instant Transfer</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -right-8 animate-float" style={{ animationDelay: '1s' }}>
                <div className="bg-card border border-border rounded-2xl p-4 shadow-medium backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full animate-glow"></div>
                    <span className="text-sm font-medium">Global Access</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Trusted by section */}
          <div className="mt-16 animate-slide-in">
            <p className="text-sm text-muted-foreground mb-6">
              Trusted by financial institutions worldwide
            </p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="h-8 w-20 bg-muted rounded animate-pulse"></div>
              <div className="h-8 w-24 bg-muted rounded animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="h-8 w-16 bg-muted rounded animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              <div className="h-8 w-28 bg-muted rounded animate-pulse" style={{ animationDelay: '0.6s' }}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
}