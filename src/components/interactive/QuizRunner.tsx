import React, { useState } from 'react';
import { QuizQuestion } from '../../types';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  RotateCcw, 
  Award, 
  BookOpen, 
  HeartHandshake,
  Lightbulb,
  Check
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface QuizRunnerProps {
  questions: QuizQuestion[];
}

export const QuizRunner: React.FC<QuizRunnerProps> = ({ questions }) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = questions[currentIndex];
  const total = questions.length;
  const isAnswered = selectedOptionId !== null;

  const handleSelectOption = (optionId: string) => {
    if (isAnswered) return; // Evita múltiplas respostas
    setSelectedOptionId(optionId);
    setAnswers((prev) => ({
      ...prev,
      [currentIndex]: optionId,
    }));
  };

  const handleNext = () => {
    if (currentIndex < total - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOptionId(null);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOptionId(null);
    setAnswers({});
    setIsFinished(false);
  };

  // Calcular pontuação final
  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, idx) => {
      const chosen = answers[idx];
      const correctOpt = q.options.find((opt) => opt.isCorrect);
      if (chosen === correctOpt?.id) {
        score++;
      }
    });
    return score;
  };

  const score = calculateScore();

  if (isFinished) {
    return (
      <div className="bg-white rounded-3xl border border-calm-border p-6 sm:p-8 shadow-card text-center space-y-6 max-w-xl mx-auto animate-in fade-in duration-300">
        <div className="w-16 h-16 rounded-2xl bg-brand-100 text-brand-700 flex items-center justify-center mx-auto shadow-sm">
          <Award className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <Badge variant="purple" size="md">
            Quiz Concluído
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-900 tracking-tight">
            Seu Resultado
          </h2>
          <p className="text-base text-calm-muted">
            Você acertou <strong className="text-brand-800 text-xl">{score}</strong> de <strong className="text-xl">{total}</strong> perguntas
          </p>
        </div>

        {/* Mensagem educativa humanizada */}
        <div className="p-4 rounded-2xl bg-brand-50 border border-brand-200/80 text-left text-sm space-y-2">
          <p className="font-semibold text-brand-950">
            {score >= 5
              ? '🌟 Parabéns! Excelente compreensão!'
              : score >= 3
              ? '👏 Muito bem! Você absorveu os conceitos essenciais!'
              : '🌱 Ótimo começo de aprendizado!'}
          </p>
          <p className="text-calm-text leading-relaxed">
            {score >= 5
              ? 'Você demonstrou clareza sobre o papel do movimento, da neurofisiologia da dor e da importância do autocuidado.'
              : 'O objetivo deste quiz é justamente transformar dúvidas comuns em conhecimento seguro para fortalecer sua autonomia e qualidade de vida.'}
          </p>
        </div>

        {/* Lembrete de saúde */}
        <div className="p-4 rounded-2xl bg-sage-50 border border-sage-200 text-left flex items-start gap-3">
          <HeartHandshake className="w-5 h-5 text-sage-600 shrink-0 mt-0.5" />
          <p className="text-xs text-sage-900 leading-relaxed">
            <strong>Lembrete importante:</strong> Continue conversando com sua equipe de Fisioterapia e seu médico reumatologista para adaptar cada orientação à sua rotina individual.
          </p>
        </div>

        {/* Ações */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="outline" onClick={handleRestart} className="gap-2">
            <RotateCcw className="w-4 h-4" />
            <span>Refazer o Quiz</span>
          </Button>

          <Button variant="primary" onClick={() => navigate('/menu')} className="gap-2">
            <BookOpen className="w-4 h-4" />
            <span>Rever Módulos</span>
          </Button>
        </div>
      </div>
    );
  }

  const selectedOption = currentQ.options.find((opt) => opt.id === selectedOptionId);
  const isSelectedCorrect = selectedOption?.isCorrect;

  return (
    <div className="max-w-xl mx-auto space-y-5">
      {/* Progresso com barra suave */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs font-semibold px-1">
          <span className="text-brand-900">
            Pergunta {currentIndex + 1} de {total}
          </span>
          <span className="text-calm-muted">
            {Math.round(((currentIndex + 1) / total) * 100)}% concluído
          </span>
        </div>
        <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
          <div
            className="bg-brand-700 h-full transition-all duration-300 rounded-full"
            style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
          />
        </div>
      </div>

      {/* Cartão da Pergunta */}
      <div className="bg-white rounded-3xl border border-calm-border p-6 shadow-soft space-y-6">
        <h2 className="text-lg sm:text-xl font-bold text-brand-950 leading-snug">
          {currentQ.question}
        </h2>

        {/* Alternativas */}
        <div className="space-y-3" role="radiogroup" aria-label="Opções de resposta">
          {currentQ.options.map((option, idx) => {
            const letter = String.fromCharCode(65 + idx); // A, B, C, D
            const isChosen = selectedOptionId === option.id;

            let optionStyle = 'border-stone-200 bg-stone-50 hover:bg-stone-100 text-calm-text';

            if (isAnswered) {
              if (option.isCorrect) {
                optionStyle = 'border-sage-500 bg-sage-50 text-sage-950 font-semibold ring-2 ring-sage-500/20';
              } else if (isChosen && !option.isCorrect) {
                optionStyle = 'border-warm-500 bg-warm-50 text-warm-950 font-semibold';
              } else {
                optionStyle = 'border-stone-100 bg-stone-50/50 text-stone-400 opacity-60';
              }
            }

            return (
              <button
                key={option.id}
                onClick={() => handleSelectOption(option.id)}
                disabled={isAnswered}
                role="radio"
                aria-checked={isChosen}
                className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-start gap-3.5 min-h-[54px] select-none ${optionStyle} ${
                  !isAnswered ? 'active:scale-[0.99]' : ''
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                    isAnswered && option.isCorrect
                      ? 'bg-sage-600 text-white'
                      : isAnswered && isChosen && !option.isCorrect
                      ? 'bg-warm-600 text-white'
                      : 'bg-stone-200 text-stone-700'
                  }`}
                >
                  {isAnswered && option.isCorrect ? (
                    <Check className="w-4 h-4 stroke-[3]" />
                  ) : (
                    letter
                  )}
                </div>

                <span className="text-sm sm:text-base leading-snug pt-0.5 flex-1">
                  {option.text}
                </span>
              </button>
            );
          })}
        </div>

        {/* Bloco de feedback didático após responder */}
        {isAnswered && (
          <div className="space-y-4 pt-2 border-t border-stone-100 animate-in fade-in duration-300">
            <div
              className={`p-4 rounded-2xl border flex items-start gap-3 ${
                isSelectedCorrect
                  ? 'bg-sage-50 border-sage-300 text-sage-950'
                  : 'bg-warm-50 border-warm-300 text-warm-950'
              }`}
            >
              {isSelectedCorrect ? (
                <CheckCircle2 className="w-5 h-5 text-sage-600 shrink-0 mt-0.5" />
              ) : (
                <XCircle className="w-5 h-5 text-warm-600 shrink-0 mt-0.5" />
              )}
              <div className="space-y-1">
                <span className="font-bold text-sm block">
                  {isSelectedCorrect ? 'Muito bem! Resposta correta.' : 'Ops! Não é bem essa a resposta.'}
                </span>
                <p className="text-xs sm:text-sm leading-relaxed">
                  {currentQ.explanation}
                </p>
              </div>
            </div>

            {/* Dica Prática */}
            <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200/80 space-y-1.5">
              <span className="text-xs font-bold text-brand-900 uppercase tracking-wider flex items-center gap-1.5">
                <Lightbulb className="w-4 h-4 text-brand-700" />
                Dica para o dia a dia
              </span>
              <p className="text-xs sm:text-sm text-calm-muted leading-relaxed">
                {currentQ.practicalTip}
              </p>
              <div className="pt-2 text-[11px] text-stone-500 italic">
                Fonte: {currentQ.source}
              </div>
            </div>

            {/* Botão de Próxima Pergunta */}
            <div className="pt-2">
              <Button fullWidth variant="primary" onClick={handleNext}>
                <span>
                  {currentIndex < total - 1 ? 'Próxima Pergunta' : 'Ver Resultado do Quiz'}
                </span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
