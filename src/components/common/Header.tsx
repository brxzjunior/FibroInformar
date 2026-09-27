import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, ShieldAlert, Sparkles } from 'lucide-react';
import { DisclaimerModal } from './DisclaimerModal';

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const isHome = location.pathname === '/';

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-calm-border/80 px-4 py-3 transition-all">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-2">
          {/* Lado esquerdo: Voltar ou Logo */}
          <div className="flex items-center gap-2">
            {!isHome ? (
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-brand-700 hover:bg-brand-50 active:bg-brand-100 transition-colors min-h-[44px] min-w-[44px]"
                aria-label="Voltar para a tela anterior"
              >
                <ArrowLeft className="w-5 h-5 text-brand-700" />
                <span className="text-sm font-semibold hidden xs:inline">Voltar</span>
              </button>
            ) : null}

            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2.5 text-left group rounded-lg focus:outline-none"
            >
              <div className="w-9 h-9 rounded-xl bg-brand-700 flex items-center justify-center text-white shadow-sm shadow-brand-700/30 group-hover:bg-brand-800 transition-colors">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-base sm:text-lg font-bold tracking-tight text-brand-900 block leading-tight">
                  Fibro<span className="text-sage-600">Informar</span>
                </span>
                <span className="text-[10px] text-calm-muted block leading-none font-medium">
                  Fisioterapia & Saúde
                </span>
              </div>
            </button>
          </div>

          {/* Lado direito: Botão de Aviso de Saúde */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowDisclaimer(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl text-warm-700 bg-warm-50 border border-warm-200 hover:bg-warm-100 transition-colors min-h-[44px]"
              aria-label="Informações sobre a finalidade educativa e aviso ético"
            >
              <ShieldAlert className="w-4 h-4 text-warm-600" />
              <span className="hidden sm:inline">Aviso de Saúde</span>
              <span className="sm:hidden">Aviso</span>
            </button>
          </div>
        </div>
      </header>

      <DisclaimerModal
        isOpen={showDisclaimer}
        onClose={() => setShowDisclaimer(false)}
      />
    </>
  );
};
