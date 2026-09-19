import React from 'react';
import { WORK_STEPS, createWhatsAppUrl } from '../data/content';
import { Ear, SearchCheck, Lightbulb, Wrench, ArrowRight, MessageCircle } from 'lucide-react';

export const HowWeWork: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Ear':
        return <Ear className="w-6 h-6 text-amber-400" />;
      case 'SearchCheck':
        return <SearchCheck className="w-6 h-6 text-amber-400" />;
      case 'Lightbulb':
        return <Lightbulb className="w-6 h-6 text-amber-400" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-amber-400" />;
      default:
        return <Lightbulb className="w-6 h-6 text-amber-400" />;
    }
  };

  const processWaUrl = createWhatsAppUrl(
    'Hola, vi Charlitron Digital. Tengo un proceso que quiero mejorar en mi negocio.'
  );

  return (
    <section id="metodo" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-900">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-amber-400 font-semibold tracking-wider text-xs uppercase px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20">
          Metodología ágil
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white mt-3 mb-4 tracking-tight">
          Cómo trabajamos
        </h2>
        <p className="text-zinc-400 text-base sm:text-lg">
          Sin procesos burocráticos ni meses de juntas interminables. Vamos directo al grano.
        </p>
      </div>

      {/* 4 Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
        {WORK_STEPS.map((step, index) => (
          <div
            key={step.number}
            className="relative flex flex-col p-6 sm:p-7 rounded-2xl bg-[#111116] border border-zinc-800/90 hover:border-amber-400/60 transition-all"
          >
            {/* Step number badge */}
            <div className="flex items-center justify-between mb-5">
              <span className="font-display font-black text-2xl text-amber-400/80">
                {step.number}
              </span>
              <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-700/80 flex items-center justify-center">
                {getIcon(step.iconName)}
              </div>
            </div>

            <h3 className="font-display text-xl font-bold text-white mb-2">
              {step.title}
            </h3>

            <p className="text-zinc-400 text-sm leading-relaxed">
              {step.description}
            </p>

            {/* Connecting subtle line on desktop */}
            {index < WORK_STEPS.length - 1 && (
              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-zinc-700">
                <ArrowRight className="w-5 h-5 text-zinc-600" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Primary Step CTA */}
      <div className="flex flex-col items-center justify-center text-center">
        <a
          href={processWaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-amber-400 text-zinc-950 font-bold text-base hover:bg-amber-300 active:scale-[0.98] transition-all shadow-[0_0_30px_rgba(250,204,21,0.25)]"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span>Tengo un proceso que quiero mejorar</span>
          <ArrowRight className="w-5 h-5" />
        </a>
        <span className="text-xs text-zinc-500 mt-3">
          Respuesta rápida en WhatsApp • Sin compromiso inicial
        </span>
      </div>
    </section>
  );
};
