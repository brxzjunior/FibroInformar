import React, { useState } from 'react';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import { ArrowLeft, ShieldAlert, Sparkles } from 'lucide-react';
import { DisclaimerModal } from './DisclaimerModal';

const navLinks = [
  { to: '/', label: 'Início' },
  { to: '/menu', label: 'Módulos' },
  { to: '/mitos-verdades', label: 'Mitos & Verdades' },
  { to: '/quiz', label: 'Quiz' },
  { to: '/referencias', label: 'Fontes' },
];

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const isHome = location.pathname === '/';

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-calm-border/80 px-3 sm:px-6 py-2.5 sm:py-3 transition-all">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          {/* Lado esquerdo: Voltar + Identidade */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            {!isHome && (
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-1 px-2 py-1.5 rounded-xl text-brand-700 hover:bg-brand-50 active:bg-brand-100 transition-colors min-h-[44px] min-w-[44px]"
                aria-label="Voltar para a tela anterior"
              >
                <ArrowLeft className="w-5 h-5 text-brand-700" />
                <span className="text-xs sm:text-sm font-semibold hidden xs:inline">Voltar</span>
              </button>
            )}

            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 sm:gap-2.5 text-left group rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 p-1 -ml-1"
              aria-label="FibroInformar - Página inicial"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand-700 flex items-center justify-center text-white shadow-sm shadow-brand-700/25 group-hover:bg-brand-800 transition-colors shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-base sm:text-lg font-bold tracking-tight text-brand-900 block leading-tight">
                  Fibro<span className="text-sage-600">Informar</span>
                </span>
                <span className="text-[10px] sm:text-[11px] text-calm-muted block leading-none font-medium">
                  Educação & Fisioterapia
                </span>
              </div>
            </button>
          </div>

          {/* Centro: Navegação Desktop/Tablet (md+) */}
          <nav className="hidden md:flex items-center gap-1 bg-stone-100/80 p-1 rounded-xl" aria-label="Navegação de topo">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-white text-brand-800 shadow-sm'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-white/50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Lado direito: Botão de Aviso de Saúde */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowDisclaimer(true)}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl text-warm-700 bg-warm-50 border border-warm-200/90 hover:bg-warm-100/80 active:bg-warm-100 transition-colors min-h-[44px] shadow-sm select-none"
              aria-label="Aviso ético e finalidade educativa do aplicativo"
            >
              <ShieldAlert className="w-4 h-4 text-warm-600 shrink-0" />
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
