import React from 'react';
import { ShowcaseProject } from '../types';
import { ProjectMockup } from './ProjectMockup';
import { X, Check, MessageCircle, ArrowUpRight, TrendingUp, Globe } from 'lucide-react';
import { createWhatsAppUrl } from '../data/content';

interface ModalProps {
  project: ShowcaseProject | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const waUrl = createWhatsAppUrl(project.whatsappMessage);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#121216] border border-zinc-700 p-6 sm:p-8 text-left shadow-2xl my-8">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          aria-label="Cerrar vista de proyecto"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pr-10">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider bg-amber-400 text-zinc-950">
              {project.badge}
            </span>
            <span className="text-xs text-zinc-400 font-medium">
              {project.tag}
            </span>
          </div>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold hover:bg-emerald-500/20 hover:border-emerald-400 transition-all"
              title={`Visitar ${project.liveUrl}`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Sitio en Vivo</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        {/* Title */}
        <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-zinc-400 text-sm mb-5 leading-relaxed">
          {project.subtitle}
        </p>

        {/* Visual Mockup inside modal */}
        <div className="mb-6">
          <ProjectMockup type={project.visualType} />
        </div>

        {/* Description */}
        <p className="text-zinc-300 text-sm mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Key Features */}
        <div className="space-y-2.5 mb-6">
          <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
            Capacidades desarrolladas:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.keyFeatures.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-zinc-200">
                <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics if available */}
        {project.metrics && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-zinc-900 border border-zinc-800">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="text-center">
                <span className="text-lg sm:text-xl font-bold text-amber-400 font-display block">
                  {m.value}
                </span>
                <span className="text-[11px] text-zinc-400 block mt-0.5">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-amber-400 text-zinc-950 font-bold text-sm hover:bg-amber-300 transition-all shadow-[0_0_20px_rgba(250,204,21,0.25)]"
            >
              <Globe className="w-4 h-4" />
              <span>Abrir sitio web oficial</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-sm border border-zinc-700 hover:border-zinc-600 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current text-amber-400" />
            <span>Consultar por WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 text-zinc-400" />
          </a>
          <button
            onClick={onClose}
            className="py-3 px-5 rounded-xl bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800 font-medium text-sm hover:bg-zinc-800 transition-all cursor-pointer"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
