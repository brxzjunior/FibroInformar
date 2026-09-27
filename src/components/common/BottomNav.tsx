import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, BookOpen, HelpCircle, Award, FileText } from 'lucide-react';

interface NavItem {
  to: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { to: '/', label: 'Início', icon: Home },
  { to: '/menu', label: 'Módulos', icon: BookOpen },
  { to: '/mitos-verdades', label: 'Mitos', icon: HelpCircle },
  { to: '/quiz', label: 'Quiz', icon: Award },
  { to: '/referencias', label: 'Fontes', icon: FileText },
];

export const BottomNav: React.FC = () => {
  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-calm-border safe-pb shadow-card"
      aria-label="Navegação Inferior Mobile"
    >
      <div className="max-w-md mx-auto flex items-center justify-around px-2 py-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center flex-1 py-1.5 px-1 rounded-xl transition-all min-h-[48px] select-none ${
                  isActive
                    ? 'text-brand-700 font-bold bg-brand-50/80 scale-[1.02]'
                    : 'text-calm-muted hover:text-calm-text active:bg-stone-50 font-medium'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div className={`p-1 rounded-lg transition-colors ${isActive ? 'text-brand-700' : 'text-stone-500'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[11px] leading-tight ${isActive ? 'text-brand-800 font-semibold' : 'text-stone-600'}`}>
                    {item.label}
                  </span>
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};
