import React, { useState } from 'react';
import { MythItem } from '../../types';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { 
  HelpCircle, 
  CheckCircle, 
  XCircle, 
  ArrowRight, 
  ArrowLeft, 
  RotateCcw, 
  Sparkles
} from 'lucide-react';

interface MythInteractiveViewerProps {
  myths: MythItem[];
}

export const MythInteractiveViewer: React.FC<MythInteractiveViewerProps> = ({ myths }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userGuesses, setUserGuesses] = useState<Record<string, boolean>>({});
  const [viewMode, setViewMode] = useState<'interactive' | 'list'>('interactive');

  const currentMyth = myths[currentIndex];
  const hasAnswered = userGuesses[currentMyth.id] !== undefined;
  const userGuess = userGuesses[currentMyth.id];
  const isCorrect = userGuess === currentMyth.isTruth;

  const handleGuess = (guess: boolean) => {
    setUserGuesses((prev) => ({
      ...prev,
      [currentMyth.id]: guess,
    }));
  };

  const handleNext = () => {
    if (currentIndex < myths.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setUserGuesses({});
    setCurrentIndex(0);
  };

  return (
    <div className="space-y-6">
      {/* Seletor de visualização (Interativo Passo a Passo vs Lista Completa) */}
      <div className="flex items-center justify-between border-b border-calm-border pb-3">
        <div className="flex items-center gap-2">
          <Badge variant="purple" size="md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{Object.keys(userGuesses).length} de {myths.length} explorados</span>
          </Badge>
        </div>

        <div className="inline-flex p-1 bg-stone-100 rounded-xl">
          <button
            onClick={() => setViewMode('interactive')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors min-h-[36px] ${
              viewMode === 'interactive'
                ? 'bg-white text-brand-900 shadow-sm'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Interativo
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors min-h-[36px] ${
              viewMode === 'list'
                ? 'bg-white text-brand-900 shadow-sm'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Lista Geral
          </button>
        </div>
      </div>

      {viewMode === 'interactive' ? (
        /* MODO INTERATIVO (PASSO A PASSO EDUCATIVO) */
        <div className="space-y-4">
          {/* Indicador de progresso */}
          <div className="flex items-center justify-between text-xs text-calm-muted px-1">
            <span className="font-semibold text-brand-900">
              Afirmação {currentIndex + 1} de {myths.length}
            </span>
            <span>Reflexão em Saúde</span>
          </div>

          <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-brand-700 h-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / myths.length) * 100}%` }}
            />
          </div>

          {/* Cartão da afirmação */}
          <div className="bg-white rounded-2xl border border-calm-border p-4.5 sm:p-6 shadow-soft space-y-5">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-500 uppercase tracking-wider">
                <HelpCircle className="w-4 h-4 text-brand-600" />
                O que você acha dessa frase?
              </span>
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-brand-950 leading-snug">
                "{currentMyth.statement}"
              </p>
            </div>

            {/* Opções de escolha se o usuário ainda não respondeu */}
            {!hasAnswered ? (
              <div className="pt-1 space-y-3">
                <p className="text-xs text-calm-muted">
                  Toque em uma das opções abaixo para revelar a evidência científica:
                </p>
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                  <button
                    onClick={() => handleGuess(false)}
                    className="flex flex-col items-center justify-center gap-1.5 p-3 sm:p-4 rounded-xl border-2 border-stone-200 bg-stone-50 hover:bg-warm-50 hover:border-warm-500 text-stone-800 hover:text-warm-800 font-bold transition-all min-h-[58px] active:scale-95 text-xs sm:text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-warm-600"
                    aria-label="Responder: É um Mito"
                  >
                    <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-warm-600 shrink-0" />
                    <span>É um MITO</span>
                  </button>

                  <button
                    onClick={() => handleGuess(true)}
                    className="flex flex-col items-center justify-center gap-1.5 p-3 sm:p-4 rounded-xl border-2 border-stone-200 bg-stone-50 hover:bg-sage-50 hover:border-sage-600 text-stone-800 hover:text-sage-800 font-bold transition-all min-h-[58px] active:scale-95 text-xs sm:text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-600"
                    aria-label="Responder: É uma Verdade"
                  >
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-sage-600 shrink-0" />
                    <span>É uma VERDADE</span>
                  </button>
                </div>
              </div>
            ) : (
              /* Revelação com feedback acolhedor */
              <div className="space-y-4 pt-2 animate-in fade-in duration-300">
                <div
                  className={`p-4 rounded-xl border flex items-start gap-3.5 ${
                    currentMyth.isTruth
                      ? 'bg-sage-50 border-sage-300 text-sage-950'
                      : 'bg-warm-50 border-warm-300 text-warm-950'
                  }`}
                >
                  {currentMyth.isTruth ? (
                    <CheckCircle className="w-6 h-6 text-sage-600 shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-6 h-6 text-warm-600 shrink-0 mt-0.5" />
                  )}

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-sm uppercase tracking-wide">
                        {currentMyth.isTruth ? '✅ É uma Verdade Científica!' : '❌ É um Mito Popular!'}
                      </span>
                    </div>
                    <p className="text-xs font-medium text-stone-700">
                      {isCorrect
                        ? 'Você acertou! Sua percepção está alinhada com as pesquisas.'
                        : 'Muitas pessoas pensam dessa forma, mas a ciência mostra outra realidade.'}
                    </p>
                  </div>
                </div>

                {/* Explicação detalhada */}
                <div className="bg-stone-50 rounded-xl p-4 border border-stone-200 space-y-3">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-stone-600 uppercase tracking-wider block">
                      Por que isso acontece?
                    </span>
                    <p className="text-sm text-calm-text leading-relaxed">
                      {currentMyth.explanation}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-stone-200/60 space-y-1">
                    <span className="text-xs font-semibold text-brand-800 block">
                      💡 Impacto no seu cuidado:
                    </span>
                    <p className="text-xs text-calm-muted leading-relaxed">
                      {currentMyth.practicalImpact}
                    </p>
                  </div>

                  <div className="pt-2">
                    <span className="text-[11px] text-stone-500 italic block">
                      Fonte: {currentMyth.scientificReference}
                    </span>
                  </div>
                </div>

                {/* Controles de navegação */}
                <div className="flex items-center justify-between gap-3 pt-2">
                  <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-stone-200 text-stone-700 font-semibold hover:bg-stone-100 disabled:opacity-30 disabled:cursor-not-allowed min-h-[48px]"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Anterior</span>
                  </button>

                  {currentIndex < myths.length - 1 ? (
                    <Button variant="primary" onClick={handleNext}>
                      <span>Próxima</span>
                      <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Button>
                  ) : (
                    <Button variant="secondary" onClick={handleReset}>
                      <RotateCcw className="w-4 h-4 mr-1.5" />
                      <span>Recomeçar</span>
                    </Button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* MODO LISTA GERAL (PARA CONSULTA RÁPIDA) */
        <div className="space-y-4">
          {myths.map((myth, idx) => (
            <div
              key={myth.id}
              className="bg-white rounded-2xl border border-calm-border p-5 shadow-soft space-y-3"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-xs font-semibold text-stone-400">
                  Item #{idx + 1}
                </span>
                <Badge variant={myth.isTruth ? 'sage' : 'warm'} size="sm">
                  {myth.isTruth ? 'Verdade' : 'Mito'}
                </Badge>
              </div>

              <h3 className="font-bold text-base text-brand-950">
                "{myth.statement}"
              </h3>

              <p className="text-sm text-calm-text leading-relaxed">
                {myth.explanation}
              </p>

              <div className="text-xs text-stone-500 pt-2 border-t border-stone-100">
                <em>Fonte: {myth.scientificReference}</em>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
