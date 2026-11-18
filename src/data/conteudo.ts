// Tipos ajudam a organizar os dados mostrados na tela.
export type Nivel = 'Básico' | 'Intermediário' | 'Avançado'

export type Habilidade = {
  nome: string
  nivel: Nivel
}

export type Projeto = {
  id: number
  titulo: string
  descricao: string
  tecnologia: string
}

export const habilidades: Habilidade[] = [
  { nome: 'HTML e CSS', nivel: 'Intermediário' },
  { nome: 'JavaScript', nivel: 'Básico' },
  { nome: 'Java', nivel: 'Básico' },
  { nome: 'Banco de Dados', nivel: 'Básico' },
]

export const projetos: Projeto[] = [
  {
    id: 1,
    titulo: 'SupNews',
    descricao: 'Sistema que desenvolvi para organizar notícias e atualizações importantes para uma equipe de suporte, facilitando a consulta e o compartilhamento de informações.',
    tecnologia: 'Sistema web',
  },
  {
    id: 2,
    titulo: 'Plataforma de Jiu-Jitsu',
    descricao: 'Plataforma para ajudar uma equipe de Jiu-Jitsu a organizar seus alunos, com área de acesso e recursos voltados ao acompanhamento de pagamentos.',
    tecnologia: 'Sistema web',
  },
]
