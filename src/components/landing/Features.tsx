import { Shield, Zap, TrendingUp, Users, Clock, Headphones } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Verifizierte Accounts",
    description: "Alle Accounts sind vollständig verifiziert und durchlaufen strenge Qualitätskontrollen.",
  },
  {
    icon: Zap,
    title: "Sofortige Aktivierung",
    description: "Kein Warten. Ihr Account ist innerhalb von Minuten nach dem Onboarding einsatzbereit.",
  },
  {
    icon: TrendingUp,
    title: "Unbegrenzte Skalierung",
    description: "Skalieren Sie Ihre Kampagnen ohne künstliche Limits oder Spending Caps.",
  },
  {
    icon: Users,
    title: "Multi-Account Management",
    description: "Verwalten Sie mehrere Accounts zentral über ein einziges Dashboard.",
  },
  {
    icon: Clock,
    title: "24/7 Monitoring",
    description: "Proaktive Überwachung Ihrer Accounts für maximale Uptime und Performance.",
  },
  {
    icon: Headphones,
    title: "Priority Support",
    description: "Direkter Zugang zu unserem Expertenteam bei allen Fragen und Anliegen.",
  },
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-background relative">
      <div className="container-tight">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-4">Features</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Alles was Sie für erfolgreiche Kampagnen brauchen
          </h2>
          <p className="text-lg text-muted-foreground">
            Eine komplette Infrastruktur für professionelles Meta Advertising — 
            ohne Kompromisse bei Qualität oder Zuverlässigkeit.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-3xl glass-card hover-lift opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
