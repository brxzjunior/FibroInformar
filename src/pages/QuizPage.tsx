import React from 'react';
import { quizQuestions } from '../data/quizData';
import { QuizRunner } from '../components/interactive/QuizRunner';
import { Badge } from '../components/common/Badge';
import { Award } from 'lucide-react';

export const QuizPage: React.FC = () => {
  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      {/* Cabeçalho */}
      <header className="space-y-2.5 px-1 max-w-xl mx-auto text-center sm:text-left">
        <div className="flex justify-center sm:justify-start">
          <Badge variant="purple" size="sm">
            <Award className="w-3.5 h-3.5 text-brand-700" />
            <span>Aprendizado e Autoconhecimento</span>
          </Badge>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-950 tracking-tight">
          Quiz Educativo
        </h1>

        <p className="text-sm sm:text-base text-calm-muted leading-relaxed">
          Responda com tranquilidade. Cada pergunta conta com uma explicação didática fundamentada nas diretrizes de saúde e fisioterapia.
        </p>
      </header>

      {/* Mecanismo do Quiz */}
      <QuizRunner questions={quizQuestions} />
    </div>
  );
};
