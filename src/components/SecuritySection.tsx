import { useLanguage } from "@/hooks/useLanguage";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, FileCheck, Fingerprint, Eye, Smartphone } from "lucide-react";

export function SecuritySection() {
  const { t } = useLanguage();

  const securityFeatures = [
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: t('security.compliance'),
      description: "SOC 2 Type II certified with full regulatory compliance",
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: t('security.encryption'),
      description: "Military-grade encryption for all transactions and data",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: t('security.insurance'),
      description: "FDIC insured up to $250,000 per account",
    },
  ];

  return (
    <section id="security" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">
            <span className="text-gradient">
              {t('security.title')}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('security.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Security Features */}
          <div className="space-y-6 animate-slide-in">
            {securityFeatures.map((feature, index) => (
              <Card 
                key={feature.title}
                className="p-6 border-l-4 border-l-primary bg-gradient-to-r from-card to-transparent hover:shadow-medium transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
            
            {/* Security Badges */}
            <div className="flex flex-wrap gap-3 pt-6">
              <Badge variant="secondary" className="px-4 py-2">
                <Shield className="h-4 w-4 mr-2" />
                PCI DSS Level 1
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Lock className="h-4 w-4 mr-2" />
                ISO 27001
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Fingerprint className="h-4 w-4 mr-2" />
                Biometric Auth
              </Badge>
            </div>
          </div>

          {/* Security Visualization */}
          <div className="relative animate-scale-in">
            <Card className="p-8 bg-gradient-to-br from-card to-primary/5 border border-primary/20 overflow-hidden">
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-glow">
                    <Shield className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Multi-Layer Protection</h3>
                  <p className="text-muted-foreground">Your security is our priority</p>
                </div>
                
                {/* Security Layers */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-background/50 rounded-xl backdrop-blur-sm">
                    <Eye className="h-5 w-5 text-primary" />
                    <span className="font-medium">Real-time Fraud Detection</span>
                    <div className="ml-auto w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-background/50 rounded-xl backdrop-blur-sm">
                    <Smartphone className="h-5 w-5 text-primary" />
                    <span className="font-medium">Device Authentication</span>
                    <div className="ml-auto w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-background/50 rounded-xl backdrop-blur-sm">
                    <Lock className="h-5 w-5 text-primary" />
                    <span className="font-medium">End-to-End Encryption</span>
                    <div className="ml-auto w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
              
              {/* Background decoration */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-4 right-4 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
                <div className="absolute bottom-4 left-4 w-24 h-24 bg-primary rounded-full blur-2xl"></div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}