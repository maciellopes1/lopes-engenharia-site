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
    exemplo: false,
    resumo: "Quando várias contratadas disputam a mesma janela de parada, a sequência precisa ser decidida no planejamento. Decidida no campo, ela consome o tempo reservado para executar.",
    corpo: `Em terminais de líquidos, uma janela de parada precisa acomodar a preparação da área, a execução dos serviços, os testes e a devolução à operação. Quando várias contratadas disputam esse intervalo, o planejamento deve estabelecer uma sequência comum, com responsabilidades e condições de liberação claras. Decidir essa sequência somente no campo pode consumir o tempo reservado para executar.

Imagine uma intervenção hipotética em um terminal da Alemoa, em Santos. Uma contratada civil precisa recuperar uma base dentro de uma bacia de contenção. Outra, de montagem mecânica, precisa substituir um trecho de tubulação na mesma área. Ambas mobilizam suas equipes para o início da janela. Ao chegar, descobrem que o acesso necessário à montagem passa pela frente civil e que a liberação operacional ainda depende de preparações ausentes dos cronogramas.

Cada empresa pode ter dimensionado corretamente sua equipe e seu prazo. O conflito aparece na ligação entre os serviços: quem ocupa a área primeiro, em que condição a entrega e quando a próxima frente pode começar. Enquanto isso é negociado, profissionais e equipamentos podem permanecer mobilizados sem produzir.

**A interferência precisa aparecer no planejamento antes de aparecer na obra.**

Essa análise deve considerar espaço, sequência, recursos compartilhados e condições operacionais. Um andaime pode limitar a passagem de materiais. Um equipamento de içamento pode disputar acesso com outra frente. Duas atividades individualmente viáveis podem ser incompatíveis quando executadas ao mesmo tempo. A avaliação dos trabalhos simultâneos e a coordenação das permissões de trabalho fazem parte das boas práticas descritas pelo HSE para as indústrias de petróleo, química e correlatas. [Referência técnica](https://www.hse.gov.uk/pubns/priced/hsg250.pdf).

O suprimento também pode inviabilizar a janela. Uma válvula, um componente especial ou um conjunto pré-fabricado com prazo de entrega incompatível compromete a sequência prevista. Por isso, o planejamento deve acompanhar a data em que o material estará disponível e aceito para uso em campo, considerando fabricação, transporte, recebimento, inspeção e eventuais correções. A confirmação do pedido, isoladamente, oferece pouca segurança para mobilizar uma frente dependente daquele item.

As liberações operacionais exigem o mesmo cuidado. Preparações, isolamentos, avaliações e autorizações aplicáveis precisam ter responsáveis e tempo previsto. A emissão da permissão continua condicionada à verificação das condições reais de execução. O HSE também destaca a necessidade de informar a operação sobre o trabalho e sua duração e de formalizar a devolução do equipamento ao final. [Referência técnica](https://www.hse.gov.uk/comah/sragtech/techmeaspermit.htm).

Na prática, propomos organizar o plano integrado em cinco entregas:

- **Cronograma comum:** reunir engenharia, suprimentos, contratadas e operação, com vínculos entre serviços, liberações, testes e retorno operacional.
- **Mapa de interferências:** indicar, em planta ou croqui, frentes de trabalho, acessos, ocupações temporárias e restrições ao uso simultâneo das áreas.
- **Lista de restrições:** registrar cada pendência, seu responsável, a data necessária e a evidência de resolução.
- **Sequência acordada de execução:** definir a ordem das atividades, os recursos compartilhados e os critérios de passagem de uma frente para outra.
- **Plano de contingência e devolução:** estabelecer alternativas previamente avaliadas para atrasos e os requisitos para entregar o sistema à operação.

Antes da parada, uma reunião de verificação deve confrontar o plano com as condições efetivamente disponíveis. Material crítico pendente, projeto sem definição ou acesso incompatível precisam resultar em decisão explícita sobre o escopo. A equipe deve saber quais serviços estão aptos, quais dependem de resolução e quais precisarão ser reprogramados.

Também convém definir quem decide sobre mudanças durante a janela. Se uma atividade atrasar, a alteração da sequência precisa considerar as demais frentes e ser validada pelos responsáveis pela operação e pela segurança, conforme os procedimentos do terminal. A pressão pelo prazo exige informação atualizada e decisões coordenadas.

Durante a execução, o acompanhamento deve registrar horários de liberação, início e término, impedimentos, recursos afetados e decisões tomadas. Esses registros ajudam a corrigir o plano e oferecem uma base objetiva para avaliar desvios e eventuais pleitos. O propósito é tornar visível o que aconteceu e como isso afetou a entrega.

O **Planejamento Integrado e Interferências** reúne essas informações para apoiar a preparação e o controle da janela. Atuando pelo dono do empreendimento, coordenamos as interfaces dentro do escopo contratado. Atuando por uma contratada, organizamos suas dependências, compromissos e necessidades de liberação para negociação com o cliente e as demais frentes.

**Atendemos o dono do empreendimento ou uma das contratadas, nunca os dois no mesmo projeto.**

Se há uma parada prevista, a preparação pode começar pela revisão conjunta do cronograma, da situação dos materiais e das restrições da área. O objetivo é chegar à janela com uma sequência executável, responsabilidades claras e critérios de entrega acordados com a operação.

*Texto baseado em cenário ilustrativo, sem referência a ocorrência específica ou cliente identificado. Registro editorial OP-20261016.*`
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
