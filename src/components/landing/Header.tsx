import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/50">
      <div className="container-tight">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white font-display font-bold text-sm">M</span>
            </div>
            <span className="font-display font-semibold text-white text-lg tracking-tight">
              MetaNetwork
              <span className="text-slate-400">.Agency</span>
            </span>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-slate-400 hover:text-white transition-colors">
              Features
            </a>
            <a href="/wie-funktioniert-es" className="text-sm text-slate-400 hover:text-white transition-colors">
              So funktioniert's
            </a>
            <a href="#pricing" className="text-sm text-slate-400 hover:text-white transition-colors">
              Pricing
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
