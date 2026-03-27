import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  
  // Numéro de téléphone WhatsApp (format international sans le +)
  const phoneNumber = "21671906446";
  const message = encodeURIComponent("Bonjour JAF, je souhaite obtenir plus d'informations sur vos services de déménagement.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  // Masquer le bouton après 10 secondes (optionnel)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {/* Tooltip de notification */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="absolute bottom-14 right-0 bg-gray-900 dark:bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg"
              >
                <span className="font-medium">Contactez-nous sur WhatsApp</span>
                <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900 dark:bg-gray-800"></div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bouton principal */}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-2xl cursor-pointer group hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Animation de pulsation */}
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
            
            {/* Icône WhatsApp */}
            <MessageCircle 
              size={32} 
              className="text-white relative z-10 group-hover:rotate-12 transition-transform duration-300"
              strokeWidth={1.5}
            />
            
            {/* Badge de notification */}
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center font-bold animate-bounce">
              !
            </span>
          </motion.a>

          {/* Bouton fermer (optionnel) */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute -top-2 -right-2 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors shadow-md"
            aria-label="Fermer"
          >
            <X size={12} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppButton;