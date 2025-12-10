import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, BarChart3, Users, DollarSign } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/3 via-transparent to-transparent rounded-full" />
      </div>

      <div className="container-tight relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            {/* Headline */}
            <h1 
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 opacity-0 animate-fade-up text-balance"
              style={{ animationDelay: "0.1s" }}
            >
              Meta Ads Infrastruktur{" "}
              <span className="gradient-text">für Skalierer.</span>
            </h1>

            {/* Subheadline */}
            <p 
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 opacity-0 animate-fade-up text-balance"
              style={{ animationDelay: "0.2s" }}
            >
              Miete geprüfte Meta Agency Accounts und erstelle Kampagnen in unserem 
              automatisierten Dashboard — stabil, sicher und sofort einsatzbereit.
            </p>

            {/* CTA Button */}
            <div 
              className="flex flex-col items-center gap-4 mb-6 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Button variant="hero" size="xl" className="group">
                Jetzt registrieren
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-sm text-muted-foreground">
                Keine Verifizierung erforderlich · Sofort startklar
              </p>
            </div>
          </div>

          {/* Dashboard Mockup */}
          <div 
            className="relative opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative rounded-3xl overflow-hidden glass-card border border-border/50 p-4 md:p-6 shadow-elevated">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/30">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-destructive/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                  <div className="w-3 h-3 rounded-full bg-green-400/70" />
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/50 text-sm text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Live Dashboard
                </div>
              </div>

              {/* Dashboard Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-background/50 border border-border/30">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-4 h-4 text-primary" />
                    <span className="text-xs text-muted-foreground">Ad Spend</span>
                  </div>
                  <p className="font-display text-xl md:text-2xl font-bold text-foreground">€47,892</p>
                  <span className="text-xs text-green-500">+12.5%</span>
                </div>
                <div className="p-4 rounded-2xl bg-background/50 border border-border/30">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-accent" />
                    <span className="text-xs text-muted-foreground">ROAS</span>
                  </div>
                  <p className="font-display text-xl md:text-2xl font-bold text-foreground">4.2x</p>
                  <span className="text-xs text-green-500">+0.8x</span>
                </div>
                <div className="p-4 rounded-2xl bg-background/50 border border-border/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-xs text-muted-foreground">Leads</span>
                  </div>
                  <p className="font-display text-xl md:text-2xl font-bold text-foreground">2,847</p>
                  <span className="text-xs text-green-500">+23.1%</span>
                </div>
                <div className="p-4 rounded-2xl bg-background/50 border border-border/30">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="w-4 h-4 text-accent" />
                    <span className="text-xs text-muted-foreground">Conversions</span>
                  </div>
                  <p className="font-display text-xl md:text-2xl font-bold text-foreground">892</p>
                  <span className="text-xs text-green-500">+18.7%</span>
                </div>
              </div>

              {/* Chart Placeholder */}
              <div className="h-32 md:h-48 rounded-2xl bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border border-border/30 flex items-end justify-around px-4 pb-4">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
                  <div 
                    key={i}
                    className="w-4 md:w-6 rounded-t-lg bg-gradient-to-t from-primary to-accent opacity-60"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 md:-top-8 md:-right-8 p-3 md:p-4 rounded-2xl glass-card border border-border/50 shadow-card animate-float">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Kampagnen</p>
                  <p className="font-semibold text-foreground">24 aktiv</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 p-3 md:p-4 rounded-2xl glass-card border border-border/50 shadow-card animate-float" style={{ animationDelay: "-2s" }}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Account Status</p>
                  <p className="font-semibold text-green-500">Verifiziert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
