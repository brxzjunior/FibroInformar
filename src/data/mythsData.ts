import { MythItem } from '../types';

export const mythsData: MythItem[] = [
  {
    id: 'mito-1',
    statement: 'A fibromialgia é apenas uma inflamação ou dor nos músculos.',
    isTruth: false,
    explanation: 'A fibromialgia não é uma doença inflamatória e não lesiona as fibras musculares. Trata-se de uma desregulação no sistema nervoso central na interpretação e amplificação dos sinais de dor (sensibilização central).',
    practicalImpact: 'Saber disso ajuda a entender por que anti-inflamatórios comuns raramente aliviam a dor da fibromialgia e por que terapias neuromoduladoras e fisioterapia são prioritárias.',
    scientificReference: 'Sociedade Brasileira de Reumatologia (SBR) / Wolfe et al., Diretrizes Diagnósticas.'
  },
  {
    id: 'mito-2',
    statement: 'A atividade física e os exercícios orientados podem fazer parte do cuidado da fibromialgia.',
    isTruth: true,
    explanation: 'A prática regular de exercícios físicos supervisionados é uma das intervenções com maior nível de evidência científica no alívio da dor, melhora do sono e ganho de disposição.',
    practicalImpact: 'Exercícios graduais ajudam a regular o sistema de dor do cérebro através da liberação de substâncias analgésicas naturais.',
    scientificReference: 'EULAR - European League Against Rheumatism (Recomendações com Forte Nível de Evidência).'
  },
  {
    id: 'mito-3',
    statement: 'A dor da fibromialgia é fruto da imaginação ou "coisa da cabeça" do paciente.',
    isTruth: false,
    explanation: 'A dor é biologicamente real, neurofisiológica e mensurável por exames funcionais de neuroimagem. O cérebro realmente registra e processa uma carga excessiva de estímulos dolorosos.',
    practicalImpact: 'Reconhecer a legitimidade da condição remove o sentimento de culpa e combate o estigma social que muitos pacientes enfrentam.',
    scientificReference: 'Diretrizes Clínicas Globais de Dor Crônica / IASP (International Association for the Study of Pain).'
  },
  {
    id: 'mito-4',
    statement: 'Quem tem fibromialgia deve evitar se movimentar para não piorar o quadro.',
    isTruth: false,
    explanation: 'O repouso absoluto prolongado é prejudicial: ele leva à perda de massa muscular, enrijecimento das articulações e aumento da sensibilidade dolorosa (ciclo da cinesiofobia).',
    practicalImpact: 'O segredo é encontrar a dose certa de movimento guiada por um fisioterapeuta, começando com pouca carga e aumentando no próprio ritmo.',
    scientificReference: 'Consenso da Sociedade Brasileira de Fisioterapia Traumato-Ortopédica (ABRAFITO).'
  },
  {
    id: 'mito-5',
    statement: 'A qualidade do sono tem relação direta com a intensidade da dor sentida no dia seguinte.',
    isTruth: true,
    explanation: 'Durante as fases mais profundas do sono, o corpo repara tecidos e reequilibra os neurotransmissores que inibem a dor. Noites mal dormidas aumentam a sensibilidade à dor no dia seguinte.',
    practicalImpact: 'Adotar medidas de higiene do sono (quarto escuro, horários regulares, menos telas à noite) melhora o controle geral dos sintomas.',
    scientificReference: 'American College of Rheumatology / Estudos em Neurobiologia do Sono e Dor Crônica.'
  },
  {
    id: 'mito-6',
    statement: 'O tratamento da fibromialgia deve ser realizado exclusivamente com medicamentos.',
    isTruth: false,
    explanation: 'O tratamento mais eficaz é multidisciplinar e não farmacológico em sua base: fisioterapia, educação em saúde, exercícios físicos, psicoterapia e mudanças no estilo de vida são essenciais.',
    practicalImpact: 'Os medicamentos podem ser úteis para modular sintomas específicos sob orientação médica, mas não substituem o papel ativo do paciente e da reabilitação física.',
    scientificReference: 'Diretriz Clínica Multiprofissional para Fibromialgia.'
  }
];
