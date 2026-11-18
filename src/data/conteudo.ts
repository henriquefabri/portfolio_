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
    titulo: 'Site da LAIKA',
    descricao: 'Uma página para apresentar o time de basquete, os jogadores e os títulos.',
    tecnologia: 'Web',
  },
  {
    id: 2,
    titulo: 'Atividades de Grafos',
    descricao: 'Exercícios da faculdade com vértices, arestas e buscas em Java.',
    tecnologia: 'Java',
  },
  {
    id: 3,
    titulo: 'Projeto de Interface Web',
    descricao: 'Prática de criação de páginas e organização de componentes.',
    tecnologia: 'Angular',
  },
]
