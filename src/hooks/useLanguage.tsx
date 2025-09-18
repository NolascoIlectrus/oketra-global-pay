import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.features': 'Features',
    'nav.security': 'Security', 
    'nav.pricing': 'Pricing',
    'nav.about': 'About',
    
    // Hero section
    'hero.title': 'Global Payments Made Simple',
    'hero.subtitle': 'The future of digital payments with stablecoin technology. Send, receive, and spend anywhere in the world with Oketra.',
    'hero.cta': 'Download App',
    'hero.learn-more': 'Learn More',
    
    // Features
    'features.title': 'Why Choose Oketra?',
    'features.subtitle': 'Experience the next generation of financial freedom',
    'features.instant.title': 'Instant Transfers',
    'features.instant.desc': 'Send money globally in seconds with stablecoin technology',
    'features.secure.title': 'Bank-Grade Security',
    'features.secure.desc': 'Your funds are protected by advanced encryption and compliance',
    'features.global.title': 'Global Access',
    'features.global.desc': 'Use your card anywhere Visa is accepted worldwide',
    'features.low-fees.title': 'Low Fees',
    'features.low-fees.desc': 'Transparent pricing with no hidden charges',
    
    // Security section
    'security.title': 'Built for Security',
    'security.subtitle': 'Your financial security is our top priority',
    'security.compliance': 'Regulatory Compliance',
    'security.encryption': '256-bit Encryption',
    'security.insurance': 'Deposit Insurance',
    
    // CTA section
    'cta.title': 'Ready to Get Started?',
    'cta.subtitle': 'Join thousands of users who trust Oketra for their global payments',
    'cta.download': 'Download Now',
  },
  pt: {
    // Navigation
    'nav.features': 'Funcionalidades',
    'nav.security': 'Segurança',
    'nav.pricing': 'Preços',
    'nav.about': 'Sobre',
    
    // Hero section
    'hero.title': 'Pagamentos Globais Simplificados',
    'hero.subtitle': 'O futuro dos pagamentos digitais com tecnologia stablecoin. Envie, receba e gaste em qualquer lugar do mundo com a Oketra.',
    'hero.cta': 'Baixar App',
    'hero.learn-more': 'Saiba Mais',
    
    // Features
    'features.title': 'Por que Escolher a Oketra?',
    'features.subtitle': 'Experimente a próxima geração de liberdade financeira',
    'features.instant.title': 'Transferências Instantâneas',
    'features.instant.desc': 'Envie dinheiro globalmente em segundos com tecnologia stablecoin',
    'features.secure.title': 'Segurança Bancária',
    'features.secure.desc': 'Seus fundos são protegidos por criptografia avançada e conformidade',
    'features.global.title': 'Acesso Global',
    'features.global.desc': 'Use seu cartão em qualquer lugar onde a Visa é aceita mundialmente',
    'features.low-fees.title': 'Taxas Baixas',
    'features.low-fees.desc': 'Preços transparentes sem taxas ocultas',
    
    // Security section
    'security.title': 'Construído para Segurança',
    'security.subtitle': 'Sua segurança financeira é nossa prioridade',
    'security.compliance': 'Conformidade Regulatória',
    'security.encryption': 'Criptografia 256-bit',
    'security.insurance': 'Seguro de Depósito',
    
    // CTA section
    'cta.title': 'Pronto para Começar?',
    'cta.subtitle': 'Junte-se a milhares de usuários que confiam na Oketra para seus pagamentos globais',
    'cta.download': 'Baixar Agora',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}