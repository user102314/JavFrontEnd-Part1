import { useState } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "", lastName: "", phone: "", email: "",
    moveType: "personal", origin: "", destination: "", date: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.email || !form.origin || !form.destination) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("Thank you! We'll get back to you within 24 hours.");
    setForm({ firstName: "", lastName: "", phone: "", email: "", moveType: "personal", origin: "", destination: "", date: "", message: "" });
  };

  const inputClass = "w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow text-sm";

  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Request a free quote or get in touch — we're here 24/7.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {/* Form */}
            <AnimatedSection className="lg:col-span-2 bg-card rounded-xl p-8 shadow-card border border-border">
              <h2 className="text-xl font-bold text-foreground mb-6">Request a Free Quote</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input className={inputClass} placeholder="First Name *" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
                  <input className={inputClass} placeholder="Last Name" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input className={inputClass} placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                  <input className={inputClass} type="email" placeholder="Email *" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
                <select className={inputClass} value={form.moveType} onChange={(e) => setForm({ ...form, moveType: e.target.value })}>
                  <option value="personal">Personal Move</option>
                  <option value="professional">Professional / Office Move</option>
                </select>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input className={inputClass} placeholder="Origin (city / country) *" value={form.origin} onChange={(e) => setForm({ ...form, origin: e.target.value })} />
                  <input className={inputClass} placeholder="Destination (city / country) *" value={form.destination} onChange={(e) => setForm({ ...form, destination: e.target.value })} />
                </div>
                <input className={inputClass} type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
                <textarea className={`${inputClass} min-h-[100px] resize-none`} placeholder="Additional details..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                >
                  <Send size={16} />
                  Request a Free Quote
                </button>
              </form>
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection delay={0.2} className="space-y-6">
              <div className="bg-card rounded-xl p-6 shadow-card border border-border">
                <h3 className="font-semibold text-foreground mb-4">Get in Touch</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <Phone size={18} className="text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p>+216 71 906 446</p>
                      <p>+216 71 906 449</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <Mail size={18} className="text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p>demjaf@planet.tn</p>
                      <p>g.managerdemjaf@orange.tn</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Address</p>
                      <p>Ariana, Tunis, Tunisia</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-primary rounded-xl p-6 text-center">
                <p className="text-primary-foreground font-bold text-lg mb-2">24/7 Support</p>
                <p className="text-primary-foreground/80 text-sm mb-4">We're always available for your questions.</p>
                <a href="tel:+21671906446" className="inline-flex px-5 py-2 rounded-lg bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
                  Call Now
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
