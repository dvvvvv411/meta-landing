import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Contact Section - Dark Theme */}
      <section className="relative flex-1 bg-slate-950 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 hero-grid-pattern opacity-40" />
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 orb-blue rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 orb-violet rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        
        <div className="relative z-10 section-padding py-24 md:py-32">
          <div className="container-tight">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-white/80">Kontakt</span>
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Wir sind für Sie da.
              </h1>
              
              <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
                Erreichen Sie uns über Ihre bevorzugte Kontaktmöglichkeit – wir antworten schnell und unkompliziert.
              </p>
            </div>
            
            {/* Contact Cards Grid */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              {/* Email Card */}
              <div className="group relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-10 hover:bg-white/10 transition-all duration-500">
                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
                
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-glow">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h2 className="font-display text-2xl font-bold text-white mb-3">
                  E-Mail
                </h2>
                <p className="text-white/60 mb-6 leading-relaxed">
                  Schreiben Sie uns eine E-Mail und wir melden uns innerhalb von 24 Stunden bei Ihnen.
                </p>
                
                {/* Contact Address */}
                <div className="font-mono text-lg text-white mb-8 break-all">
                  info@metanetwork.agency
                </div>
                
                {/* CTA Button */}
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  asChild
                >
                  <a href="mailto:info@metanetwork.agency">
                    E-Mail schreiben
                  </a>
                </Button>
              </div>
              
              {/* Telegram Card */}
              <div className="group relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-10 hover:bg-white/10 transition-all duration-500">
                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
                
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-6 shadow-glow">
                  <Send className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h2 className="font-display text-2xl font-bold text-white mb-3">
                  Telegram
                </h2>
                <p className="text-white/60 mb-6 leading-relaxed">
                  Chatten Sie direkt mit uns auf Telegram für schnelle Antworten und Support.
                </p>
                
                {/* Contact Address */}
                <div className="font-mono text-lg text-white mb-8">
                  @metanetwork.agency
                </div>
                
                {/* CTA Button */}
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  asChild
                >
                  <a href="https://t.me/metanetwork_agency" target="_blank" rel="noopener noreferrer">
                    Chat starten
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
