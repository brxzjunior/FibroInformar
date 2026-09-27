import { EducationalModule } from '../types';

export const educationalModules: EducationalModule[] = [
  {
    id: 'entenda',
    route: '/entenda',
    title: 'Entenda a Fibromialgia',
    subtitle: 'O que é a condição, como o corpo processa a dor e por que ela é real.',
    category: 'fundamentos',
    iconName: 'Brain',
    estimatedMinutes: 3,
    summary: 'A fibromialgia é uma condição de saúde crônica caracterizada por dor difusa pelo corpo. Não se trata de uma inflamação articular, mas sim de uma alteração na forma como o sistema nervoso processa os sinais de dor.',
    sections: [
      {
        id: 'o-que-e',
        title: 'O que realmente acontece no corpo?',
        paragraphs: [
          'A fibromialgia é uma síndrome clínica caracterizada por dor musculoesquelética generalizada, frequentemente acompanhada de fadiga, sono não reparador e alterações no humor ou na memória.',
          'Imagine que o sistema de alarme de dor do organismo esteja com o "volume" regulado em um nível mais alto do que o habitual. Estímulos que normalmente não provocariam dor (como um toque suave ou uma leve pressão) podem ser sentidos com desconforto.'
        ],
        highlight: 'A dor da fibromialgia é legítima e real. Ela não é "psicológica" nem "invenção", embora fatores emocionais possam modular sua intensidade.',
        scientificNote: 'A literatura científica descreve essa alteração como "sensibilização central", um estado de hiperexcitabilidade das vias de condução da dor no sistema nervoso central.'
      },
      {
        id: 'diagnostico-visao',
        title: 'Como ela é identificada?',
        paragraphs: [
          'Não existe um exame de sangue ou de imagem que mostre a fibromialgia de forma direta. Por essa razão, exames são realizados pelo médico principalmente para descartar outras condições reumatológicas ou endócrinas.',
          'O diagnóstico é essencialmente clínico, baseado no histórico de dor persistente por mais de 3 meses em diferentes regiões do corpo e na presença de sintomas associados, como cansaço e distúrbios do sono.'
        ],
        tips: [
          'A confirmação deve sempre ser feita por um médico qualificado.',
          'Exames normais não significam ausência de problema, apenas confirmam que não há lesão tecidual ou inflamação destrutiva.'
        ]
      }
    ],
    keyTakeaways: [
      'A dor decorre de uma alteração no processamento sensorial no sistema nervoso.',
      'Não causa deformidades articulares nem lesões destrutivas nos tecidos.',
      'Compreender o mecanismo da dor é o primeiro passo para recuperar o controle da rotina.'
    ],
    nextModule: {
      title: 'Principais Sintomas',
      route: '/sintomas'
    },
    scientificSource: 'Sociedade Brasileira de Reumatologia (SBR) / Diretrizes Internacionais EULAR.'
  },
  {
    id: 'sintomas',
    route: '/sintomas',
    title: 'Principais Sintomas',
    subtitle: 'Conheça as manifestações mais comuns que vão além da dor física.',
    category: 'sintomas',
    iconName: 'Activity',
    estimatedMinutes: 4,
    summary: 'Embora a dor generalizada seja o sintoma mais conhecido, a fibromialgia costuma envolver uma constelação de sintomas que variam em intensidade de pessoa para pessoa e de um dia para outro.',
    sections: [
      {
        id: 'dor-generalizada',
        title: '1. Dor Musculoesquelética Generalizada',
        paragraphs: [
          'A dor costuma ser descrita como uma sensação de queimação, peso, pontada ou sensibilidade difusa. Ela atinge os dois lados do corpo, acima e abaixo da cintura, e ao longo da coluna vertebral.',
          'A intensidade pode flutuar dependendo do clima, do nível de estresse, da qualidade do sono e do esforço físico não dosado.'
        ]
      },
      {
        id: 'fadiga-sono',
        title: '2. Fadiga Persistente e Sono Não Reparador',
        paragraphs: [
          'A pessoa acorda com a sensação de não ter descansado, mesmo após muitas horas na cama. Isso ocorre porque os estágios mais profundos do sono (ondas lentas) sofrem interrupções involuntárias.',
          'A fadiga pode ser tanto física quanto mental, limitando a energia para atividades habituais do dia a dia.'
        ],
        highlight: 'Trabalhar a melhora do sono é uma das estratégias mais eficazes para reduzir os níveis de dor no dia seguinte.'
      },
      {
        id: 'fibrofog-outros',
        title: '3. "Fibrofog" e Outras Sensações',
        paragraphs: [
          'O termo popular "fibrofog" (névoa mental) refere-se a episódios temporários de desatenção, lentidão no raciocínio e pequenos esquecimentos. É uma manifestação benigna ligada à fadiga e à sobrecarga do processamento da dor.',
          'Também são comuns sintomas como rigidez matinal temporária, sensibilidade gastrointestinal, dores de cabeça tensionais e dormências passageiras.'
        ]
      }
    ],
    keyTakeaways: [
      'Os sintomas oscilam: dias melhores e dias mais sensíveis fazem parte do curso da condição.',
      'Cuidar do sono e do descanso restaurador é tão importante quanto o alívio muscular.',
      'A névoa mental é comum e não significa nenhuma doença neurodegenerativa.'
    ],
    nextModule: {
      title: 'Fisioterapia e Movimento',
      route: '/fisioterapia-movimento'
    },
    scientificSource: 'American College of Rheumatology (ACR) / Consenso Brasileiro de Fibromialgia.'
  },
  {
    id: 'fisioterapia-movimento',
    route: '/fisioterapia-movimento',
    title: 'Fisioterapia e Movimento',
    subtitle: 'Por que o movimento orientado é o tratamento não medicamentoso padrão-ouro.',
    category: 'fisioterapia',
    iconName: 'Footprints',
    estimatedMinutes: 4,
    summary: 'Ao contrário do que se pensava no passado, o repouso prolongado agrava os sintomas da fibromialgia. A Fisioterapia desempenha um papel central em reeducar o corpo, restaurar a confiança no movimento e modular a dor de forma natural.',
    sections: [
      {
        id: 'papel-fisioterapia',
        title: 'Como a Fisioterapia Atua?',
        paragraphs: [
          'O fisioterapeuta avalia as capacidades funcionais, o ritmo de dor e os limites individuais de cada pessoa para prescrever um plano de intervenção personalizado.',
          'Entre as abordagens terapêuticas com forte comprovação estão os exercícios aeróbios graduados, o fortalecimento muscular progressivo, a cinesioterapia, os alongamentos dinâmicos e a hidroterapia.'
        ],
        highlight: 'O exercício estimula a liberação de endorfinas, neurotransmissores naturais produzidos pelo organismo que atuam como analgésicos e promotores de bem-estar.'
      },
      {
        id: 'ciclo-dor-inatividade',
        title: 'Quebrando o Ciclo Dor-Repouso-Fraqueza',
        paragraphs: [
          'Quando sentimos dor, o impulso natural é parar de se mover (cinesiofobia: o medo do movimento). No entanto, o descondicionamento físico faz com que os músculos fiquem mais fracos e encurtados, gerando mais dor ao menor esforço.',
          'A fisioterapia ajuda a quebrar esse ciclo de forma suave e segura, respeitando o ritmo biológico sem sobrecarregar as articulações.'
        ],
        tips: [
          'Regra de ouro: comece devagar e aumente gradualmente (start low, go slow).',
          'A regularidade é mais importante do que a intensidade do treino.',
          'Um leve desconforto inicial pode ocorrer e é uma resposta de adaptação, não de lesão.'
        ]
      }
    ],
    keyTakeaways: [
      'O movimento orientado é considerado intervenção de primeira linha em todas as diretrizes científicas.',
      'Exercícios não lesionam o músculo do paciente com fibromialgia quando dosados corretamente.',
      'A supervisão de um profissional de fisioterapia assegura segurança e constância.'
    ],
    nextModule: {
      title: 'Qualidade de Vida e Autocuidado',
      route: '/qualidade-de-vida'
    },
    scientificSource: 'Diretrizes EULAR para Manejo da Fibromialgia / Associação Brasileira de Fisioterapia Traumato-Ortopédica (ABRAFITO).'
  },
  {
    id: 'qualidade-de-vida',
    route: '/qualidade-de-vida',
    title: 'Qualidade de Vida e Autocuidado',
    subtitle: 'Estratégias diárias, gestão de energia e hábitos para viver com autonomia.',
    category: 'autocuidado',
    iconName: 'HeartHandshake',
    estimatedMinutes: 3,
    summary: 'O autocuidado não é um luxo, mas uma necessidade terapêutica diária. Pequenos ajustes na rotina reduzem as crises de dor e devolvem o protagonismo ao paciente.',
    sections: [
      {
        id: 'gestao-energia',
        title: 'Ritmo e Gestão de Energia ("Pacing")',
        paragraphs: [
          'Muitas pessoas tendem a fazer todas as tarefas acumuladas nos "dias bons" e acabam gerando uma crise de exaustão no dia seguinte (padrão de pico e queda).',
          'A gestão de energia consiste em fracionar as tarefas ao longo da semana, intercalando períodos de atividade com pequenas pausas restauradoras antes que o cansaço extremo se instale.'
        ]
      },
      {
        id: 'higiene-sono-estresse',
        title: 'Higiene do Sono e Alívio do Estresse',
        paragraphs: [
          'Criar um ritual de sono consistente ajuda a treinar o cérebro para descansar. Evitar telas brilhantes próximo à hora de deitar, manter o quarto escuro e em temperatura agradável fazem grande diferença.',
          'Técnicas de respiração diafragmática, relaxamento muscular progressivo e práticas contemplativas ativam o sistema nervoso parassimpático, reduzindo o estado de tensão corporal.'
        ],
        tips: [
          'Estabeleça horários regulares para deitar e levantar.',
          'Aprenda a dizer "não" para sobrecargas não essenciais sem culpa.',
          'Mantenha uma rede de apoio aberta com amigos, familiares e equipe de saúde.'
        ]
      }
    ],
    keyTakeaways: [
      'Evite o ciclo de compensação excessiva nos dias em que a dor estiver mais branda.',
      'O descanso preventivo é parte ativa do tratamento.',
      'O autocuidado fortalece a autoconfiança no manejo da condição.'
    ],
    nextModule: {
      title: 'Mitos e Verdades',
      route: '/mitos-verdades'
    },
    scientificSource: 'Literatura Científica em Educação em Dor e Autocuidado / Consenso Multidisciplinar.'
  }
];
