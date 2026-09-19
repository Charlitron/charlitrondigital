import React from 'react';
import { 
  Calendar, 
  Users, 
  Clock, 
  CheckCircle, 
  DollarSign, 
  Search, 
  Star, 
  Phone, 
  FileText, 
  ArrowUpRight,
  TrendingUp,
  Activity,
  ChevronRight,
  Sparkles,
  Calculator
} from 'lucide-react';

interface MockupProps {
  type: 'vet' | 'eventos' | 'citas' | 'cotizador' | 'dashboard';
}

export const ProjectMockup: React.FC<MockupProps> = ({ type }) => {
  if (type === 'vet') {
    return (
      <div className="w-full bg-[#0d0d12] rounded-xl border border-zinc-700/80 p-3 sm:p-4 text-xs select-none overflow-hidden shadow-inner font-mono">
        {/* Mock top bar */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-2.5 mb-3">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="font-sans font-bold text-amber-400 text-xs ml-1">
              Charlitron VET • Panel Clínico
            </span>
          </div>
          <a
            href="https://charlitronvet.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-0.5 rounded bg-emerald-950/90 text-emerald-300 text-[10px] font-sans border border-emerald-700/60 hover:border-emerald-400 hover:text-emerald-200 inline-flex items-center gap-1 transition-colors"
            title="Abrir charlitronvet.com"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>charlitronvet.com</span>
            <ArrowUpRight className="w-2.5 h-2.5" />
          </a>
        </div>

        {/* Quick VET stats */}
        <div className="grid grid-cols-3 gap-2 mb-3 font-sans">
          <div className="bg-zinc-900/90 p-2 rounded-lg border border-zinc-800">
            <span className="text-[10px] text-zinc-400 block">Citas hoy</span>
            <span className="text-sm font-bold text-white">14 pacientes</span>
          </div>
          <div className="bg-zinc-900/90 p-2 rounded-lg border border-zinc-800">
            <span className="text-[10px] text-zinc-400 block">Recordatorios WA</span>
            <span className="text-sm font-bold text-amber-400">100% enviados</span>
          </div>
          <div className="bg-zinc-900/90 p-2 rounded-lg border border-zinc-800">
            <span className="text-[10px] text-zinc-400 block">Hospitalizados</span>
            <span className="text-sm font-bold text-zinc-200">3 estables</span>
          </div>
        </div>

        {/* Sample Patient agenda rows */}
        <div className="space-y-1.5 font-sans">
          <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-900/60 border border-zinc-800/80">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold text-xs">
                🐕
              </div>
              <div>
                <p className="font-semibold text-zinc-200 text-xs leading-none">Max (Golden Retriever)</p>
                <p className="text-[10px] text-zinc-400 mt-0.5">Vacuna séxtuple + desparasitación</p>
              </div>
            </div>
            <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-900">
              09:30 AM
            </span>
          </div>

          <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-900/60 border border-zinc-800/80">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold text-xs">
                🐈
              </div>
              <div>
                <p className="font-semibold text-zinc-200 text-xs leading-none">Luna (Siamés)</p>
                <p className="text-[10px] text-zinc-400 mt-0.5">Revisión dental y limpieza</p>
              </div>
            </div>
            <span className="text-[10px] font-semibold text-amber-400 bg-amber-950 px-2 py-0.5 rounded border border-amber-900">
              10:15 AM
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'eventos') {
    return (
      <div className="w-full bg-[#0d0d12] rounded-xl border border-zinc-700/80 p-3 sm:p-4 text-xs select-none overflow-hidden shadow-inner font-sans">
        {/* Mock top bar */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-2.5 mb-3">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="font-bold text-amber-400 text-xs ml-1">
              Charlitron Eventos 360
            </span>
          </div>
          <a
            href="https://charlitroneventos360.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-0.5 rounded bg-emerald-950/90 text-emerald-300 text-[10px] font-sans border border-emerald-700/60 hover:border-emerald-400 hover:text-emerald-200 inline-flex items-center gap-1 transition-colors"
            title="Abrir charlitroneventos360.com"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>charlitroneventos360.com</span>
            <ArrowUpRight className="w-2.5 h-2.5" />
          </a>
        </div>

        {/* Categories pills */}
        <div className="flex items-center gap-1.5 mb-3 overflow-hidden text-[10px]">
          <span className="px-2 py-0.5 rounded bg-amber-400 text-zinc-950 font-bold">Todos</span>
          <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">Salones</span>
          <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">Fotografía</span>
          <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">Música</span>
        </div>

        {/* Vendor card preview */}
        <div className="p-2.5 rounded-lg bg-zinc-900/90 border border-zinc-800 mb-2">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-1.5">
                <h4 className="font-bold text-white text-xs">Jardín Las Palmas Premium</h4>
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                <span className="text-[10px] text-amber-400 font-semibold">4.9</span>
              </div>
              <p className="text-[10px] text-zinc-400 mt-0.5">Capacidad: 150 - 450 personas • Zona Poniente</p>
            </div>
            <span className="text-amber-400 font-bold text-xs">$28,000+</span>
          </div>

          <div className="flex items-center justify-between mt-2 pt-2 border-t border-zinc-800 text-[10px]">
            <span className="text-zinc-400">Cotización instantánea en WhatsApp</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <Phone className="w-2.5 h-2.5" /> Disponible
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'citas') {
    return (
      <div className="w-full bg-[#0d0d12] rounded-xl border border-zinc-700/80 p-3 sm:p-4 text-xs select-none overflow-hidden shadow-inner font-sans">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-2.5 mb-3">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-amber-400" />
            <span className="font-bold text-white text-xs">Selector de Fecha & Hora</span>
          </div>
          <span className="text-[10px] text-emerald-400 font-medium">Sincronizado</span>
        </div>

        <div className="grid grid-cols-4 gap-1.5 mb-3 text-center text-[10px]">
          <div className="p-1.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
            <span>Lun 19</span>
          </div>
          <div className="p-1.5 rounded bg-amber-400 text-zinc-950 font-bold border border-amber-300">
            <span>Mar 20</span>
          </div>
          <div className="p-1.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
            <span>Mié 21</span>
          </div>
          <div className="p-1.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
            <span>Jue 22</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-1.5 text-center text-[10px]">
          <span className="p-1.5 rounded bg-zinc-900/60 text-zinc-500 line-through">10:00 AM</span>
          <span className="p-1.5 rounded bg-emerald-950/70 border border-emerald-700/60 text-emerald-300 font-semibold">11:30 AM</span>
          <span className="p-1.5 rounded bg-emerald-950/70 border border-emerald-700/60 text-emerald-300 font-semibold">04:00 PM</span>
        </div>
      </div>
    );
  }

  if (type === 'cotizador') {
    return (
      <div className="w-full bg-[#0d0d12] rounded-xl border border-zinc-700/80 p-3 sm:p-4 text-xs select-none overflow-hidden shadow-inner font-sans">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-2.5 mb-3">
          <div className="flex items-center gap-2">
            <Calculator className="w-4 h-4 text-amber-400" />
            <span className="font-bold text-white text-xs">Cotizador Interactivo</span>
          </div>
          <span className="text-amber-400 text-[10px] font-bold">Total dinámico</span>
        </div>

        <div className="space-y-2 mb-3 text-[11px]">
          <div className="flex justify-between items-center bg-zinc-900/80 p-1.5 rounded border border-zinc-800">
            <span className="text-zinc-300">Paquete Base (Web Corporativa)</span>
            <span className="font-semibold text-white">$6,500</span>
          </div>
          <div className="flex justify-between items-center bg-zinc-900/80 p-1.5 rounded border border-zinc-800">
            <span className="text-zinc-300">+ Módulo Citas Automatizadas</span>
            <span className="font-semibold text-amber-400">+$2,200</span>
          </div>
        </div>

        <div className="flex items-center justify-between p-2 rounded bg-amber-400/10 border border-amber-400/30">
          <span className="text-[11px] font-bold text-zinc-200">Presupuesto sugerido:</span>
          <span className="text-sm font-extrabold text-amber-400">$8,700 MXN</span>
        </div>
      </div>
    );
  }

  // Dashboard mockup
  return (
    <div className="w-full bg-[#0d0d12] rounded-xl border border-zinc-700/80 p-3 sm:p-4 text-xs select-none overflow-hidden shadow-inner font-sans">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-2.5 mb-3">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-amber-400" />
          <span className="font-bold text-white text-xs">Tablero de Control</span>
        </div>
        <span className="text-[10px] text-zinc-400">Mes actual</span>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-2">
        <div className="bg-zinc-900/90 p-2 rounded-lg border border-zinc-800">
          <span className="text-[10px] text-zinc-400">Ventas cerradas</span>
          <p className="text-base font-bold text-white mt-0.5">$148,500</p>
          <span className="text-[10px] text-emerald-400 font-semibold">+24% vs anterior</span>
        </div>
        <div className="bg-zinc-900/90 p-2 rounded-lg border border-zinc-800">
          <span className="text-[10px] text-zinc-400">Prospectos WA</span>
          <p className="text-base font-bold text-amber-400 mt-0.5">382 leads</p>
          <span className="text-[10px] text-zinc-400 font-medium">92% atendidos</span>
        </div>
      </div>
    </div>
  );
};
