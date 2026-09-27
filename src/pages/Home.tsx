import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  BookOpen, 
  HelpCircle, 
  Award, 
  Clock, 
  ShieldCheck, 
  Heart,
  ChevronRight
} from 'lucide-react';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      {/* Bloco de Acolhimento Humanizado */}
      <section className="bg-gradient-to-br from-brand-50 via-white to-sage-50/50 rounded-3xl border border-calm-border p-6 sm:p-8 shadow-soft space-y-5">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="purple" size="sm">
            <Heart className="w-3.5 h-3.5 text-brand-600 fill-brand-600" />
            <span>Educação em Saúde</span>
          </Badge>
          <Badge variant="sage" size="sm">
            <span>Fisioterapia Baseada em Evidências</span>
          </Badge>
        </div>

        <div className="space-y-2.5 max-w-2xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-950 tracking-tight leading-tight">
            Conhecer para cuidar e viver melhor com a fibromialgia.
          </h1>
          <p className="text-base sm:text-lg text-calm-muted leading-relaxed">
            Uma abordagem serena e acessível para entender a dor, desmistificar crenças e descobrir o papel transformador da fisioterapia e do movimento consciente.
          </p>
        </div>

        {/* Chamada para ação orientada à trilha ou exploração */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate('/entenda')}
            className="group"
          >
            <span>Iniciar Trilha de Aprendizado</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate('/menu')}
          >
            <BookOpen className="w-5 h-5 mr-2" />
            <span>Ver Todos os Temas</span>
          </Button>
        </div>
      </section>

      {/* Cartão de Primeiro Passo Recomendado */}
      <section className="bg-white rounded-2xl border border-calm-border p-5 sm:p-6 shadow-soft space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-sage-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-calm-muted">
              Ponto de Partida
            </span>
          </div>
          <span className="text-xs text-stone-500 flex items-center gap-1 font-medium">
            <Clock className="w-3.5 h-3.5" /> 3 minutos de leitura
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-brand-900">
              O que realmente é a Fibromialgia?
            </h2>
            <p className="text-sm text-calm-muted leading-relaxed max-w-xl">
              Entenda como o cérebro processa os sinais de dor e por que os exames laboratoriais normais não anulam o que você sente.
            </p>
          </div>

          <button
            onClick={() => navigate('/entenda')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-50 hover:bg-brand-100 text-brand-900 font-semibold text-sm transition-colors min-h-[48px] shrink-0"
          >
            <span>Ler Módulo 1</span>
            <ChevronRight className="w-4 h-4 text-brand-700" />
          </button>
        </div>
      </section>

      {/* Trilha de Experiências Práticas e Interativas */}
      <section className="space-y-4">
        <div className="px-1">
          <h2 className="text-lg font-bold text-brand-900">
            Experiências Interativas
          </h2>
          <p className="text-xs text-calm-muted">
            Pratique, teste conceitos e tire dúvidas comuns de forma rápida.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Card Mitos e Verdades */}
          <div
            onClick={() => navigate('/mitos-verdades')}
            className="bg-white rounded-2xl border border-calm-border p-5 shadow-soft hover:shadow-card hover:border-brand-300 transition-all cursor-pointer group space-y-3 flex flex-col justify-between"
          >
            <div className="space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-warm-100 text-warm-700 flex items-center justify-center">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-brand-950 group-hover:text-brand-700 transition-colors">
                Mitos & Verdades
              </h3>
              <p className="text-sm text-calm-muted leading-relaxed">
                "Repouso absoluto faz bem?" "A dor é imaginação?" Teste seus conhecimentos contra os mitos mais comuns.
              </p>
            </div>

            <div className="pt-2 flex items-center text-sm font-semibold text-warm-700 group-hover:translate-x-0.5 transition-transform">
              <span>Explorar afirmações</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </div>
          </div>

          {/* Card Quiz Educativo */}
          <div
            onClick={() => navigate('/quiz')}
            className="bg-white rounded-2xl border border-calm-border p-5 shadow-soft hover:shadow-card hover:border-brand-300 transition-all cursor-pointer group space-y-3 flex flex-col justify-between"
          >
            <div className="space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-brand-950 group-hover:text-brand-700 transition-colors">
                Quiz Educativo
              </h3>
              <p className="text-sm text-calm-muted leading-relaxed">
                6 perguntas didáticas com feedback imediato e explicações baseadas nas diretrizes científicas.
              </p>
            </div>

            <div className="pt-2 flex items-center text-sm font-semibold text-brand-700 group-hover:translate-x-0.5 transition-transform">
              <span>Fazer o Quiz</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </div>
          </div>
        </div>
      </section>

      {/* Pilar Científico e Acadêmico */}
      <section className="bg-sage-50/70 border border-sage-200/80 rounded-2xl p-5 sm:p-6 space-y-3">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-sage-600" />
          <h2 className="text-sm font-bold uppercase tracking-wider text-sage-900">
            Compromisso Ético & Científico
          </h2>
        </div>

        <p className="text-sm text-sage-950 leading-relaxed">
          O <strong>FibroInformar</strong> é fruto de uma iniciativa acadêmica do curso de Fisioterapia da <strong>Universidade Nilton Lins</strong> (Orientação: Prof. Luiz Henrique). Cada tópico foi formulado para simplificar conceitos científicos complexos, respeitando o ritmo e a sensibilidade de quem convive com dor crônica.
        </p>

        <div className="pt-1">
          <button
            onClick={() => navigate('/referencias')}
            className="text-xs font-bold text-sage-800 hover:text-sage-900 underline flex items-center gap-1"
          >
            <span>Consultar referências bibliográficas do projeto</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>
    </div>
  );
};
