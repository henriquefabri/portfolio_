# Portfolio 

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
- `src/components/Rodape.tsx`: crédito discreto com nome e ano.
- `src/data/conteudo.ts`: listas e tipos dos projetos e habilidades.
- `src/index.css`: importação do Tailwind e estilos básicos.


