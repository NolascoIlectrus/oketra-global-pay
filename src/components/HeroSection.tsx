import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { Download } from "lucide-react";
import cardImage from "@/assets/oketra-card.jpg";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Main heading - Large like Cursor.com */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight font-garet">
              <span className="text-foreground">
                {t('hero.title')}
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed font-garet">
              {t('hero.subtitle')}
            </p>
            
            {/* CTA Button - Clean like Cursor.com */}
            <div className="flex justify-center lg:justify-start pt-4">
              <Button className="btn-hero font-garet">
                <Download className="h-4 w-4" />
                {t('hero.cta')}
              </Button>
            </div>
          </div>

          {/* Right side - Card image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={cardImage}
                alt="Oketra Prepaid Card with VISA" 
                className="w-full max-w-lg rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
        
        {/* Trusted by section */}
        <div className="pt-16 text-center">
          <p className="text-sm text-muted-foreground mb-8 font-garet">
            Trusted by financial institutions worldwide
          </p>
          <div className="flex justify-center items-center gap-8 opacity-40">
            <div className="h-6 w-16 bg-muted rounded"></div>
            <div className="h-6 w-20 bg-muted rounded"></div>
            <div className="h-6 w-14 bg-muted rounded"></div>
            <div className="h-6 w-22 bg-muted rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
}