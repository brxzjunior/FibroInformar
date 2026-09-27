import React from 'react';
import { useNavigate } from 'react-router-dom';
import { mythsData } from '../data/mythsData';
import { MythInteractiveViewer } from '../components/interactive/MythInteractiveViewer';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { HelpCircle, ArrowRight, BookOpen } from 'lucide-react';

export const MythsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      {/* Cabeçalho */}
      <header className="space-y-2.5 px-1">
        <Badge variant="warm" size="sm">
          <HelpCircle className="w-3.5 h-3.5 text-warm-700" />
          <span>Desmistificando a Condição</span>
        </Badge>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-950 tracking-tight">
          Mitos e Verdades
        </h1>

        <p className="text-base text-calm-muted leading-relaxed max-w-2xl">
          Muitas crenças antigas sobre a fibromialgia geram medo do movimento e sentimentos de frustração. Avalie cada afirmação abaixo e confira o que a ciência realmente descobriu.
        </p>
      </header>

      {/* Componente Interativo de Mitos */}
      <MythInteractiveViewer myths={mythsData} />

      {/* Rodapé de navegação para o Quiz */}
      <div className="pt-6 border-t border-calm-border flex flex-col sm:flex-row items-center justify-between gap-3">
        <button
          onClick={() => navigate('/menu')}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-stone-200 text-stone-700 font-semibold text-sm hover:bg-stone-50 min-h-[48px]"
        >
          <BookOpen className="w-4 h-4" />
          <span>Voltar aos Módulos</span>
        </button>

        <Button
          variant="primary"
          onClick={() => navigate('/quiz')}
          className="w-full sm:w-auto"
        >
          <span>Fazer o Quiz Educativo</span>
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};
