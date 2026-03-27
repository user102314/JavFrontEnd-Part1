import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Truck, Globe, Shield, Users } from "lucide-react";

const timeline = [
  { year: "1950s", title: "Foundation", desc: "JAF Déménagements was founded as a family business in Tunisia." },
  { year: "1970s", title: "National Expansion", desc: "Became the leading mover across Tunisia with a growing fleet." },
  { year: "1990s", title: "International Reach", desc: "Expanded services to North Africa and international destinations." },
  { year: "2000s", title: "Modern Fleet", desc: "Upgraded to state-of-the-art vehicles and secure storage facilities." },
  { year: "Today", title: "60+ Years of Trust", desc: "30,000+ moves completed, serving families and businesses worldwide." },
];

const About = () => (
  <Layout>
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-gradient">JAF Déménagements</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A family-owned company and the leader in moving and storage in Tunisia and North Africa since the 1950's. We offer a full range of services including national and international moves, air, sea and land freight, secure storage, car shipping, office moving, fine art handling, and pet relocation.
          </p>
        </AnimatedSection>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { icon: Users, title: "Family Values", desc: "Three generations of dedication and trust." },
            { icon: Globe, title: "Global Network", desc: "Partners in over 50 countries worldwide." },
            { icon: Truck, title: "Modern Fleet", desc: "Well-maintained vehicles for every move." },
            { icon: Shield, title: "Insured & Secure", desc: "Full insurance coverage on every shipment." },
          ].map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.1} className="bg-card rounded-xl p-6 shadow-card border border-border text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <v.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </AnimatedSection>
          ))}
        </div>

        {/* Timeline */}
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-2">Our History</h2>
          <p className="text-muted-foreground">A legacy of excellence spanning over six decades.</p>
        </AnimatedSection>

        <div className="max-w-2xl mx-auto relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />
          {timeline.map((t, i) => (
            <AnimatedSection key={t.year} delay={i * 0.1} className="relative pl-12 md:pl-0 mb-10 last:mb-0">
              <div className={`md:flex items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="hidden md:block md:w-1/2" />
                <div className="absolute left-2.5 md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />
                <div className="md:w-1/2 bg-card rounded-xl p-5 shadow-card border border-border">
                  <span className="text-xs font-bold text-primary">{t.year}</span>
                  <h3 className="font-semibold text-foreground">{t.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{t.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
