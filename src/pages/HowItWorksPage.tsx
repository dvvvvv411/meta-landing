import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  AlertTriangle, 
  Shield, 
  UserPlus, 
  CreditCard, 
  Rocket,
  Activity,
  Bell,
  BarChart3,
  Eye,
  Check,
  X
} from "lucide-react";

const painPoints = [
  "Account-Sperrungen ohne Vorwarnung",
  "Wochen-lange Verifizierungsprozesse",
  "Niedrige Spending Limits",
  "Kein Trust bei neuen Accounts",
];

const solutionPoints = [
  "Verifizierte Agency-Accounts mit Trust Level",
  "Stabile Infrastruktur ohne Sperrrisiko",
  "Hohe Spending Limits von Tag 1",
  "Sofort einsatzbereit",
];

const workflowSteps = [
  {
    step: "01",
    title: "Registrieren",
    description: "Automatischer Onboarding-Prozess in wenigen Minuten",
    icon: UserPlus,
  },
  {
    step: "02",
    title: "Mieten",
    description: "Account wählen & Guthaben hinterlegen",
    icon: CreditCard,
  },
  {
    step: "03",
    title: "Kampagne erstellen",
    description: "Sofort live gehen mit Meta Ads",
    icon: Rocket,
  },
];

const monitoringFeatures = [
  {
    title: "24/7 Account-Überwachung",
    description: "Kontinuierliche Überwachung aller Account-Aktivitäten",
    icon: Eye,
  },
  {
    title: "Automatische Anomalie-Erkennung",
    description: "KI-basierte Früherkennung von Problemen",
    icon: Activity,
  },
  {
    title: "Performance-Dashboard",
    description: "Alle wichtigen Metriken auf einen Blick",
    icon: BarChart3,
  },
  {
    title: "Echtzeit-Alerts",
    description: "Sofortige Benachrichtigungen bei kritischen Events",
    icon: Bell,
  },
];

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-tight">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Wie funktioniert MetaNetwork?
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Von unzuverlässigen Accounts zu stabiler Werbeinfrastruktur – in nur wenigen Schritten.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Das Problem */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-destructive/10 border border-destructive/20 mb-6">
                <AlertTriangle className="w-4 h-4 text-destructive" />
                <span className="text-sm font-medium text-destructive">Das Problem</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Unzuverlässige Facebook Ads Accounts
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Performance Marketer kämpfen täglich mit Account-Problemen. Sperrungen, Limits und lange Verifizierungen kosten Zeit und Umsatz.
              </p>
              <ul className="space-y-4">
                {painPoints.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                      <X className="w-3.5 h-3.5 text-destructive" />
                    </div>
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-destructive/20 to-orange-500/20 rounded-3xl blur-3xl" />
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Account gesperrt</div>
                    <div className="text-sm text-muted-foreground">Vor 2 Minuten</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-3 bg-destructive/20 rounded-full w-full" />
                  <div className="h-3 bg-destructive/15 rounded-full w-4/5" />
                  <div className="h-3 bg-destructive/10 rounded-full w-3/5" />
                </div>
                <div className="mt-6 p-4 bg-destructive/5 border border-destructive/20 rounded-xl">
                  <p className="text-sm text-muted-foreground">
                    "Ihr Werbekonto wurde aufgrund von Richtlinienverstößen deaktiviert..."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Die Lösung */}
      <section className="py-16 md:py-24">
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Agency Account aktiv</div>
                    <div className="text-sm text-muted-foreground">Trust Level: Hoch</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl text-center">
                    <div className="text-2xl font-bold text-foreground">∞</div>
                    <div className="text-xs text-muted-foreground">Spending Limit</div>
                  </div>
                  <div className="p-4 bg-accent/5 border border-accent/20 rounded-xl text-center">
                    <div className="text-2xl font-bold text-foreground">100%</div>
                    <div className="text-xs text-muted-foreground">Uptime</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Check className="w-4 h-4" />
                  <span>Alle Systeme operativ</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Die Lösung</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                MetaNetwork Agency Accounts
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Profitiere von verifizierten Agency-Accounts mit höchstem Trust Level. Stabil, sicher und sofort einsatzbereit.
              </p>
              <ul className="space-y-4">
                {solutionPoints.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Der Workflow */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container-tight">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Der Workflow
            </h2>
            <p className="text-lg text-muted-foreground">
              In drei einfachen Schritten zu deinem Meta Ads Account.
            </p>
          </div>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -translate-y-1/2" />
            
            <div className="grid md:grid-cols-3 gap-8">
              {workflowSteps.map((item, index) => (
                <div key={item.step} className="relative">
                  <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 text-center relative z-10">
                    {/* Step number */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Control & Monitoring */}
      <section className="py-16 md:py-24">
        <div className="container-tight">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Activity className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Automatisiert</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Control- und Monitoring-Systeme
            </h2>
            <p className="text-lg text-muted-foreground">
              Vollautomatische Überwachung und Schutz deiner Accounts – rund um die Uhr.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {monitoringFeatures.map((feature) => (
              <div 
                key={feature.title}
                className="group bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24">
        <div className="container-tight">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 border border-primary/20 p-8 md:p-16">
            {/* Glow effects */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
            
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Bereit für stabile Meta Ads?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Starte jetzt mit MetaNetwork und profitiere von verifizierten Agency-Accounts ohne Risiko.
              </p>
              <Button variant="hero" size="lg" className="group">
                Jetzt starten
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorksPage;
