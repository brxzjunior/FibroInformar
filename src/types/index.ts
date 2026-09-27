export interface ContentSection {
  id: string;
  title: string;
  paragraphs: string[];
  highlight?: string;
  tips?: string[];
  scientificNote?: string;
}

export interface EducationalModule {
  id: string;
  route: string;
  title: string;
  subtitle: string;
  category: 'fundamentos' | 'sintomas' | 'fisioterapia' | 'autocuidado';
  iconName: string;
  estimatedMinutes: number;
  summary: string;
  sections: ContentSection[];
  keyTakeaways: string[];
  nextModule?: {
    title: string;
    route: string;
  };
  scientificSource: string;
}

export interface MythItem {
  id: string;
  statement: string;
  isTruth: boolean;
  explanation: string;
  practicalImpact: string;
  scientificReference: string;
}

export interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
  explanation: string;
  practicalTip: string;
  source: string;
}

export interface AcademicReference {
  id: string;
  title: string;
  authors: string;
  journalOrEntity: string;
  year: string;
  type: 'Diretriz Clínica' | 'Artigo de Revisão' | 'Ensaio Clínico' | 'Material Educativo';
  doiOrUrl?: string;
  relevance: string;
}
