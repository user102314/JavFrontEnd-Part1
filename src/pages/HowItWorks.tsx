import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { CalendarCheck, FileText, Truck, Home } from "lucide-react";

const steps = [
  { icon: CalendarCheck, title: "Schedule a Survey", desc: "We set up an appointment (in person or virtual) to assess your moving needs and provide an accurate estimate." },
  { icon: FileText, title: "Confirm Your Quote", desc: "We prepare a detailed, transparent quote. Once you confirm, we plan every detail of your move." },
  { icon: Truck, title: "We Execute the Move", desc: "Our professional team handles packing, loading, transport, unloading, and unpacking — with care at every step." },
  { icon: Home, title: "Welcome Home", desc: "You receive your belongings safely at your new destination, set up and ready to enjoy." },
];

const HowItWorks = () => (
  <Layout>
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It <span className="text-gradient">Works</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Moving made simple — four clear steps from survey to settled.
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {steps.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.12} className="relative bg-card rounded-xl p-8 shadow-card border border-border hover-lift">
              <div className="absolute -top-4 -left-2 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                {i + 1}
              </div>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mt-2">
                <s.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center">
          <Link to="/contact" className="inline-flex px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity">
            Get Started — Request a Quote
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default HowItWorks;
