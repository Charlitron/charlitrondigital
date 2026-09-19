import React from 'react';
import { BUSINESS_NEEDS, createWhatsAppUrl } from '../data/content';
import {
  TrendingUp,
  Cpu,
  CalendarCheck,
  Calculator,
  LayoutGrid,
  HelpCircle,
  ArrowUpRight,
  MessageCircle
} from 'lucide-react';

export const NeedsSelector: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-amber-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-amber-400" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-6 h-6 text-amber-400" />;
      case 'Calculator':
        return <Calculator className="w-6 h-6 text-amber-400" />;
      case 'LayoutGrid':
        return <LayoutGrid className="w-6 h-6 text-amber-400" />;
      case 'HelpCircle':
        return <HelpCircle className="w-6 h-6 text-amber-400" />;
      default:
        return <TrendingUp className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="necesidades" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-900 bg-gradient-to-b from-transparent via-zinc-950/40 to-transparent">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-amber-400 font-semibold tracking-wider text-xs uppercase px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20">
          Enfoque directo al problema
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white mt-3 mb-4 tracking-tight">
          ¿Qué quieres mejorar en tu negocio?
        </h2>
        <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto">
          No necesitas dominar términos técnicos. Elige la meta principal que tienes hoy y te asesoramos directamente por WhatsApp.
        </p>
      </div>

      {/* 6 Large Action Buttons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {BUSINESS_NEEDS.map((item) => {
          const waUrl = createWhatsAppUrl(item.whatsappMessage);

          return (
            <a
              key={item.id}
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl transition-all duration-200 text-left border ${
                item.highlight
                  ? 'bg-gradient-to-b from-[#16161c] to-[#101014] border-zinc-700/80 hover:border-amber-400 shadow-md hover:shadow-[0_10px_35px_rgba(250,204,21,0.12)]'
                  : 'bg-[#101014] border-zinc-800 hover:border-amber-400/70 hover:bg-[#15151a]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center group-hover:border-amber-400/50 group-hover:scale-105 transition-all">
                    {getIcon(item.iconName)}
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-400 group-hover:text-amber-400 transition-colors">
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {item.label}
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Action trigger footer */}
              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                <span className="text-zinc-400 group-hover:text-zinc-200 transition-colors">
                  Clic para enviar mensaje listo:
                </span>
                <span className="font-medium text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                  Iniciar chat
                </span>
              </div>
            </a>
          );
        })}
      </div>

      {/* Reassurance note */}
      <div className="mt-10 text-center">
        <p className="text-xs sm:text-sm text-zinc-400">
          ¿Prefieres una llamada directa? Marca al{' '}
          <a
            href="tel:4444237092"
            className="text-amber-400 font-semibold hover:underline"
          >
            444 423 70 92
          </a>
        </p>
      </div>
    </section>
  );
};
