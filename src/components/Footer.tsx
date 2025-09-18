import { useLanguage } from "@/hooks/useLanguage";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand section */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold font-garet mb-4">Oketra</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-garet">
                The future of digital payments with stablecoin technology.
              </p>
            </div>
            
            {/* Product links */}
            <div>
              <h4 className="font-semibold mb-4 font-garet">Product</h4>
              <div className="space-y-3">
                <a href="#features" className="block text-sm text-muted-foreground hover:text-foreground transition-colors font-garet">Features</a>
                <a href="#security" className="block text-sm text-muted-foreground hover:text-foreground transition-colors font-garet">Security</a>
                <a href="#pricing" className="block text-sm text-muted-foreground hover:text-foreground transition-colors font-garet">Pricing</a>
                <a href="#api" className="block text-sm text-muted-foreground hover:text-foreground transition-colors font-garet">API</a>
              </div>
            </div>
            
            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4 font-garet">Resources</h4>
              <div className="space-y-3">
                <a href="#docs" className="block text-sm text-muted-foreground hover:text-foreground transition-colors font-garet">Documentation</a>
                <a href="#support" className="block text-sm text-muted-foreground hover:text-foreground transition-colors font-garet">Support</a>
                <a href="#community" className="block text-sm text-muted-foreground hover:text-foreground transition-colors font-garet">Community</a>
                <a href="#blog" className="block text-sm text-muted-foreground hover:text-foreground transition-colors font-garet">Blog</a>
              </div>
            </div>
            
            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4 font-garet">Company</h4>
              <div className="space-y-3">
                <a href="#about" className="block text-sm text-muted-foreground hover:text-foreground transition-colors font-garet">About</a>
                <a href="#careers" className="block text-sm text-muted-foreground hover:text-foreground transition-colors font-garet">Careers</a>
                <a href="#privacy" className="block text-sm text-muted-foreground hover:text-foreground transition-colors font-garet">Privacy</a>
                <a href="#terms" className="block text-sm text-muted-foreground hover:text-foreground transition-colors font-garet">Terms</a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground font-garet">
              © 2024 Oketra. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground font-garet">All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}