import React from 'react';
import { ContentSection } from '../../types';
import { Lightbulb, CheckCircle2, Bookmark } from 'lucide-react';
import { Badge } from '../common/Badge';

interface ContentSectionCardProps {
  section: ContentSection;
}

export const ContentSectionCard: React.FC<ContentSectionCardProps> = ({ section }) => {
  return (
    <article className="bg-white rounded-2xl border border-calm-border p-5 sm:p-6 shadow-soft space-y-4">
      <h3 className="text-lg sm:text-xl font-bold text-brand-900 tracking-tight leading-snug">
        {section.title}
      </h3>

      <div className="space-y-3 text-calm-text text-base leading-relaxed">
        {section.paragraphs.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>

      {section.highlight && (
        <div className="p-4 rounded-xl bg-brand-50/70 border-l-4 border-brand-700 flex items-start gap-3 my-3">
          <Lightbulb className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
          <p className="text-sm font-medium text-brand-950 leading-relaxed">
            {section.highlight}
          </p>
        </div>
      )}

      {section.tips && section.tips.length > 0 && (
        <div className="bg-sage-50/70 border border-sage-200/80 rounded-xl p-4 space-y-2 mt-3">
          <span className="text-xs font-bold uppercase tracking-wider text-sage-800 block">
            Orientações Práticas
          </span>
          <ul className="space-y-2">
            {section.tips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-sage-900 leading-snug">
                <CheckCircle2 className="w-4 h-4 text-sage-600 shrink-0 mt-0.5" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {section.scientificNote && (
        <div className="pt-2 flex items-center gap-1.5">
          <Badge variant="purple" size="sm">
            <Bookmark className="w-3 h-3 text-brand-700" />
            <span className="text-[11px] font-medium">{section.scientificNote}</span>
          </Badge>
        </div>
      )}
    </article>
  );
};
