import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Target, 
  Telescope, 
  Server, 
  Shield, 
  Code, 
  Rocket,
  ArrowRight,
  Check,
  Database,
  Globe,
  Zap,
  Clock
} from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-tight text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
            Über MetaNetwork
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Die Infrastruktur für modernes{" "}
            <span className="gradient-text">Performance Marketing</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Wir sind kein klassischer Marketingdienstleister. Wir sind ein 
            Technologie-Infrastruktur-Anbieter, der stabile, skalierbare 
            Werbekonten für professionelle Advertiser bereitstellt.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-primary">Unsere Mission</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Demokratisierung stabiler Werbeinfrastruktur
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Zu viele Performance-Marketer scheitern nicht an ihrer Strategie, 
                sondern an instabilen Werbekonten. Wir lösen dieses Problem mit 
                einer robusten, transparenten Infrastruktur.
              </p>
              <ul className="space-y-3">
                {["Zuverlässigkeit ohne Kompromisse", "Transparente Prozesse", "Skalierbarkeit nach Bedarf"].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="glass-card p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-xl bg-background/50">
                    <div className="text-3xl font-bold text-primary mb-1">500+</div>
                    <div className="text-sm text-muted-foreground">Aktive Accounts</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-background/50">
                    <div className="text-3xl font-bold text-primary mb-1">€2M+</div>
                    <div className="text-sm text-muted-foreground">Monatliches Adspend</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-background/50">
                    <div className="text-3xl font-bold text-primary mb-1">99.9%</div>
                    <div className="text-sm text-muted-foreground">Uptime</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-background/50">
                    <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                    <div className="text-sm text-muted-foreground">Monitoring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                <div className="relative space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-background/80">
                    <Globe className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">Globale Reichweite</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-background/80">
                    <Zap className="w-5 h-5 text-accent" />
                    <span className="text-sm font-medium">Instant Activation</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-background/80">
                    <Database className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">Vollständige Automatisierung</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Telescope className="w-5 h-5 text-accent" />
                </div>
                <span className="text-sm font-medium text-accent">Unsere Vision</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Der Standard für Werbeinfrastruktur im digitalen Zeitalter
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Wir bauen die Infrastruktur, die Performance-Marketing verdient: 
                zuverlässig, skalierbar und vollständig automatisiert. Keine 
                manuellen Prozesse, keine Unsicherheiten – nur stabile 
                Werbekonten, die funktionieren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="container-tight">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Server className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-primary">Infrastruktur</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Enterprise-Grade Architektur
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Unsere Infrastruktur ist für maximale Zuverlässigkeit und 
              Skalierbarkeit konzipiert.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Database,
                title: "Redundante Systeme",
                description: "Mehrfach abgesicherte Infrastruktur ohne Single Point of Failure."
              },
              {
                icon: Globe,
                title: "Multi-Region Deployment",
                description: "Verteilte Architektur für optimale Performance und Ausfallsicherheit."
              },
              {
                icon: Zap,
                title: "Automatisierte Skalierung",
                description: "Dynamische Ressourcen-Allokation basierend auf Ihrem Bedarf."
              },
              {
                icon: Clock,
                title: "99.9% Uptime SLA",
                description: "Garantierte Verfügbarkeit mit transparentem Status-Monitoring."
              }
            ].map((item, index) => (
              <div key={index} className="glass-card p-6 rounded-xl hover-lift">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-primary">Sicherheit</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Bank-Level Security Standards
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Ihre Daten und Werbekonten sind bei uns sicher. Wir 
                implementieren Sicherheitsstandards, die dem Finanzsektor 
                entsprechen.
              </p>
              <div className="space-y-4">
                {[
                  "End-to-End Verschlüsselung aller Daten",
                  "Regelmäßige Security Audits",
                  "DSGVO-konforme Datenverarbeitung",
                  "Isolierte Account-Umgebungen"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-green-500" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="glass-card p-8 rounded-2xl border-2 border-primary/20">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                  <div>
                    <div className="font-semibold">Security Status</div>
                    <div className="text-sm text-green-500">Alle Systeme geschützt</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-background/50">
                    <span className="text-sm">Verschlüsselung</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-500">AES-256</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-background/50">
                    <span className="text-sm">Letzter Audit</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">Q4 2024</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-background/50">
                    <span className="text-sm">Compliance</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-500">DSGVO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Technology Section */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="glass-card p-6 rounded-2xl overflow-hidden">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-2 text-xs text-muted-foreground font-mono">api.metanetwork.agency</span>
                </div>
                <pre className="text-sm font-mono overflow-x-auto">
                  <code className="text-muted-foreground">
{`// Account Status abrufen
const response = await fetch(
  'https://api.metanetwork.agency/v1/accounts',
  {
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY'
    }
  }
);

const accounts = await response.json();
// { status: "active", spend_limit: 50000 }`}
                  </code>
                </pre>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Code className="w-5 h-5 text-accent" />
                </div>
                <span className="text-sm font-medium text-accent">API-Technologie</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Developer-First Approach
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Unsere RESTful API ermöglicht vollständige Integration in 
                Ihre bestehenden Systeme. Automatisieren Sie Account-Management, 
                Monitoring und Reporting.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "RESTful API", desc: "Standardisierte Endpoints" },
                  { label: "Webhooks", desc: "Real-time Events" },
                  { label: "SDK Support", desc: "Node.js, Python" },
                  { label: "Workflows", desc: "Automatisierung" }
                ].map((item, index) => (
                  <div key={index} className="p-3 rounded-lg bg-muted/50">
                    <div className="font-medium text-sm">{item.label}</div>
                    <div className="text-xs text-muted-foreground">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container-tight">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Rocket className="w-5 h-5 text-accent" />
              </div>
              <span className="text-sm font-medium text-accent">Roadmap</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Wohin wir gehen
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Unsere Roadmap für die Zukunft der Werbeinfrastruktur.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
            <div className="space-y-8">
              {[
                {
                  quarter: "Q1 2025",
                  title: "Multi-Platform Support",
                  description: "Erweiterung auf TikTok Ads und Google Ads Infrastruktur.",
                  status: "In Entwicklung"
                },
                {
                  quarter: "Q2 2025",
                  title: "Advanced Analytics Dashboard",
                  description: "Echtzeit-Reporting und Performance-Insights für alle Accounts.",
                  status: "Geplant"
                },
                {
                  quarter: "2025+",
                  title: "Vollständige API-Automatisierung",
                  description: "Zero-Touch Account Management mit KI-gestützter Optimierung.",
                  status: "Vision"
                }
              ].map((item, index) => (
                <div key={index} className="relative grid md:grid-cols-2 gap-6 items-center">
                  <div className={`glass-card p-6 rounded-xl ${index % 2 === 0 ? 'md:text-right' : 'md:order-2'}`}>
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-3">
                      {item.quarter}
                    </span>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                  <div className={`hidden md:flex ${index % 2 === 0 ? 'justify-start' : 'justify-end md:order-1'}`}>
                    <span className="px-4 py-2 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/20">
                      {item.status}
                    </span>
                  </div>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container-tight">
          <div className="glass-card p-8 md:p-12 rounded-2xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Bereit für professionelle Werbeinfrastruktur?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Automatisierter Onboarding-Prozess in wenigen Minuten. 
                Keine Wartezeiten, keine Hürden.
              </p>
              <Button size="lg" className="group" asChild>
                <Link to="/registrieren">
                  Registrieren & starten
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
