import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { Download, ArrowRight, Play } from "lucide-react";

export function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">
            <span className="text-gradient">
              {t('cta.title')}
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Button className="btn-hero text-lg px-8 py-4 glow-primary">
              <Download className="h-5 w-5" />
              {t('cta.download')}
              <Play className="h-4 w-4 ml-2" />
            </Button>
            
            <Button variant="ghost" className="btn-ghost text-lg group">
              Learn More
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-8 border-t border-border">
            <div className="animate-slide-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">50K+</div>
              <div className="text-muted-foreground">Active Users</div>
            </div>
            <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">$10M+</div>
              <div className="text-muted-foreground">Transactions</div>
            </div>
            <div className="animate-slide-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">150+</div>
              <div className="text-muted-foreground">Countries</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-primary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
}