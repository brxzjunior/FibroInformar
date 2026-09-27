import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'De acordo com a literatura científica, qual é a origem principal da dor sentida na fibromialgia?',
    options: [
      { id: 'a', text: 'Uma inflamação grave e destrutiva nas articulações.', isCorrect: false },
      { id: 'b', text: 'Uma alteração no processamento da dor pelo sistema nervoso central (sensibilização central).', isCorrect: true },
      { id: 'c', text: 'Fraturas microscópicas e danos permanentes nos ossos.', isCorrect: false },
      { id: 'd', text: 'Apenas cansaço passageiro por falta de vitaminas.', isCorrect: false }
    ],
    explanation: 'A fibromialgia não causa inflamação tecidual nem danifica as articulações. Ela decorre de uma hipersensibilidade nas vias cerebrais que regulam os sinais de dor.',
    practicalTip: 'Entender isso tira o receio de que o corpo esteja se "quebrando" a cada episódio de dor.',
    source: 'Sociedade Brasileira de Reumatologia (SBR)'
  },
  {
    id: 'q2',
    question: 'Qual é o papel da Fisioterapia e do exercício físico no manejo da fibromialgia?',
    options: [
      { id: 'a', text: 'Devem ser totalmente evitados para não causar dor muscular.', isCorrect: false },
      { id: 'b', text: 'Devem ser feitos somente com alta intensidade até a exaustão.', isCorrect: false },
      { id: 'c', text: 'São recomendados de forma gradual e orientada para reeducar o corpo e liberar analgésicos naturais.', isCorrect: true },
      { id: 'd', text: 'Servem apenas para perda de peso rápida.', isCorrect: false }
    ],
    explanation: 'As diretrizes internacionais consideram o exercício físico supervisionado e a fisioterapia como a principal intervenção não medicamentosa para alívio duradouro dos sintomas.',
    practicalTip: 'O lema seguro da fisioterapia é "começar devagar e progredir aos poucos" (start low, go slow).',
    source: 'EULAR Guidelines on Fibromyalgia Management'
  },
  {
    id: 'q3',
    question: 'Por que o sono tem tanta influência sobre as dores de quem convive com fibromialgia?',
    options: [
      { id: 'a', text: 'O sono não tem relação comprovada com a percepção dolorosa.', isCorrect: false },
      { id: 'b', text: 'Durante as fases profundas do sono, o cérebro equilibra substâncias que inibem a dor.', isCorrect: true },
      { id: 'c', text: 'Dormir mais de 14 horas por dia cura a condição instantaneamente.', isCorrect: false },
      { id: 'd', text: 'Apenas a medicação para dormir elimina a dor.', isCorrect: false }
    ],
    explanation: 'Pessoas com fibromialgia sofrem interrupções no estágio de ondas lentas do sono. Melhorar a qualidade do descanso reduz a hipersensibilidade no dia seguinte.',
    practicalTip: 'Medidas simples como horário regular de dormir e ambiente escuro favorecem a recuperação neurológica.',
    source: 'American College of Rheumatology / Consenso em Medicina do Sono'
  },
  {
    id: 'q4',
    question: 'O que significa o termo "Fibrofog" (névoa mental) frequentemente relatado por pessoas com fibromialgia?',
    options: [
      { id: 'a', text: 'Uma perda permanente de memória associada a demência precoce.', isCorrect: false },
      { id: 'b', text: 'Episódios temporários de desatenção e lentidão de raciocínio decorrentes da fadiga e da dor persistente.', isCorrect: true },
      { id: 'c', text: 'Um sintoma contagioso que atinge a visão.', isCorrect: false },
      { id: 'd', text: 'Falta de interesse nas atividades cotidianas.', isCorrect: false }
    ],
    explanation: 'A sobrecarga que o cérebro tem ao lidar com sinais constantes de dor e a falta de sono restaurador pode causar pequenos lapsos temporários de concentração.',
    practicalTip: 'Usar anotações, listas de tarefas e pausas durante o dia ajuda a contornar esses momentos sem estresse.',
    source: 'Estudos em Neurociência da Dor e Cognição'
  },
  {
    id: 'q5',
    question: 'O que é a estratégia de ritmo e gestão de energia conhecida como "Pacing"?',
    options: [
      { id: 'a', text: 'Fazer tudo no mesmo dia em ritmo acelerado para terminar mais rápido.', isCorrect: false },
      { id: 'b', text: 'Permanecer imóvel na cama até não sentir nenhuma dor.', isCorrect: false },
      { id: 'c', text: 'Fracionar as atividades da semana com pausas programadas antes de chegar à exaustão.', isCorrect: true },
      { id: 'd', text: 'Comer alimentos energéticos antes de qualquer esforço.', isCorrect: false }
    ],
    explanation: 'O "pacing" evita o padrão nocivo de "pico e queda" (fazer demais nos dias bons e passar dias de cama depois), promovendo estabilidade de energia.',
    practicalTip: 'Fazer pausas de 5 a 10 minutos a cada bloco de tarefas preserva sua reserva de disposição.',
    source: 'Diretrizes de Terapia Ocupacional e Fisioterapia em Dor Crônica'
  },
  {
    id: 'q6',
    question: 'Em caso de dúvidas sobre sintomas, medicação ou exercícios, qual é a atitude correta?',
    options: [
      { id: 'a', text: 'Seguir receitas de redes sociais sem acompanhamento profissional.', isCorrect: false },
      { id: 'b', text: 'Interromper tratamentos sem avisar ninguém.', isCorrect: false },
      { id: 'c', text: 'Consultar profissionais de saúde qualificados (como médicos reumatologistas e fisioterapeutas).', isCorrect: true },
      { id: 'd', text: 'Utilizar aplicativos educativos como substituto de exames e diagnósticos.', isCorrect: false }
    ],
    explanation: 'Aplicativos educativos como o FibroInformar oferecem esclarecimento e autonomia, mas nunca substituem a avaliação individualizada de uma equipe de saúde.',
    practicalTip: 'Anote suas dúvidas para discuti-las com seu fisioterapeuta e médico na próxima consulta.',
    source: 'Comitê de Ética e Educação em Saúde'
  }
];
