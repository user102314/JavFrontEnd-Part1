import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { Car, Building2, Warehouse, Palette, PawPrint, Truck, Plane, Ship } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Car Shipping",
    desc: "Transport your vehicle safely by land or sea with full tracking and protection. We handle all documentation and customs clearance for international car shipping.",
    features: ["Door-to-door delivery", "Containerized or RoRo shipping", "Full insurance coverage"],
  },
  {
    icon: Building2,
    title: "Office Moving",
    desc: "Seamless corporate relocations — we move offices, equipment, IT infrastructure, and sensitive documents with minimal downtime for your business.",
    features: ["Weekend & after-hours moves", "IT equipment handling", "Furniture disassembly & reassembly"],
  },
  {
    icon: Warehouse,
    title: "Storage Solutions",
    desc: "Secure, modern storage facilities for individuals and businesses. Flexible short-term and long-term options with 24/7 surveillance.",
    features: ["Climate-controlled units", "Inventory management", "Flexible terms"],
  },
  {
    icon: Palette,
    title: "Fine Art",
    desc: "Expert handling and transport of artworks, antiques, and high-value items. Custom crating, climate-controlled transport, and white-glove service.",
    features: ["Custom crating & packing", "Climate-controlled transport", "Exhibition logistics"],
  },
  {
    icon: PawPrint,
    title: "Pet Relocation",
    desc: "Safe, caring transport for your pets with proper carriers, veterinary coordination, and all administrative paperwork handled.",
    features: ["IATA-compliant carriers", "Veterinary coordination", "Door-to-door service"],
  },
];

const transportMethods = [
  {
    icon: Truck,
    title: "Land Transport",
    description: "Reliable road freight solutions for domestic and cross-border shipments. Our modern fleet ensures safe and timely delivery of your goods.",
    features: ["GPS tracking", "Temperature-controlled options", "Express and standard delivery", "Door-to-door service"],
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Plane,
    title: "Air Freight",
    description: "Fast and secure air cargo solutions for time-sensitive shipments. We partner with major airlines to ensure rapid global delivery.",
    features: ["24-48 hour delivery", "Real-time tracking", "Customs clearance assistance", "Priority handling"],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Ship,
    title: "Ocean Freight",
    description: "Cost-effective sea freight solutions for large shipments and international moves. Full container load (FCL) and less than container load (LCL) options.",
    features: ["FCL & LCL shipping", "Port-to-port or door-to-door", "Container tracking", "Competitive rates"],
    image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "from-cyan-500 to-cyan-600"
  }
];

const Services = () => (
  <Layout>
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive moving and logistics solutions — from household moves to specialized transport.
          </p>
        </AnimatedSection>

        {/* Transport Methods Section */}
        <div className="mb-20">
          <AnimatedSection className="text-center mb-12">
            
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect transport solution for your needs with our global logistics network
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {transportMethods.map((method, index) => (
              <AnimatedSection key={method.title} delay={index * 0.1}>
                <div className="group relative overflow-hidden rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={method.image} 
                      alt={method.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${method.color} opacity-70`}></div>
                    
                    {/* Icon overlay */}
                    <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-900/90 rounded-xl p-2 backdrop-blur-sm">
                      <method.icon size={28} className="text-primary" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 bg-card">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {method.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {method.description}
                    </p>
                    
                    {/* Features list */}
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">
                        Key Features:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {method.features.map((feature) => (
                          <span 
                            key={feature} 
                            className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-300"
                    >
                      Get a Quote
                      <span className="text-lg">→</span>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Specialized Services Section */}
        <div className="mb-16">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Specialized <span className="text-gradient">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Expert solutions for your unique moving and logistics needs
            </p>
          </AnimatedSection>

          <div className="space-y-8 max-w-4xl mx-auto">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.1} className="bg-card rounded-xl p-8 shadow-card border border-border hover:shadow-card-hover transition-shadow">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="shrink-0 w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                    <s.icon size={28} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
                    <p className="text-muted-foreground mb-4">{s.desc}</p>
                    <ul className="flex flex-wrap gap-2 mb-4">
                      {s.features.map((f) => (
                        <li key={f} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">{f}</li>
                      ))}
                    </ul>
                    <Link to="/contact" className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1">
                      Get a Quote <span>→</span>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <AnimatedSection className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Our logistics experts are ready to create a tailored transport plan for your specific needs
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Contact Our Experts
              <span>→</span>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default Services;