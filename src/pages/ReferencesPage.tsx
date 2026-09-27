import React from 'react';
import { academicReferences } from '../data/referencesData';
import { Badge } from '../components/common/Badge';
import { 
  ExternalLink, 
  GraduationCap, 
  ShieldCheck, 
  BookOpen
} from 'lucide-react';

export const ReferencesPage: React.FC = () => {
  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      {/* Cabeçalho */}
      <header className="space-y-2.5 px-1">
        <Badge variant="purple" size="sm">
          <GraduationCap className="w-3.5 h-3.5 text-brand-700" />
          <span>Transparência Científica</span>
        </Badge>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-950 tracking-tight">
          Referências Bibliográficas
        </h1>

        <p className="text-base text-calm-muted leading-relaxed max-w-2xl">
          Todo o conteúdo do FibroInformar é construído a partir de consensos clínicos, diretrizes reumatológicas e revisões sistemáticas da literatura internacional e brasileira.
        </p>
      </header>

      {/* Nota do Projeto Acadêmico */}
      <div className="bg-brand-50/70 border border-brand-200/80 rounded-2xl p-5 space-y-2">
        <h2 className="text-sm font-bold text-brand-900 flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-brand-700" />
          Projeto de Extensão em Fisioterapia
        </h2>
        <p className="text-xs sm:text-sm text-calm-text leading-relaxed">
          Esta plataforma integra as atividades acadêmicas desenvolvidas junto à <strong>Universidade Nilton Lins</strong>, sob a orientação do <strong>Prof. Luiz Henrique</strong>. A inteligência artificial foi utilizada estritamente como suporte técnico de engenharia de software e UX/UI; as diretrizes clínicas e conceituais provêm da literatura especializada.
        </p>
      </div>

      {/* Lista de Referências Científicas */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-brand-900 px-1">
          Fontes Utilizadas na Elaboração dos Módulos
        </h2>

        <div className="space-y-3.5">
          {academicReferences.map((ref, idx) => (
            <article
              key={ref.id}
              className="bg-white rounded-2xl border border-calm-border p-4 sm:p-5 shadow-soft space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <Badge variant={ref.type === 'Diretriz Clínica' ? 'purple' : 'sage'} size="sm">
                  {ref.type}
                </Badge>
                <span className="text-xs text-stone-400 font-semibold">
                  Ref. #{idx + 1} • {ref.year}
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="font-bold text-base sm:text-lg text-brand-950 leading-snug break-words">
                  {ref.title}
                </h3>
                <p className="text-xs text-stone-600 font-medium">
                  {ref.authors}
                </p>
                <p className="text-xs text-calm-muted italic">
                  {ref.journalOrEntity}
                </p>
              </div>

              <div className="bg-stone-50 rounded-xl p-3 border border-stone-200/60 text-xs text-calm-text leading-relaxed">
                <strong>Por que esta referência é relevante:</strong> {ref.relevance}
              </div>

              {ref.doiOrUrl && (
                <div className="pt-1">
                  <a
                    href={ref.doiOrUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-700 hover:text-brand-900 hover:underline min-h-[44px] py-1"
                    aria-label={`Acessar publicação externa: ${ref.title}`}
                  >
                    <span>Acessar fonte / DOI</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Orientação Final para Consulta com Profissionais de Saúde */}
      <section className="bg-warm-50/80 border border-warm-200 rounded-2xl p-5 sm:p-6 space-y-3">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-warm-700" />
          <h2 className="text-base font-bold text-warm-900">
            Orientação Final ao Usuário
          </h2>
        </div>

        <p className="text-sm text-warm-950 leading-relaxed">
          Nenhuma leitura ou teste em aplicativo substitui o exame físico minucioso e o acompanhamento regular por um médico reumatologista e um fisioterapeuta. Se você sente dores persistentes, procure a Unidade Básica de Saúde (UBS) ou um serviço especializado em sua região para receber um plano de cuidado individualizado.
        </p>
      </section>
    </div>
  );
};
