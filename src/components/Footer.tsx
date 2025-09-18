import { useLanguage } from "@/hooks/useLanguage";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-secondary/30 border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-gradient mb-4">Oketra</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              The future of digital payments with stablecoin technology. 
              Send, receive, and spend anywhere in the world.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <div className="space-y-2">
              <a href="#features" className="block text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#security" className="block text-muted-foreground hover:text-foreground transition-colors">Security</a>
              <a href="#pricing" className="block text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Terms</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Oketra. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">System Status: Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}