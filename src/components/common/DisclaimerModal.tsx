import React, { useEffect } from 'react';
import { AlertCircle, X, ShieldCheck, HeartHandshake } from 'lucide-react';
import { Button } from './Button';

interface DisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DisclaimerModal: React.FC<DisclaimerModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
    >
      <div
        className="w-full max-w-lg bg-white rounded-2xl shadow-elevated border border-calm-border p-6 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 id="disclaimer-title" className="text-xl font-bold text-brand-900">
                Aviso de Saúde e Ética
              </h2>
              <p className="text-xs text-calm-muted">Finalidade exclusivamente educativa</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar aviso de saúde"
            className="w-10 h-10 flex items-center justify-center rounded-xl text-stone-500 hover:bg-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 text-calm-text text-sm leading-relaxed">
          <div className="p-3.5 bg-warm-50 border border-warm-200 rounded-xl flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-warm-600 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-warm-900 leading-relaxed font-medium">
              Este aplicativo possui finalidade educativa e não substitui avaliação, diagnóstico ou acompanhamento realizado por profissionais de saúde.
            </p>
          </div>

          <p className="text-xs sm:text-sm">
            O <strong>FibroInformar</strong> tem por objetivo facilitar o acesso a informações claras e baseadas em literatura científica sobre a fibromialgia, promovendo o entendimento e o autocuidado.
          </p>

          <div className="border-t border-stone-100 pt-3">
            <h3 className="font-semibold text-brand-900 text-sm mb-1.5 flex items-center gap-1.5">
              <HeartHandshake className="w-4 h-4 text-sage-600" />
              Contexto Acadêmico
            </h3>
            <p className="text-xs text-calm-muted leading-relaxed">
              Este projeto faz parte de uma atividade acadêmica de extensão do curso de <strong>Fisioterapia</strong> da <strong>Universidade Nilton Lins</strong>, sob orientação do <strong>Prof. Pablo Costa Cortez</strong>. Os conteúdos são baseados em diretrizes e artigos científicos revisados pela equipe.
            </p>
          </div>

          <div className="bg-sage-50 border border-sage-200 p-3 rounded-xl text-xs text-sage-800">
            Se você apresenta dores persistentes, fadiga inexplicada ou suspeita de fibromialgia, agende uma consulta com um médico reumatologista e busque atendimento com um fisioterapeuta.
          </div>
        </div>

        <div className="mt-6">
          <Button fullWidth variant="primary" onClick={onClose}>
            Compreendi as Orientações
          </Button>
        </div>
      </div>
    </div>
  );
};
