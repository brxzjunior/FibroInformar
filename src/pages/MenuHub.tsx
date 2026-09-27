import React from 'react';
import { useNavigate } from 'react-router-dom';
import { educationalModules } from '../data/modulesData';
import { 
  Brain, 
  Activity, 
  Footprints, 
  HeartHandshake, 
  HelpCircle, 
  Award, 
  FileText, 
  Clock, 
  ChevronRight
} from 'lucide-react';

export const MenuHub: React.FC = () => {
  const navigate = useNavigate();

  // Mapeamento dinâmico de ícones
  const getIcon = (name: string) => {
    switch (name) {
      case 'Brain':
        return <Brain className="w-6 h-6 text-brand-700" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-sage-600" />;
      case 'Footprints':
        return <Footprints className="w-6 h-6 text-brand-600" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-sage-700" />;
      default:
        return <Brain className="w-6 h-6 text-brand-700" />;
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Cabeçalho da página */}
      <div className="space-y-1.5 px-1">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-950 tracking-tight">
          Temas Educativos
        </h1>
        <p className="text-sm text-calm-muted">
          Escolha um tema para explorar no seu próprio tempo ou siga a ordem recomendada.
        </p>
      </div>

      {/* Grade de Módulos Educativos Principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {educationalModules.map((module, idx) => (
          <article
            key={module.id}
            onClick={() => navigate(module.route)}
            className="bg-white rounded-2xl border border-calm-border p-4.5 sm:p-5 shadow-soft hover:shadow-card hover:border-brand-300 transition-all cursor-pointer group flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(module.iconName)}
                  </div>
                  <span className="text-xs font-bold text-stone-400">
                    Módulo #{idx + 1}
                  </span>
                </div>

                <span className="text-xs text-stone-500 font-medium flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-stone-400" />
                  {module.estimatedMinutes} min
                </span>
              </div>

              <div>
                <h2 className="text-lg font-bold text-brand-950 group-hover:text-brand-700 transition-colors">
                  {module.title}
                </h2>
                <p className="text-xs font-medium text-brand-800/80 mt-0.5">
                  {module.subtitle}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-calm-muted leading-relaxed line-clamp-3">
                {module.summary}
              </p>
            </div>

            <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-brand-700 group-hover:text-brand-900">
              <span>Ler módulo</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </article>
        ))}
      </div>

      {/* Seção de Recursos Interativos e Científicos */}
      <div className="pt-4 space-y-3">
        <h2 className="text-lg font-bold text-brand-900 px-1">
          Atividades & Fontes
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Mitos e Verdades */}
          <button
            onClick={() => navigate('/mitos-verdades')}
            className="p-4 rounded-2xl bg-white border border-calm-border hover:border-warm-400 hover:shadow-soft text-left transition-all flex items-start gap-3 group"
          >
            <div className="w-9 h-9 rounded-xl bg-warm-100 text-warm-700 flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-stone-400 block">Interativo</span>
              <span className="text-sm font-bold text-stone-900 group-hover:text-warm-700 block">
                Mitos & Verdades
              </span>
              <span className="text-xs text-calm-muted">Afirmações populares</span>
            </div>
          </button>

          {/* Quiz */}
          <button
            onClick={() => navigate('/quiz')}
            className="p-4 rounded-2xl bg-white border border-calm-border hover:border-brand-400 hover:shadow-soft text-left transition-all flex items-start gap-3 group"
          >
            <div className="w-9 h-9 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-stone-400 block">Aprendizado</span>
              <span className="text-sm font-bold text-stone-900 group-hover:text-brand-700 block">
                Quiz Educativo
              </span>
              <span className="text-xs text-calm-muted">6 perguntas didáticas</span>
            </div>
          </button>

          {/* Referências */}
          <button
            onClick={() => navigate('/referencias')}
            className="p-4 rounded-2xl bg-white border border-calm-border hover:border-sage-400 hover:shadow-soft text-left transition-all flex items-start gap-3 group"
          >
            <div className="w-9 h-9 rounded-xl bg-sage-100 text-sage-700 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-stone-400 block">Transparência</span>
              <span className="text-sm font-bold text-stone-900 group-hover:text-sage-700 block">
                Referências
              </span>
              <span className="text-xs text-calm-muted">Diretrizes científicas</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
