import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { createWhatsAppUrl, PHONE_DISPLAY } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show gentle tooltip 3 seconds after page loads
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const waUrl = createWhatsAppUrl(
    'Hola Charlitron Digital, vi su sitio web y me gustaría información para mi negocio.'
  );

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-3">
      {/* Discreet speech bubble on mobile & desktop */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900/95 border border-zinc-700/80 text-xs text-zinc-200 shadow-xl backdrop-blur-sm animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>¿Dudas? Chatea al <b>{PHONE_DISPLAY}</b></span>
          <button
            onClick={() => setShowTooltip(false)}
            className="p-1 text-zinc-400 hover:text-white"
            aria-label="Cerrar aviso de WhatsApp"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp a Charlitron Digital"
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-[0_4px_25px_rgba(16,185,129,0.4)] active:scale-95 transition-all"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
        
        {/* Pulse indicator */}
        <span className="absolute top-1 right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-400" />
        </span>
      </a>
    </div>
  );
};
