# Página de Apresentação - Atividade 1

Projeto simples de apresentação pessoal, criado para a disciplina de Interface Web.

## Tecnologias

- Vite + React + TypeScript
- Tailwind CSS

## Como executar

1. Instale o **Node.js** (versão 20.19 ou superior).
2. Abra a pasta `apresentacao-henrique` no VS Code.
3. Abra o terminal nessa pasta e execute:

```bash
npm install
npm run dev
```

4. Abra o endereço indicado no terminal (normalmente `http://localhost:5173`).

Para testar a versão de entrega:

```bash
npm run build
npm run preview
```

## Organização dos arquivos

- `src/App.tsx`: organiza as seções na tela.
- `src/components/Cabecalho.tsx`: nome e menu de navegação.
- `src/components/Sobre.tsx`: texto de apresentação.
- `src/components/Habilidades.tsx`: exibe habilidades e seus níveis.
- `src/components/Projetos.tsx`: mostra os projetos em cartões.
- `src/components/Contato.tsx`: botão que mostra ou oculta uma mensagem.
- `src/components/Cartao.tsx`: componente reutilizável que recebe `children`.
- `src/components/Rodape.tsx`: créditos da atividade.
- `src/data/conteudo.ts`: listas e tipos dos projetos e habilidades.
- `src/index.css`: importação do Tailwind e estilos básicos.

## Como a atividade atende aos requisitos

- **7 componentes**: Cabecalho, Sobre, Habilidades, Projetos, Contato, Rodape e Cartao.
- **Props tipadas**: todos os componentes recebem props definidas com `type` (incluindo `children` no Cartao).
- **Listas tipadas**: os tipos `Habilidade` e `Projeto` estão em `conteudo.ts`.
- **`.map()` e `key`**: usados nas listas de habilidades e cartões de projetos.
- **Renderização condicional e estado**: no componente Contato, `useState` controla a mensagem e o texto do botão.
- **Tailwind e responsividade**: a página se adapta ao celular e ao computador; os projetos ficam em 1 coluna no celular e 3 colunas em telas maiores; as habilidades ficam em 1 ou 2 colunas.
- **Hover**: os cartões de projetos ganham sombra ao passar o mouse.
- **Ordem de títulos**: `h1` no cabeçalho principal, `h2` nas seções e `h3` nos projetos.
- **Acessibilidade**: menu com descrição, botão acessível por teclado e `aria-expanded`.

## O que você pode personalizar

Edite `src/data/conteudo.ts` para mudar projetos e habilidades. Edite o texto em `Sobre.tsx` e `App.tsx` para ajustar sua apresentação. No componente `Contato.tsx`, substitua a mensagem pelo seu e-mail ou redes, se desejar. O avatar com a letra H pode ser trocado por uma foto depois.

## Uma frase sobre cada componente

- **Cabecalho:** mostra meu nome e os links que levam para cada parte da página.
- **Sobre:** explica quem sou e o que estou estudando.
- **Habilidades:** apresenta, em uma lista, as tecnologias e meu nível em cada uma.
- **Projetos:** apresenta meus trabalhos usando cartões criados a partir de uma lista.
- **Contato:** usa um botão para mostrar ou esconder uma mensagem.
- **Rodape:** exibe os créditos no final da página.
- **Cartao:** recebe outros elementos pelo `children` e organiza o visual.

## Entrega

O histórico Git do projeto tem 3 commits simples. Para enviar conforme a atividade, crie um **repositório público no GitHub**, envie o código e coloque o link no **AVA até o início da aula de 19/11**. O ZIP sozinho não substitui o link do repositório solicitado pelo professor.

Comandos para publicar em um repositório novo (substitua a URL pela sua):

```bash
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git branch -M main
git push -u origin main
```
