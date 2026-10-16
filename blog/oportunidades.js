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
  oferta    qual oferta se aplica: "Revisão de Documentos e Compatibilização",
            "Análise de Contratos e Escopo", "Planejamento Integrado e Interferências",
            "Gestão de Contratadas e Escopo" ou "Diagnóstico e Escopo"
  exemplo   true para posts de exemplo (aparece um selo); apague ou use false nos reais
  resumo    1 ou 2 frases para a lista
  corpo     texto do post. Aceita: parágrafos (linha em branco entre eles),
            "## Subtítulo", listas com "- item" e **negrito**.

  Atenção: o site é público. Não cite clientes em negociação nem dados
  do seu empregador atual.
*/
window.OPORTUNIDADES = [
  {
    id: "interferencias-contratadas-terminal-operando",
    titulo: "Duas contratadas, uma janela de parada: interferências em terminais em operação",
    data: "2026-10-16",
    setor: "Terminais de líquidos",
    local: "Alemoa, Santos",
    tipo: "Planejamento e interferências",
    status: "Aberta",
    oferta: "Planejamento Integrado e Interferências",
    exemplo: true,
    resumo: "Quando civil e montagem disputam a mesma frente durante uma parada curta, o conflito precisa ser resolvido no cronograma, não no campo.",
    corpo: `Em terminais que não podem parar, cada janela de parada concentra várias contratadas na mesma área. Sem um plano integrado, a sequência é decidida no dia, e o custo aparece em horas paradas e em pleitos.

## O risco típico

- Civil e montagem mecânica com frentes sobrepostas na mesma bacia ou píer.
- Material de longo prazo chegando depois da janela.
- Liberações de trabalho da operação que não estavam no cronograma.

## Como entramos

O **Planejamento Integrado e Interferências** junta engenharia, suprimentos, contratadas e operação no mesmo cronograma e mapeia cada interferência antes da parada. Atendemos o dono ou uma das contratadas, nunca os dois.

Este é um post de exemplo. Substitua pelos casos que você encontrar na prospecção.`
  },
  {
    id: "escopo-medicao-contratos-montagem",
    titulo: "Escopo vago, medição difícil: contratos de montagem industrial",
    data: "2026-10-09",
    setor: "Indústria",
    local: "Cubatão",
    tipo: "Contratos e escopo",
    status: "Em acompanhamento",
    oferta: "Análise de Contratos e Escopo",
    exemplo: true,
    resumo: "Anexos de escopo genéricos e critérios de medição pouco claros viram discussão a cada boletim. Uma leitura técnica antes de assinar evita boa parte disso.",
    corpo: `Contratos de montagem eletromecânica costumam trazer o escopo em listas genéricas e a medição por percentual de avanço sem critério objetivo. O resultado é discussão a cada boletim e pleitos no fim da obra.

## Onde está a oportunidade

- Lacunas entre o escopo de duas contratadas que ninguém assume.
- Critérios de medição que não batem com a sequência real de montagem.
- Mudanças de escopo sem registro técnico.

## Como entramos

A **Análise de Contratos e Escopo** entrega um parecer com lacunas, riscos e critérios de medição revisados. Para o dono, protege contra aditivos sem base. Para a contratada, sustenta pleitos legítimos com documentação técnica.

Este é um post de exemplo. Substitua pelos casos que você encontrar na prospecção.`
  },
  {
    id: "manutenabilidade-revisao-documentos",
    titulo: "Manutenabilidade esquecida: o que revisar antes de liberar documentos para obra",
    data: "2026-10-02",
    setor: "Granéis sólidos",
    local: "Guarujá",
    tipo: "Documentos e compatibilização",
    status: "Aberta",
    oferta: "Revisão de Documentos e Compatibilização",
    exemplo: true,
    resumo: "Projetos revisados só por quem vai construir chegam ao campo sem acesso para manutenção. Corrigir no documento custa uma fração de corrigir na instalação pronta.",
    corpo: `Em sistemas de transporte e armazenagem de granéis, é comum o projeto chegar à obra sem espaço para trocar um rolete, sem ponto de içamento para um redutor ou com plataformas que não alcançam o que precisa de inspeção.

## O que revisamos

- Acesso, espaço e pontos de içamento para manutenção.
- Conflitos entre estrutura, tubulação, elétrica e equipamento.
- Itens que vão exigir parada de produção para manutenção.

## Como entramos

A **Revisão de Documentos e Compatibilização** analisa o lote por disciplina e entrega a lista de conflitos e de pontos de manutenabilidade, com solução proposta e prioridade pelo impacto na produção.

Este é um post de exemplo. Substitua pelos casos que você encontrar na prospecção.`
  }
];
