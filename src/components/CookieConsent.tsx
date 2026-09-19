import React, { useState, useEffect } from 'react';
import { Cookie, X, Check, ShieldCheck } from 'lucide-react';
import { LegalTab } from './LegalPage';

interface CookieConsentProps {
  onOpenLegal?: (tab: LegalTab) => void;
}

const COOKIE_CONSENT_KEY = 'charlitron_cookie_consent';

export const CookieConsent: React.FC<CookieConsentProps> = ({ onOpenLegal }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const savedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!savedConsent) {
      // Small delay so it appears smoothly after page load
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Aviso de cookies"
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:bottom-6 sm:max-w-md z-50 animate-fadeIn"
    >
      <div className="relative p-5 sm:p-6 rounded-2xl bg-[#121217]/95 backdrop-blur-md border border-zinc-800 shadow-[0_12px_40px_rgba(0,0,0,0.6)] text-zinc-200">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/25 flex items-center justify-center text-amber-400 shrink-0">
            <Cookie className="w-5 h-5" />
          </div>

          <div className="flex-1 pr-6">
            <h4 className="text-sm font-bold text-white tracking-tight">
              Control de Privacidad y Cookies
            </h4>
            <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
              Utilizamos cookies técnicas para garantizar el funcionamiento del sitio y analizar su rendimiento. Puedes aceptar o indicar que no estás de acuerdo.{' '}
              {onOpenLegal && (
                <button
                  type="button"
                  onClick={() => onOpenLegal('cookies')}
                  className="text-amber-400 hover:text-amber-300 underline underline-offset-2 cursor-pointer transition-colors"
                >
                  Leer política
                </button>
              )}
            </p>
          </div>

          <button
            onClick={handleReject}
            className="absolute top-3.5 right-3.5 p-1 text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer"
            aria-label="Cerrar aviso"
            title="Cerrar aviso"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Buttons */}
        <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-end gap-2.5">
          <button
            type="button"
            onClick={handleReject}
            className="px-3.5 py-2 rounded-xl bg-zinc-850 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-750 text-xs font-medium transition-all cursor-pointer"
          >
            No estoy de acuerdo
          </button>

          <button
            type="button"
            onClick={handleAccept}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 text-xs font-bold transition-all shadow-[0_0_15px_rgba(250,204,21,0.25)] cursor-pointer"
          >
            <Check className="w-3.5 h-3.5 stroke-[3]" />
            <span>Aceptar</span>
          </button>
        </div>
      </div>
    </div>
  );
};
