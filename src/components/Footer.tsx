import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-card border-t border-border">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img 
              src="/logo.webp" 
              alt="JAF Déménagements" 
              className="w-10 h-10 object-contain"
            />
            <div className="leading-tight">
              <span className="font-bold text-foreground text-lg">JAF</span>
              <span className="block text-[10px] uppercase tracking-widest text-muted-foreground">Déménagements</span>
            </div>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Full-service moving & storage company in Tunisia since the 1950's. National & international moves across Africa and worldwide.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Anti corruption & Bribery Statement", path: "/anti-corruption" },
              { label: "Data protection policy", path: "/data-protection" },
              { label: "Code of ethics", path: "/code-of-ethics" },
              { label: "Partner in Morocco", path: "/morocco-partner" },
            ].map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="text-muted-foreground hover:text-primary transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4">Our Offices</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2 text-muted-foreground">
              <MapPin size={16} className="mt-0.5 text-primary shrink-0" />
              <span>Tunis: 4 Rue de la Nouvelle Delhi, Tunis 1002</span>
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <MapPin size={16} className="mt-0.5 text-primary shrink-0" />
              <span>Rabat: 37, Rue Idriss Al Akbar N°3 - HASSAN - RABAT -10020</span>
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <MapPin size={16} className="mt-0.5 text-primary shrink-0" />
              <span>Casablanca: 5, Bd Abdellah Ben Yacine – 5eme Etage N°1 - CASA</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2 text-muted-foreground">
              <Phone size={16} className="mt-0.5 text-primary shrink-0" />
              <span>Tunis: 71 906 446</span>
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <Phone size={16} className="mt-0.5 text-primary shrink-0" />
              <span>Morocco: (+212) 537 26 20 46 / 26 31 57</span>
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <Phone size={16} className="mt-0.5 text-primary shrink-0" />
              <span>GSM: (+212) 661 37 41 66</span>
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <Mail size={16} className="mt-0.5 text-primary shrink-0" />
              <span>mimc@moumene.com</span>
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <span className="text-primary shrink-0">🌐</span>
              <a href="https://www.moumene.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                www.moumene.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Sponsor Images Section - Enhanced with animations */}
      <div className="mt-12 pt-8 border-t border-border">
        <div className="text-center mb-8">
          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Nos Partenaires</h4>
          <div className="w-20 h-0.5 bg-primary mx-auto"></div>
        </div>
        
        <div className="flex justify-center items-center gap-12 flex-wrap">
          <div className="group relative">
            <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl">
              <img 
                src="/sponsore1.webp" 
                alt="Sponsor 1" 
                className="h-20 w-auto object-contain transition-all duration-300 group-hover:brightness-110"
              />
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl">
              <img 
                src="/sponsore2.webp" 
                alt="Sponsor 2" 
                className="h-20 w-auto object-contain transition-all duration-300 group-hover:brightness-110"
              />
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl">
              <img 
                src="/sponsore3.webp" 
                alt="Sponsor 3" 
                className="h-20 w-auto object-contain transition-all duration-300 group-hover:brightness-110"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} JAF Déménagements. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;