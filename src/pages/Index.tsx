import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Hero3D from "@/components/Hero3D";
import AnimatedSection from "@/components/AnimatedSection";
import { Truck, Plane, Warehouse, Car, PawPrint, Palette, Shield, Clock, Globe, PhoneCall, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = Math.max(1, Math.floor(end / 60));
          const interval = setInterval(() => {
            start += step;
            if (start >= end) {
              setCount(end);
              clearInterval(interval);
            } else {
              setCount(start);
            }
          }, 20);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-primary">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

const stats = [
  { end: 30000, suffix: "+", label: "Moves Performed", icon: Truck },
  { end: 4500, suffix: "+", label: "Storage Solutions", icon: Warehouse },
  { end: 60, suffix: "+", label: "Years of Experience", icon: Clock },
];

const whyChoose = [
  { icon: Shield, title: "Full-Service Moving", desc: "From packing to unpacking, we handle every detail." },
  { icon: Globe, title: "Air, Sea & Land", desc: "Multiple transport alternatives across the globe." },
  { icon: PhoneCall, title: "24/7 Support", desc: "Round-the-clock customer service whenever you need us." },
  { icon: Shield, title: "Worldwide Insurance", desc: "Comprehensive coverage for total peace of mind." },
];

const services = [
  { icon: Car, title: "Car Shipping", desc: "Safe vehicle transport by land or sea." },
  { icon: Truck, title: "Office Moving", desc: "Seamless corporate relocations." },
  { icon: Warehouse, title: "Storage", desc: "Secure short & long-term solutions." },
  { icon: Palette, title: "Fine Art", desc: "Expert handling for priceless pieces." },
  { icon: PawPrint, title: "Pet Relocation", desc: "Safe, caring animal transport." },
];

// Images pour le carrousel
const carouselImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Professional moving team",
    title: "Professional Team",
    description: "Experienced and trained professionals handling your belongings with care"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Secure packaging",
    title: "Secure Packaging",
    description: "High-quality materials and careful packing techniques"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Modern warehouse",
    title: "Modern Storage",
    description: "Climate-controlled facilities with 24/7 surveillance"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Global shipping",
    title: "Worldwide Network",
    description: "International shipping expertise in over 100 countries"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Customer satisfaction",
    title: "Customer First",
    description: "24/7 dedicated support and personalized service"
  }
];

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
        <div className="hidden md:block">
          <Hero3D />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide mb-6">
              Since the 1950's — Tunisia & North Africa
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
              Your Professional{" "}
              <span className="text-gradient">Mover</span> in Tunisia
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Full-service moving & storage company — national & international moves, car shipping, pet relocation, fine art, and more.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                Request a Free Quote
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-lg border border-border bg-card text-foreground font-semibold hover:bg-muted transition-colors"
              >
                Contact us 24/7
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 0.1} className="text-center">
                <s.icon size={32} className="mx-auto mb-3 text-primary" />
                <Counter end={s.end} suffix={s.suffix} />
                <p className="text-muted-foreground mt-2 text-sm">{s.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us avec Carrousel */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose JAF?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Trusted by thousands for over 60 years — we bring expertise, care, and reliability to every move.
            </p>
          </AnimatedSection>

          {/* Carrousel d'images - Version corrigée sans overflow */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative">
              {/* Image principale */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <div className="relative h-64 md:h-80 lg:h-96">
                  <img 
                    src={carouselImages[currentImageIndex].src}
                    alt={carouselImages[currentImageIndex].alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Légende */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                    <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-2">
                      {carouselImages[currentImageIndex].title}
                    </h3>
                    <p className="text-xs md:text-sm text-white/90">
                      {carouselImages[currentImageIndex].description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Boutons de navigation */}
              <button
                onClick={prevImage}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-900/90 rounded-full p-2 md:p-3 shadow-lg hover:scale-110 transition-all duration-300 z-10"
                aria-label="Image précédente"
              >
                <ChevronLeft size={20} className="text-primary md:w-6 md:h-6" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-900/90 rounded-full p-2 md:p-3 shadow-lg hover:scale-110 transition-all duration-300 z-10"
                aria-label="Image suivante"
              >
                <ChevronRight size={20} className="text-primary md:w-6 md:h-6" />
              </button>
            </div>

            {/* Indicateurs de progression */}
            <div className="flex justify-center gap-2 mt-6">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentImageIndex === index 
                      ? "w-6 md:w-8 bg-primary" 
                      : "w-2 bg-primary/30 hover:bg-primary/50"
                  }`}
                  aria-label={`Aller à l'image ${index + 1}`}
                />
              ))}
            </div>

            {/* Miniatures - Version sans scroll horizontal */}
            <div className="hidden md:flex justify-center gap-3 mt-8">
              {carouselImages.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => goToImage(index)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                    currentImageIndex === index 
                      ? "ring-2 ring-primary ring-offset-2 dark:ring-offset-gray-900 scale-105" 
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Miniatures version mobile - grille simple */}
            <div className="flex md:hidden justify-center gap-2 mt-6 overflow-x-auto pb-2 px-4">
              {carouselImages.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => goToImage(index)}
                  className={`relative flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden transition-all duration-300 ${
                    currentImageIndex === index 
                      ? "ring-2 ring-primary ring-offset-2 dark:ring-offset-gray-900" 
                      : "opacity-60"
                  }`}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Grille Why Choose */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, i) => (
              <AnimatedSection
                key={item.title}
                delay={i * 0.1}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover hover-lift border border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Comprehensive moving and logistics solutions tailored to your needs.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((s, i) => (
              <AnimatedSection
                key={s.title}
                delay={i * 0.08}
                className="group bg-background rounded-xl p-6 shadow-card hover:shadow-card-hover hover-lift border border-border text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary flex items-center justify-center mx-auto mb-4 transition-colors">
                  <s.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{s.title}</h3>
                <p className="text-xs text-muted-foreground">{s.desc}</p>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              View All Services
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <AnimatedSection className="bg-primary rounded-2xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Move?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
              Get a free, no-obligation quote today and let us handle the rest.
            </p>
            <Link
              to="/contact"
              className="inline-flex px-8 py-4 rounded-lg bg-accent text-accent-foreground font-bold text-lg hover:opacity-90 transition-opacity"
            >
              Request a Free Quote
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;