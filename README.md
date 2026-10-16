# Site da Fase 0

Site estático (HTML, CSS e JavaScript, sem servidor e sem banco de dados). Abre direto no navegador e pode ser publicado de graça.

## Arquivos

| Arquivo | Para que serve |
|---|---|
| `index.html` | Landing page: escopo, ofertas, como funciona, responsável técnico, últimas oportunidades e contato |
| `blog.html` | Lista de oportunidades com filtro por setor; cada post abre em `blog.html#id-do-post` |
| `config.js` | Nome da empresa, CREA, WhatsApp, e-mail, LinkedIn e cidade |
| `blog/oportunidades.js` | Os posts do blog |
| `assets/style.css` e `assets/site.js` | Visual e funcionamento (não precisa mexer) |

## 1. Preencher os dados da empresa

Abra `config.js` e preencha os campos entre aspas. Enquanto um campo estiver vazio, o site mostra um aviso entre colchetes, como `[Nome da Empresa]`.

## 2. Publicar uma nova oportunidade

1. Abra `blog/oportunidades.js`.
2. Copie um bloco inteiro `{ ... },` e cole logo depois de `window.OPORTUNIDADES = [`.
3. Troque os campos: `id` (sem espaços nem acentos), `titulo`, `data` (AAAA-MM-DD), `setor`, `local`, `tipo`, `status`, `oferta`, `resumo` e `corpo`.
4. No `corpo`, separe parágrafos com uma linha em branco, use `## ` para subtítulos, `- ` para listas e `**texto**` para negrito.
5. Use `exemplo: false` (ou apague a linha) nos posts reais e apague os três posts de exemplo quando publicar os seus.

O site é público: não cite clientes em negociação nem dados do seu empregador atual.

## 3. Publicar na internet (grátis)

**Netlify (mais simples):** entre em app.netlify.com/drop e arraste a pasta `site`. Você recebe um endereço na hora e pode ligar um domínio próprio depois.

**GitHub Pages:** crie um repositório, envie o conteúdo desta pasta, e em Settings › Pages escolha a branch `main` e a pasta raiz.

Domínio `.com.br` custa cerca de R$ 40 por ano no Registro.br (valor aproximado; confira no site).
