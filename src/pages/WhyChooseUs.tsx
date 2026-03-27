import { useState } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Shield, Users, Warehouse, ClipboardCheck, PhoneCall, Globe, Search, Package, Truck, HeadphonesIcon, ChevronLeft, ChevronRight, Star, Award, Clock, ThumbsUp } from "lucide-react";

const reasons = [
  { icon: Shield, title: "Full-Service Moving & Storage", desc: "We manage every aspect of your move from start to finish." },
  { icon: ClipboardCheck, title: "Customized Solutions", desc: "Personalized surveys, quotes, and planning for every client." },
  { icon: Users, title: "Professional Teams", desc: "Experienced, trained staff who treat your belongings with care." },
  { icon: Warehouse, title: "Safe & Secure Storage", desc: "Modern facilities with 24/7 surveillance and climate control." },
  { icon: Globe, title: "Comprehensive Insurance", desc: "Full worldwide coverage so you can move with confidence." },
  { icon: PhoneCall, title: "24/7 Customer Support", desc: "We're always available when you need us." },
];

const steps = [
  { 
    num: 1, 
    icon: Search, 
    title: "Survey", 
    desc: "We conduct a physical or virtual survey to evaluate your needs.", 
    details: "Our experts assess your inventory, measure spaces, and understand your specific requirements to provide an accurate quote.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "from-blue-500 to-blue-600"
  },
  { 
    num: 2, 
    icon: ClipboardCheck, 
    title: "Planning", 
    desc: "Volume assessment, documentation, insurance, and packing plan.", 
    details: "Detailed timeline creation, documentation preparation, insurance selection, and customized packing strategy.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "from-purple-500 to-purple-600"
  },
  { 
    num: 3, 
    icon: Package, 
    title: "Preparation", 
    desc: "Professional packing, labeling, and detailed inventory.", 
    details: "High-quality materials, systematic packing, color-coded labeling, and comprehensive inventory management.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "from-green-500 to-green-600"
  },
  { 
    num: 4, 
    icon: Truck, 
    title: "Execution", 
    desc: "Loading, transport, unloading, and installation at destination.", 
    details: "Secure loading techniques, real-time tracking, careful unloading, and professional installation at your new location.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "from-orange-500 to-orange-600"
  },
  { 
    num: 5, 
    icon: HeadphonesIcon, 
    title: "After-Sales", 
    desc: "Claims handling, follow-up, and continued support.", 
    details: "Post-move satisfaction check, claims management, and ongoing support for any questions or concerns.",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "from-red-500 to-red-600"
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "International Client",
    content: "JAF made my move from Paris to Tunis absolutely seamless. Their team was professional, punctual, and extremely careful with my belongings.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Mohamed Ben Ali",
    role: "Corporate Client",
    content: "We trusted JAF with our entire office relocation. They completed the move over a weekend with zero downtime for our business. Exceptional service!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Emma Thompson",
    role: "Fine Art Client",
    content: "The white-glove service for my art collection was outstanding. Climate-controlled transport, custom crating, and impeccable handling.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Pierre Dubois",
    role: "Residential Client",
    content: "Moving my family across continents was stressful, but JAF handled everything with care and professionalism. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  }
];

const stats = [
  { icon: Award, value: "60+", label: "Years of Experience", color: "text-blue-500" },
  { icon: Users, value: "50K+", label: "Happy Clients", color: "text-green-500" },
  { icon: Globe, value: "100+", label: "Countries Served", color: "text-purple-500" },
  { icon: ThumbsUp, value: "99%", label: "Satisfaction Rate", color: "text-orange-500" },
];

const WhyChooseUs = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  // Récupérer l'icône courante
  const CurrentIcon = steps[currentStep].icon;

  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose <span className="text-gradient">JAF?</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover what sets us apart — decades of expertise, personalized service, and unwavering commitment to your satisfaction.
            </p>
          </AnimatedSection>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-3">
                  <stat.icon size={32} className={stat.color} />
                </div>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>

          {/* Why Choose Us Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {reasons.map((r, i) => (
              <AnimatedSection key={r.title} delay={i * 0.08} className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover hover-lift border border-border group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <r.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground">{r.desc}</p>
              </AnimatedSection>
            ))}
          </div>

          {/* Carousel Section */}
          <div className="mb-24">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our <span className="text-gradient">Method of Service</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                A proven 5-step process refined over 60+ years of experience.
              </p>
            </AnimatedSection>

            {/* Carousel */}
            <div className="relative max-w-4xl mx-auto">
              {/* Main Carousel Item */}
              <div className="relative overflow-hidden rounded-2xl bg-card shadow-xl">
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img 
                    src={steps[currentStep].image} 
                    alt={steps[currentStep].title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${steps[currentStep].color} opacity-60`}></div>
                  
                  {/* Step Number Badge */}
                  <div className="absolute top-6 left-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl px-4 py-2">
                    <span className="text-2xl font-bold text-primary">Step {steps[currentStep].num}</span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <CurrentIcon size={24} className="text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{steps[currentStep].title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    {steps[currentStep].desc}
                  </p>
                  
                  <p className="text-foreground/80 leading-relaxed">
                    {steps[currentStep].details}
                  </p>
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevStep}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:scale-110 transition-transform z-10"
                aria-label="Previous step"
              >
                <ChevronLeft size={24} className="text-primary" />
              </button>
              
              <button
                onClick={nextStep}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:scale-110 transition-transform z-10"
                aria-label="Next step"
              >
                <ChevronRight size={24} className="text-primary" />
              </button>

              {/* Progress Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStep(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentStep === index 
                        ? "w-8 bg-primary" 
                        : "w-2 bg-primary/30 hover:bg-primary/50"
                    }`}
                    aria-label={`Go to step ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Step Previews */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-8 max-w-4xl mx-auto">
              {steps.map((step, index) => {
                const StepIcon = step.icon;
                return (
                  <button
                    key={step.num}
                    onClick={() => setCurrentStep(index)}
                    className={`p-3 rounded-xl text-center transition-all duration-300 ${
                      currentStep === index
                        ? "bg-primary text-primary-foreground shadow-lg scale-105"
                        : "bg-card hover:bg-primary/10 text-muted-foreground"
                    }`}
                  >
                    <StepIcon size={20} className="mx-auto mb-1" />
                    <span className="text-xs font-medium">Step {step.num}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Testimonials Section */}
          <AnimatedSection className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Our <span className="text-gradient">Clients Say</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Don't just take our word for it — hear from our satisfied customers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, i) => (
                <AnimatedSection key={testimonial.name} delay={i * 0.1} className="bg-card rounded-xl p-6 shadow-card border border-border">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm italic">"{testimonial.content}"</p>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          {/* CTA Section */}
          <AnimatedSection className="text-center">
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to Experience the JAF Difference?
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                Join thousands of satisfied clients who trusted us with their most valuable possessions
              </p>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Get Your Free Quote Today
                <span>→</span>
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default WhyChooseUs;