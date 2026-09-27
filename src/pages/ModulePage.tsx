import React from 'react';
import { useNavigate } from 'react-router-dom';
import { educationalModules } from '../data/modulesData';
import { ContentSectionCard } from '../components/layout/ContentSectionCard';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { 
  Clock, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Bookmark, 
  Sparkles
} from 'lucide-react';

interface ModulePageProps {
  moduleId: string;
}

export const ModulePage: React.FC<ModulePageProps> = ({ moduleId }) => {
  const navigate = useNavigate();

  const currentModule = educationalModules.find((m) => m.id === moduleId);

  if (!currentModule) {
    return (
      <div className="text-center py-12 space-y-4">
        <h1 className="text-xl font-bold text-brand-900">Módulo não encontrado</h1>
        <Button variant="primary" onClick={() => navigate('/menu')}>
          Voltar para o Menu
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      {/* Cabeçalho do Módulo */}
      <header className="space-y-3 px-1">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="purple" size="sm">
            <span>Educação em Fisioterapia</span>
          </Badge>
          <span className="text-xs text-stone-500 font-medium flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-stone-400" />
            {currentModule.estimatedMinutes} min de leitura
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-950 tracking-tight leading-tight">
          {currentModule.title}
        </h1>

        <p className="text-base text-brand-800 font-medium leading-relaxed">
          {currentModule.subtitle}
        </p>

        {/* Resumo do Módulo em destaque acolhedor */}
        <div className="bg-brand-50/60 border border-brand-200/70 rounded-2xl p-4 sm:p-5 text-sm sm:text-base text-calm-text leading-relaxed">
          {currentModule.summary}
        </div>
      </header>

      {/* Seções de Conteúdo */}
      <section className="space-y-4">
        {currentModule.sections.map((section) => (
          <ContentSectionCard key={section.id} section={section} />
        ))}
      </section>

      {/* Caixa de Aprendizados-Chave */}
      <section className="bg-sage-50/80 border border-sage-200 rounded-2xl p-5 sm:p-6 space-y-3 shadow-soft">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-sage-700" />
          <h2 className="text-base font-bold text-sage-950 uppercase tracking-wider">
            O que você deve levar deste tema
          </h2>
        </div>

        <ul className="space-y-2.5">
          {currentModule.keyTakeaways.map((takeaway, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-sm text-sage-900 leading-relaxed">
              <CheckCircle2 className="w-4 h-4 text-sage-600 shrink-0 mt-0.5" />
              <span>{takeaway}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Referência da literatura científica deste módulo */}
      <div className="bg-white rounded-2xl border border-calm-border p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-calm-muted">
        <div className="flex items-center gap-2">
          <Bookmark className="w-4 h-4 text-brand-600 shrink-0" />
          <span>
            <strong>Embasamento científico:</strong> {currentModule.scientificSource}
          </span>
        </div>
        <button
          onClick={() => navigate('/referencias')}
          className="text-brand-700 font-bold hover:underline shrink-0"
        >
          Ver Referências Completas
        </button>
      </div>

      {/* Navegação entre módulos (Trilha) */}
      <nav className="pt-4 border-t border-calm-border flex flex-col sm:flex-row items-center justify-between gap-3">
        <button
          onClick={() => navigate('/menu')}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-stone-200 text-stone-700 font-semibold text-sm hover:bg-stone-50 min-h-[48px]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Ver Outros Módulos</span>
        </button>

        {currentModule.nextModule ? (
          <Button
            variant="primary"
            onClick={() => navigate(currentModule.nextModule!.route)}
            className="w-full sm:w-auto"
          >
            <span>Próximo: {currentModule.nextModule.title}</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        ) : (
          <Button
            variant="secondary"
            onClick={() => navigate('/mitos-verdades')}
            className="w-full sm:w-auto"
          >
            <span>Explorar Mitos & Verdades</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        )}
      </nav>
    </div>
  );
};
