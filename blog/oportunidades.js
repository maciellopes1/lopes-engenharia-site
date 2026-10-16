/*
  REGISTRO DE OPORTUNIDADES
  -------------------------
  Para publicar uma nova oportunidade, copie um bloco { ... } abaixo,
  cole no TOPO da lista e edite os campos. A ordem no site é pela data.

  id        identificador curto, sem espaços nem acentos (vira o link)
  titulo    título do post
  data      AAAA-MM-DD
  setor     ex.: Terminais de líquidos, Granéis, Armazéns, Indústria
  local     cidade ou região
  tipo      ex.: Ampliação, Adequação normativa, Modernização, Nova instalação
  status    "Aberta", "Em acompanhamento" ou "Encerrada"
  oferta    qual oferta se aplica: "Diagnóstico e Escopo" ou "Plano de Implantação"
  exemplo   true para posts de exemplo (aparece um selo); apague ou use false nos reais
  resumo    1 ou 2 frases para a lista
  corpo     texto do post. Aceita: parágrafos (linha em branco entre eles),
            "## Subtítulo", listas com "- item" e **negrito**.

  Atenção: o site é público. Não cite clientes em negociação nem dados
  do seu empregador atual.
*/
window.OPORTUNIDADES = [
  {
    id: "bacias-contencao-terminais-liquidos",
    titulo: "Adequação de bacias de contenção e tancagem em terminais de líquidos",
    data: "2026-10-16",
    setor: "Terminais de líquidos",
    local: "Alemoa, Santos",
    tipo: "Adequação normativa",
    status: "Aberta",
    oferta: "Diagnóstico e Escopo",
    exemplo: true,
    resumo: "Terminais com tanques antigos precisam revisar bacias, drenagem e combate a incêndio antes de renovar licenças. O escopo costuma nascer incompleto.",
    corpo: `Terminais de granéis líquidos com parque de tancagem de décadas atrás enfrentam a mesma pergunta quando a licença se aproxima do vencimento: o que precisa mudar, quanto custa e como fazer sem parar a operação.

## Onde está a oportunidade

- Revisão de capacidade das bacias de contenção frente aos tanques atuais.
- Drenagem, separação água e óleo e pisos de bacia.
- Sistemas de combate a incêndio que cresceram por remendos.

## Como entramos

Um **Diagnóstico e Escopo** de 4 semanas organiza o levantamento por disciplina, compara alternativas e entrega uma estimativa conceitual que a diretoria consegue aprovar.

Este é um post de exemplo. Substitua pelos casos que você encontrar na prospecção.`
  },
  {
    id: "ampliacao-armazens-retroportuarios",
    titulo: "Ampliação de armazéns retroportuários com operação em andamento",
    data: "2026-10-09",
    setor: "Armazéns e logística",
    local: "Margem direita, Santos",
    tipo: "Ampliação",
    status: "Em acompanhamento",
    oferta: "Plano de Implantação",
    exemplo: true,
    resumo: "Ampliar área coberta sem perder giro de carga exige um plano de frentes de obra e janelas de operação desde o primeiro dia.",
    corpo: `Recintos retroportuários crescem por etapas, e cada etapa disputa espaço com caminhões, empilhadeiras e carga em trânsito.

## O risco típico

- Contratadas sem pacotes de escopo claros e sem critério de medição.
- Compras de estrutura metálica e cobertura com prazo longo, descobertas tarde.
- Pátio interditado além do previsto.

## Como entramos

O **Plano de Implantação** entrega cronograma integrado, plano de contratação e um mapa de interferências com a operação, para a obra começar com prazo que as contratadas conseguem cumprir.

Este é um post de exemplo. Substitua pelos casos que você encontrar na prospecção.`
  },
  {
    id: "retrofit-transportadores-graneis",
    titulo: "Retrofit de transportadores e torres de transferência de granéis sólidos",
    data: "2026-10-02",
    setor: "Granéis sólidos",
    local: "Guarujá e Cubatão",
    tipo: "Modernização",
    status: "Aberta",
    oferta: "Diagnóstico e Escopo",
    exemplo: true,
    resumo: "Correias, chutes e estruturas desgastadas limitam a capacidade. Antes de trocar equipamento, vale comparar alternativas de retrofit.",
    corpo: `Sistemas de transporte de granéis que operam há muitos anos acumulam desgaste em chutes, roletes e estruturas, além de pontos de emissão de pó.

## Perguntas que definem o escopo

- O gargalo está na correia, na transferência ou na estrutura?
- Retrofit parcial ou substituição do trecho?
- Qual janela de parada a operação aceita?

## Como entramos

Um **Diagnóstico e Escopo** compara até duas alternativas técnicas, com custo, prazo e impacto na operação, e apoia o projeto mecânico de chutes e estruturas quando necessário.

Este é um post de exemplo. Substitua pelos casos que você encontrar na prospecção.`
  }
];
