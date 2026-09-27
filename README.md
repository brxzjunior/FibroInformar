# 🩺 FibroInformar — Conhecendo a Fibromialgia

Aplicativo educativo desenvolvido com foco em **informação e educação em saúde sobre a fibromialgia**, apresentando conteúdos de forma simples, acessível e interativa.

O projeto busca transformar informações provenientes de literatura científica em uma experiência digital mais clara e fácil de consultar, utilizando recursos visuais e interativos para auxiliar na compreensão do tema.

> ⚠️ O conteúdo apresentado possui finalidade educativa e não substitui avaliação, diagnóstico ou acompanhamento realizado por profissionais de saúde.

## 🎯 Sobre o Projeto

O **FibroInformar** é um projeto acadêmico voltado à área de **Fisioterapia**, desenvolvido com a proposta de apresentar informações confiáveis sobre fibromialgia em uma linguagem simples e acessível.

A aplicação organiza os conteúdos em diferentes temas relacionados à condição, incluindo sintomas, dor, qualidade de vida, fisioterapia, movimento, exercício físico, educação em saúde e autocuidado.

O projeto também conta com recursos interativos, como **Mitos e Verdades** e um **Quiz educativo**, tornando a consulta ao conteúdo mais dinâmica.

## 🎓 Contexto Acadêmico

O projeto está relacionado a uma atividade acadêmica de extensão na área de Fisioterapia.

A proposta prevê que o aplicativo seja posteriormente apresentado à comunidade acadêmica participante da **Universidade Nilton Lins**, sob orientação do Prof. Luiz Henrique, após as etapas de desenvolvimento, testes e autorização necessárias.

## 🧠 Objetivo

O objetivo do FibroInformar é facilitar o acesso a informações educativas sobre fibromialgia por meio de uma aplicação digital simples, organizada e acessível.

A proposta é apresentar conteúdos científicos interpretados e adaptados para uma linguagem de fácil compreensão, sem substituir as fontes científicas utilizadas pela equipe.

## 👥 Público

Pessoas diagnosticadas com fibromialgia, familiares, cuidadores, estudantes e a comunidade acadêmica interessada em compreender a condição de forma humanizada, desmistificada e baseada em evidências.

## 📚 Conteúdo Educativo

A aplicação contempla conteúdos relacionados a:

* 🧠 O que é fibromialgia
* 🩹 Principais sintomas
* 💢 Dor e qualidade de vida
* 🏃 Fisioterapia e movimento
* 🏋️ Exercício físico
* 📖 Educação em saúde
* 🌱 Qualidade de vida e autocuidado

Os conteúdos científicos devem ser revisados pela equipe responsável e acompanhados de suas respectivas referências.

## 🧩 Funcionalidades

A estrutura prevista para a aplicação inclui:

* 🏠 Tela inicial
* 🧭 Menu principal
* 📖 Entenda a Fibromialgia
* 🩹 Principais Sintomas
* 🏃 Fisioterapia e Movimento
* 🌱 Qualidade de Vida e Autocuidado
* ❓ Mitos e Verdades
* 🧠 Quiz educativo
* 📊 Resultado do Quiz
* 📚 Referências
* 🩺 Orientação final para procurar profissionais de saúde

## ❓ Mitos e Verdades

A aplicação possui uma seção interativa destinada à apresentação de afirmações relacionadas à fibromialgia.

O usuário poderá interagir com as afirmações e receber uma explicação baseada na literatura utilizada no projeto.

## 🧠 Quiz Educativo

O quiz foi pensado como um recurso de aprendizagem complementar.

A proposta inclui perguntas de múltipla escolha, apresentação do resultado da resposta e uma breve explicação baseada nas referências utilizadas.

A estrutura prevista contempla aproximadamente **5 a 10 perguntas**.

## 📱 Experiência Responsiva

O projeto possui uma abordagem **mobile-first**, priorizando a experiência em dispositivos móveis.

A interface é planejada para funcionar de forma adequada em:

* 📱 Smartphones (320px, 375px, 390px, 430px)
* 📲 Tablets (portrait 768px e landscape 820px/1024px)
* 💻 Notebooks
* 🖥️ Desktops

A responsividade e a usabilidade em dispositivos móveis e tablets são prioridades desde a concepção das telas.

## 🎨 Design e UX

A interface busca apresentar uma experiência moderna, acolhedora, acessível e centrada no usuário.

O design prioriza:

* Paleta humanizada inspirada na conscientização (tons suaves de lavanda/violeta e sálvia/menta);
* Hierarquia visual clara e leitura sem fadiga cognitiva;
* Tipografia legível e contraste em conformidade com WCAG;
* Navegação intuitiva com touch targets ergonômicos (>= 48px);
* Ausência de layouts genéricos e templates de IA;
* Adaptação pensada para cada viewport (mobile, tablet e desktop).

## 🏗️ Arquitetura

A aplicação utiliza uma estrutura organizada e modular, permitindo que novos conteúdos e funcionalidades sejam adicionados conforme a evolução do projeto.

A organização técnica mantém separadas as responsabilidades:

* `src/pages/`: Telas e fluxos da aplicação;
* `src/components/`: Componentes reutilizáveis (UI e interativos);
* `src/data/`: Conteúdos educativos, mitos/verdades, quiz e referências desacoplados da UI;
* `src/types/`: Tipagens TypeScript para segurança de dados;
* `src/styles/`: Configuração de estilos e variáveis de design.

## 🛠️ Tecnologias

A aplicação utiliza tecnologias modernas do ecossistema web:

* ⚛️ React
* 📘 TypeScript
* ⚡ Vite
* 🧭 React Router

## 📂 Estrutura do Projeto

```text
src/
├── assets/         # Recursos estáticos e ilustrações
├── components/     # Componentes de interface e interações
│   ├── common/     # Header, Navigation, Buttons, Cards
│   └── interactive/# Mitos, Quiz, Feedback
├── data/           # Conteúdo modular (educativo, quiz, referências)
├── pages/          # Páginas e rotas da aplicação
├── styles/         # Tokens de estilo e temas
├── types/          # Modelos de dados TypeScript
└── utils/          # Funções utilitárias
```

## ♿ Acessibilidade e Qualidade

A acessibilidade faz parte dos requisitos fundamentais do projeto:

* Contraste de cores adequado (WCAG AA/AAA);
* Tipografia e espaçamentos pensados para legibilidade e baixo cansaço visual;
* Navegação acessível por teclado e foco visível;
* HTML semântico com landmarks apropriadas;
* Áreas de toque generosas para facilidade motora;
* Suporte a `prefers-reduced-motion`;
* Zero overflow horizontal acidental em todas as resoluções.

## 📚 Referências Científicas

As informações científicas utilizadas no aplicativo devem ser obtidas a partir da literatura selecionada e revisada pela equipe.

A inteligência artificial auxilia no desenvolvimento, organização e revisão da clareza dos conteúdos, mas **não é considerada fonte científica do projeto**.

As referências correspondentes devem ser apresentadas nas respectivas seções da aplicação.

## ⚠️ Aviso

O FibroInformar possui finalidade **exclusivamente educativa**.

As informações apresentadas não substituem consulta, avaliação, diagnóstico ou acompanhamento realizado por profissionais de saúde.

## 🧪 Avaliação

Após a implementação, o projeto poderá ser avaliado pelos participantes considerando aspectos como:

* facilidade de utilização;
* compreensão das informações;
* utilidade do conteúdo;
* organização das telas;
* contribuição do quiz para a compreensão;
* sugestões de melhoria.

## 🚧 Status do Projeto

**✅ Primeira Versão Funcional Implementada**

A estrutura completa do aplicativo, os módulos educativos desacoplados, a seção interativa de Mitos e Verdades, o Quiz com cálculo de resultados e a tela de Referências Bibliográficas foram desenvolvidos e validados com foco em usabilidade mobile-first e acessibilidade.

## 🔮 Próximos Passos

* 📚 Inserção dos artigos científicos definitivos e detalhamentos específicos fornecidos pela equipe de Fisioterapia
* 👥 Aplicação e avaliação com os participantes da comunidade acadêmica da Universidade Nilton Lins
* 🔄 Refinamento contínuo de conteúdos, banco de perguntas do quiz e novas afirmações de mitos conforme novas referências forem incorporadas

## 📌 Observação

O projeto deve evoluir conforme novas informações, referências científicas e requisitos forem fornecidos pela equipe responsável.