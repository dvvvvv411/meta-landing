import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import MetaNetworkLogo from "@/assets/MetaNetwork_Logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/50">
      <div className="container-tight">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img 
              src={MetaNetworkLogo} 
              alt="MetaNetwork.Agency" 
              className="h-7 md:h-8 w-auto"
            />
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#how-it-works" className="text-sm text-slate-400 hover:text-white transition-colors">
              So funktioniert's
            </a>
            <a href="#dashboard" className="text-sm text-slate-400 hover:text-white transition-colors">
              Dashboard
            </a>
            <a href="#vorteile" className="text-sm text-slate-400 hover:text-white transition-colors">
              Vorteile
            </a>
            <a href="#pricing" className="text-sm text-slate-400 hover:text-white transition-colors">
              Preise
            </a>
            <a href="#faq" className="text-sm text-slate-400 hover:text-white transition-colors">
              FAQ
            </a>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex text-slate-400 hover:text-white hover:bg-slate-800/50">
              Login
            </Button>
            <Button variant="hero" size="sm" className="group">
              Jetzt starten
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
