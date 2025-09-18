import { useLanguage } from "@/hooks/useLanguage";
import { Card } from "@/components/ui/card";
import { Zap, Shield, Globe, DollarSign, Smartphone, CreditCard } from "lucide-react";

export function FeaturesSection() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: t('features.instant.title'),
      description: t('features.instant.desc'),
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: t('features.secure.title'),
      description: t('features.secure.desc'),
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: t('features.global.title'),
      description: t('features.global.desc'),
    },
    {
      icon: <DollarSign className="h-8 w-8 text-primary" />,
      title: t('features.low-fees.title'),
      description: t('features.low-fees.desc'),
    },
  ];

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">
            <span className="text-gradient">
              {t('features.title')}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="feature-card animate-scale-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Interactive Demo Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Stablecoin Card */}
          <Card className="card-interactive p-8 animate-slide-in">
            <div className="flex items-start gap-6">
              <div className="bg-primary/10 p-4 rounded-2xl">
                <CreditCard className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Stablecoin Technology</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Experience the stability of fiat with the speed of crypto. Our USDC-backed cards ensure your purchasing power remains consistent.
                </p>
                <div className="flex items-center gap-4">
                  <div className="bg-green-500/10 px-4 py-2 rounded-full">
                    <span className="text-green-600 dark:text-green-400 font-medium">1 USDC = $1.00</span>
                  </div>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-muted-foreground">Live Rate</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Mobile App Card */}
          <Card className="card-interactive p-8 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-start gap-6">
              <div className="bg-primary/10 p-4 rounded-2xl">
                <Smartphone className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Mobile-First Experience</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Manage your finances on the go with our intuitive mobile app. Real-time notifications, spending analytics, and instant transfers.
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-primary rounded-full border-2 border-background"></div>
                    <div className="w-8 h-8 bg-secondary rounded-full border-2 border-background"></div>
                    <div className="w-8 h-8 bg-accent rounded-full border-2 border-background"></div>
                  </div>
                  <span className="text-sm text-muted-foreground ml-2">50K+ Active Users</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}