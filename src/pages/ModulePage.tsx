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
  Sparkles,
  Activity,
  Footprints,
  HeartHandshake,
  Brain,
  Moon,
  BatteryCharging
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

  // Componente visual de escaneabilidade para a página de Sintomas
  const renderSymptomsScanner = () => (
    <div className="bg-white rounded-2xl border border-calm-border p-5 sm:p-6 space-y-4 shadow-soft">
      <div className="space-y-1">
        <span className="text-xs font-bold uppercase tracking-wider text-sage-800 flex items-center gap-1.5">
          <Activity className="w-4 h-4 text-sage-600" />
          Escaneabilidade Rápida dos Sintomas
        </span>
        <h3 className="text-base sm:text-lg font-bold text-brand-950">
          Como os sintomas costumam se manifestar:
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
        <div className="p-3.5 rounded-xl bg-brand-50/70 border border-brand-200/60 flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-brand-700 text-white flex items-center justify-center shrink-0 mt-0.5">
            <Activity className="w-4 h-4" />
          </div>
          <div className="space-y-0.5">
            <h4 className="text-xs font-bold text-brand-900">Dor Generalizada</h4>
            <p className="text-xs text-calm-muted leading-relaxed">
              Difusa pelos 4 quadrantes do corpo e coluna, oscilando com clima e estresse.
            </p>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-sage-50/80 border border-sage-200/70 flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-sage-600 text-white flex items-center justify-center shrink-0 mt-0.5">
            <Moon className="w-4 h-4" />
          </div>
          <div className="space-y-0.5">
            <h4 className="text-xs font-bold text-sage-900">Sono Não Reparador</h4>
            <p className="text-xs text-calm-muted leading-relaxed">
              Sensação de cansaço ao despertar devido à fragmentação do sono profundo.
            </p>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-warm-50/80 border border-warm-200/70 flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-warm-600 text-white flex items-center justify-center shrink-0 mt-0.5">
            <BatteryCharging className="w-4 h-4" />
          </div>
          <div className="space-y-0.5">
            <h4 className="text-xs font-bold text-warm-900">Fadiga Persistente</h4>
            <p className="text-xs text-calm-muted leading-relaxed">
              Sensação de esgotamento de energia desproporcional ao esforço realizado.
            </p>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-200 flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-stone-700 text-white flex items-center justify-center shrink-0 mt-0.5">
            <Brain className="w-4 h-4" />
          </div>
          <div className="space-y-0.5">
            <h4 className="text-xs font-bold text-stone-900">"Fibrofog" (Névoa Mental)</h4>
            <p className="text-xs text-calm-muted leading-relaxed">
              Lapsos passageiros de atenção e lentidão no raciocínio decorrentes da dor crônica.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  // Componente visual para a página de Fisioterapia e Movimento
  const renderMovementCycle = () => (
    <div className="bg-gradient-to-br from-sage-50/90 to-white rounded-2xl border border-sage-200 p-5 sm:p-6 space-y-4 shadow-soft">
      <div className="space-y-1">
        <span className="text-xs font-bold uppercase tracking-wider text-sage-800 flex items-center gap-1.5">
          <Footprints className="w-4 h-4 text-sage-600" />
          Abordagem Fisioterapêutica
        </span>
        <h3 className="text-base sm:text-lg font-bold text-sage-950">
          Quebrando o Ciclo Vicioso da Dor
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
        <div className="p-4 rounded-xl bg-white border border-warm-200 space-y-2">
          <span className="font-bold text-warm-700 uppercase tracking-wide flex items-center gap-1">
            ⚠️ O Ciclo da Inatividade
          </span>
          <p className="text-stone-600 leading-relaxed">
            Dor → Medo do Movimento (Cinesiofobia) → Repouso excessivo → Descondicionamento físico → Mais dor e rigidez.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-white border border-sage-200 space-y-2">
          <span className="font-bold text-sage-700 uppercase tracking-wide flex items-center gap-1">
            ✨ O Ciclo da Fisioterapia
          </span>
          <p className="text-stone-600 leading-relaxed">
            Movimento gradual dosado → Liberação de endorfinas analgésicas → Fortalecimento articular → Confiança e autonomia.
          </p>
        </div>
      </div>
    </div>
  );

  // Componente visual para Qualidade de Vida e Autocuidado
  const renderSelfCarePillars = () => (
    <div className="bg-white rounded-2xl border border-calm-border p-5 sm:p-6 space-y-4 shadow-soft">
      <div className="space-y-1">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-800 flex items-center gap-1.5">
          <HeartHandshake className="w-4 h-4 text-brand-600" />
          Pilares Diários do Autocuidado
        </span>
        <h3 className="text-base sm:text-lg font-bold text-brand-950">
          Estratégias práticas para incorporar à rotina
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
        <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5 text-center sm:text-left">
          <span className="inline-block p-1.5 rounded-lg bg-brand-100 text-brand-800 text-xs font-bold">
            1. Pacing
          </span>
          <h4 className="text-xs font-bold text-stone-900">Gestão de Energia</h4>
          <p className="text-[11px] text-calm-muted leading-relaxed">
            Fracione as tarefas e evite fazer tudo em um só dia.
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5 text-center sm:text-left">
          <span className="inline-block p-1.5 rounded-lg bg-sage-100 text-sage-800 text-xs font-bold">
            2. Descanso
          </span>
          <h4 className="text-xs font-bold text-stone-900">Higiene do Sono</h4>
          <p className="text-[11px] text-calm-muted leading-relaxed">
            Horários regulares e ambiente escuro para sono restaurador.
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5 text-center sm:text-left">
          <span className="inline-block p-1.5 rounded-lg bg-warm-100 text-warm-800 text-xs font-bold">
            3. Pausas
          </span>
          <h4 className="text-xs font-bold text-stone-900">Respiração Suave</h4>
          <p className="text-[11px] text-calm-muted leading-relaxed">
            Pausas curtas para relaxar a musculatura e aliviar o estresse.
          </p>
        </div>
      </div>
    </div>
  );

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

        <p className="text-sm sm:text-base text-brand-800 font-medium leading-relaxed">
          {currentModule.subtitle}
        </p>

        {/* Resumo do Módulo em destaque acolhedor */}
        <div className="bg-brand-50/60 border border-brand-200/70 rounded-2xl p-4 sm:p-5 text-sm sm:text-base text-calm-text leading-relaxed">
          {currentModule.summary}
        </div>
      </header>

      {/* Renderização contextual específica de cada tela para evitar repetição visual */}
      {moduleId === 'sintomas' && renderSymptomsScanner()}
      {moduleId === 'fisioterapia-movimento' && renderMovementCycle()}
      {moduleId === 'qualidade-de-vida' && renderSelfCarePillars()}

      {/* Seções de Conteúdo Editorial */}
      <section className="space-y-4">
        {currentModule.sections.map((section) => (
          <ContentSectionCard key={section.id} section={section} />
        ))}
      </section>

      {/* Caixa de Aprendizados-Chave */}
      <section className="bg-sage-50/80 border border-sage-200 rounded-2xl p-5 sm:p-6 space-y-3 shadow-soft">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-sage-700" />
          <h2 className="text-sm sm:text-base font-bold text-sage-950 uppercase tracking-wider">
            O que você deve levar deste tema
          </h2>
        </div>

        <ul className="space-y-2.5">
          {currentModule.keyTakeaways.map((takeaway, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-sage-900 leading-relaxed">
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
          className="text-brand-700 font-bold hover:underline shrink-0 text-left sm:text-right"
        >
          Ver Referências Completas
        </button>
      </div>

      {/* Navegação entre módulos (Trilha) */}
      <nav className="pt-4 border-t border-calm-border flex flex-col sm:flex-row items-center justify-between gap-3" aria-label="Navegação entre módulos">
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
