import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 pt-20">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 hero-grid-pattern opacity-40" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] orb-blue rounded-full blur-3xl animate-float-slow opacity-60" />
        <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] orb-violet rounded-full blur-3xl animate-float-slow opacity-50" style={{ animationDelay: "-4s" }} />
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] orb-blue rounded-full blur-3xl animate-float opacity-30" style={{ animationDelay: "-2s" }} />
      </div>

      {/* Main Content */}
      <div className="container-tight relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 backdrop-blur-md border border-slate-700/50 mb-8 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-slate-300">Infrastruktur für Meta Ads</span>
            </div>

            {/* Headline */}
            <h1 
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-6 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Meta Ads Infrastruktur{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-glow to-accent">
                für Skalierer.
              </span>
            </h1>

            {/* Subline */}
            <p 
              className="text-lg md:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 mb-8 opacity-0 animate-fade-up text-balance"
              style={{ animationDelay: "0.3s" }}
            >
              Miete geprüfte Meta Agency Accounts und erstelle Kampagnen direkt in unserem Dashboard — automatisiert, skalierbar und sofort einsatzbereit.
            </p>

            {/* Bullet Points */}
            <div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start mb-10 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              {[
                "Skalierbare Limits",
                "Stabil & risikoarm",
                "Automatisiertes Dashboard"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center neon-glow-blue-subtle">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-up"
              style={{ animationDelay: "0.5s" }}
            >
              <Button 
                size="xl" 
                className="group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white border-0 animate-glow-pulse"
              >
                Jetzt registrieren
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="border-slate-700 bg-slate-800/30 text-slate-300 hover:bg-slate-800/50 hover:text-white hover:border-slate-600"
              >
                Mehr erfahren
              </Button>
            </div>
          </div>

          {/* Right Side: Animated Tech Visual */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
            {/* Network Lines SVG */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(217 91% 60%)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="hsl(258 90% 66%)" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              {/* Connection Lines */}
              <path d="M100,100 L200,150 L300,100" stroke="url(#lineGradient)" strokeWidth="1" fill="none" className="animate-pulse-slow" />
              <path d="M150,200 L200,150 L250,200" stroke="url(#lineGradient)" strokeWidth="1" fill="none" className="animate-pulse-slow" style={{ animationDelay: "0.5s" }} />
              <path d="M100,300 L200,250 L300,300" stroke="url(#lineGradient)" strokeWidth="1" fill="none" className="animate-pulse-slow" style={{ animationDelay: "1s" }} />
              <path d="M200,150 L200,250" stroke="url(#lineGradient)" strokeWidth="1" fill="none" className="animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
            </svg>

            {/* Network Nodes */}
            {[
              { x: "25%", y: "25%", delay: "0s" },
              { x: "75%", y: "25%", delay: "0.3s" },
              { x: "50%", y: "37%", delay: "0.6s" },
              { x: "37%", y: "50%", delay: "0.9s" },
              { x: "63%", y: "50%", delay: "1.2s" },
              { x: "25%", y: "75%", delay: "1.5s" },
              { x: "75%", y: "75%", delay: "1.8s" },
              { x: "50%", y: "63%", delay: "2.1s" },
            ].map((node, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 rounded-full bg-primary animate-pulse-slow neon-glow-blue-subtle"
                style={{ 
                  left: node.x, 
                  top: node.y, 
                  transform: "translate(-50%, -50%)",
                  animationDelay: node.delay 
                }}
              />
            ))}

            {/* Central Holographic Card */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] md:w-[320px] opacity-0 animate-scale-in"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="relative p-6 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 gradient-border-animated shadow-2xl">
                {/* Card Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-slate-400">Live Dashboard</span>
                  </div>
                  <span className="text-xs text-slate-500">MetaNetwork</span>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/30">
                    <p className="text-xs text-slate-500 mb-1">Ad Spend</p>
                    <p className="font-display font-bold text-white">€47,892</p>
                    <span className="text-xs text-green-500">+12.5%</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/30">
                    <p className="text-xs text-slate-500 mb-1">ROAS</p>
                    <p className="font-display font-bold text-white">4.2x</p>
                    <span className="text-xs text-green-500">+0.8x</span>
                  </div>
                </div>

                {/* Mini Chart */}
                <div className="h-16 rounded-xl bg-slate-800/30 border border-slate-700/20 flex items-end justify-around px-2 pb-2">
                  {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                    <div 
                      key={i}
                      className="w-3 rounded-t bg-gradient-to-t from-primary to-accent opacity-70"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Status Cards */}
            <div 
              className="absolute top-[15%] right-[10%] md:right-[5%] p-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700/50 animate-float opacity-0 animate-fade-up"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-green-500" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Status</p>
                  <p className="text-sm font-medium text-green-500">Verifiziert</p>
                </div>
              </div>
            </div>

            <div 
              className="absolute bottom-[20%] left-[5%] md:left-[0%] p-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700/50 animate-float opacity-0 animate-fade-up"
              style={{ animationDelay: "1s", animationDuration: "7s" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Zap className="w-3 h-3 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Kampagnen</p>
                  <p className="text-sm font-medium text-white">24 aktiv</p>
                </div>
              </div>
            </div>

            <div 
              className="absolute bottom-[10%] right-[15%] p-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700/50 animate-float opacity-0 animate-fade-up hidden md:block"
              style={{ animationDelay: "1.2s", animationDuration: "8s" }}
            >
              <p className="text-xs text-slate-400">Uptime</p>
              <p className="text-lg font-display font-bold text-white">99.9%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade to Light */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-slate-900/80 to-background pointer-events-none" />
    </section>
  );
};

export default Hero;
