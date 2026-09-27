import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../common/Header';
import { BottomNav } from '../common/BottomNav';
import { Heart } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();

  // Rolar para o topo suavemente ao trocar de tela
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-calm-bg text-calm-text">
      <Header />

      <main className="flex-1 w-full max-w-4xl mx-auto px-3.5 sm:px-6 pt-4 pb-28 md:pb-12">
        {children}
      </main>

      {/* Rodapé informativo discreto */}
      <footer className="w-full bg-white border-t border-calm-border py-6 px-4 mb-16 md:mb-0 text-center text-xs text-calm-muted">
        <div className="max-w-xl mx-auto space-y-2">
          <p className="flex items-center justify-center gap-1.5 font-medium text-stone-700">
            <span>Desenvolvido com carinho para a saúde física</span>
            <Heart className="w-3.5 h-3.5 text-brand-600 fill-brand-600 inline" />
          </p>
          <p className="text-[11px] leading-relaxed">
            Projeto Acadêmico de Extensão em <strong>Fisioterapia</strong> • <strong>Universidade Nilton Lins</strong>
            <br />
            Orientação: <em>Prof. Luiz Henrique</em> • Elaboração: <em>Pablo e equipe</em>
          </p>
          <p className="text-[10px] text-stone-400">
            Conteúdo educativo baseado em evidências científicas. Não substitui consulta médica ou fisioterapêutica.
          </p>
        </div>
      </footer>

      <BottomNav />
    </div>
  );
};
