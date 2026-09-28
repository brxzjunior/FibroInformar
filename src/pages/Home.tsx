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
      {/* Bloco Principal de Apresentação (Hero Humanizado) */}
      <section className="bg-gradient-to-br from-brand-50/90 via-white to-sage-50/60 rounded-3xl border border-calm-border p-5 sm:p-7 md:p-8 shadow-soft space-y-5">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="purple" size="sm">
            <Heart className="w-3.5 h-3.5 text-brand-600 fill-brand-600" />
            <span>Educação em Saúde</span>
          </Badge>
          <Badge variant="sage" size="sm">
            <span>Fisioterapia Baseada em Evidências</span>
          </Badge>
        </div>

        <div className="space-y-3 max-w-2xl">
          <h1 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-extrabold text-brand-950 tracking-tight leading-tight">
            Conhecer para cuidar e viver melhor com a fibromialgia.
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-calm-muted leading-relaxed">
            Uma abordagem serena e acessível para entender a neurofisiologia da dor, desmistificar crenças e descobrir o papel transformador da fisioterapia e do movimento consciente.
          </p>
        </div>

        {/* Chamadas para ação empilhadas no mobile e alinhadas em tablet/desktop */}
        <div className="pt-1 flex flex-col sm:flex-row gap-3 w-full">
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate('/entenda')}
            className="w-full sm:w-auto group justify-center"
          >
            <span>Começar pelo Módulo 1</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate('/menu')}
            className="w-full sm:w-auto justify-center"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            <span>Explorar Todos os Temas</span>
          </Button>
        </div>
      </section>

      {/* Cartão de Ponto de Partida Recomendado */}
      <section 
        onClick={() => navigate('/entenda')}
        className="bg-white rounded-2xl border-2 border-brand-200/80 p-5 sm:p-6 shadow-soft hover:shadow-card hover:border-brand-400 transition-all cursor-pointer group"
      >
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-600 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-brand-800">
                Ponto de Partida Recomendado
              </span>
            </div>
            <span className="text-xs text-stone-500 font-medium flex items-center gap-1 shrink-0">
              <Clock className="w-3.5 h-3.5 text-stone-400" /> 3 min de leitura
            </span>
          </div>

          <div className="space-y-1.5">
            <h2 className="text-lg sm:text-xl font-bold text-brand-950 group-hover:text-brand-700 transition-colors">
              Módulo 1: O que realmente é a Fibromialgia?
            </h2>
            <p className="text-xs sm:text-sm text-calm-muted leading-relaxed">
              Entenda como o sistema nervoso regula o "volume" dos sinais dolorosos e por que exames normais confirmam a ausência de lesão destrutiva, sem invalidar sua dor.
            </p>
          </div>

          <div className="pt-2 flex items-center justify-between border-t border-stone-100">
            <span className="text-xs font-semibold text-brand-700 flex items-center gap-1 group-hover:underline">
              <span>Iniciar leitura explicativa</span>
            </span>
            <div className="w-8 h-8 rounded-xl bg-brand-50 group-hover:bg-brand-100 text-brand-700 flex items-center justify-center transition-colors">
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* Experiências Interativas com Layouts Diferenciados */}
      <section className="space-y-3.5">
        <div className="px-1">
          <h2 className="text-base sm:text-lg font-bold text-brand-900">
            Experiências Interativas
          </h2>
          <p className="text-xs text-calm-muted">
            Recursos dinâmicos para refletir, testar conceitos e sedimentar o aprendizado.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Card Mitos & Verdades */}
          <article
            onClick={() => navigate('/mitos-verdades')}
            className="bg-white rounded-2xl border border-calm-border p-5 shadow-soft hover:shadow-card hover:border-warm-400 transition-all cursor-pointer group flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-warm-100 text-warm-700 flex items-center justify-center">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <Badge variant="warm" size="sm">
                  <span>6 Afirmações</span>
                </Badge>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-brand-950 group-hover:text-warm-700 transition-colors">
                  Mitos & Verdades
                </h3>
                <p className="text-xs sm:text-sm text-calm-muted leading-relaxed mt-1">
                  Repouso contínuo ajuda? A dor é apenas muscular? Descubra o que a ciência responde para as dúvidas mais comuns.
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-warm-700">
              <span>Opinar e conferir respostas</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </article>

          {/* Card Quiz Educativo */}
          <article
            onClick={() => navigate('/quiz')}
            className="bg-white rounded-2xl border border-calm-border p-5 shadow-soft hover:shadow-card hover:border-brand-400 transition-all cursor-pointer group flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <Badge variant="purple" size="sm">
                  <span>Com Feedback</span>
                </Badge>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-brand-950 group-hover:text-brand-700 transition-colors">
                  Quiz de Conhecimento
                </h3>
                <p className="text-xs sm:text-sm text-calm-muted leading-relaxed mt-1">
                  6 perguntas de múltipla escolha com explicações baseadas em diretrizes da reumatologia e fisioterapia.
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-brand-700">
              <span>Responder às perguntas</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </article>
        </div>
      </section>

      {/* Banner de Compromisso Acadêmico e Científico */}
      <section className="bg-sage-50/70 border border-sage-200/80 rounded-2xl p-5 sm:p-6 space-y-3">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-sage-600 shrink-0" />
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sage-900">
            Compromisso Acadêmico & Científico
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-sage-950 leading-relaxed">
          O <strong>FibroInformar</strong> é um projeto de extensão do curso de Fisioterapia da <strong>Universidade Nilton Lins</strong> (Orientação: Prof. Pablo Costa Cortez). Cada módulo traduz evidências científicas para uma linguagem simples e empática, valorizando a autonomia e o bem-estar.
        </p>

        <div className="pt-1">
          <button
            onClick={() => navigate('/referencias')}
            className="text-xs font-bold text-sage-800 hover:text-sage-900 hover:underline inline-flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-700 rounded-md py-1"
          >
            <span>Consultar referências bibliográficas do projeto</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>
    </div>
  );
};
