import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { Download } from "lucide-react";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          {/* Main heading - Large like Cursor.com */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight">
            <span className="text-foreground">
              {t('hero.title')}
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
          
          {/* CTA Button - Clean like Cursor.com */}
          <div className="flex justify-center pt-4">
            <Button className="btn-hero">
              <Download className="h-4 w-4" />
              {t('hero.cta')}
            </Button>
          </div>
          
          {/* Trusted by section */}
          <div className="pt-16">
            <p className="text-sm text-muted-foreground mb-8">
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
      </div>
    </section>
  );
}