import Cabecalho from './components/Cabecalho'
import Sobre from './components/Sobre'
import Habilidades from './components/Habilidades'
import Projetos from './components/Projetos'
import Contato from './components/Contato'
import Rodape from './components/Rodape'
import { habilidades, projetos } from './data/conteudo'

export default function App() {
  return (
    <div id="inicio" className="min-h-screen">
      <Cabecalho />
      <main className="mx-auto max-w-5xl space-y-7 px-5 py-10 sm:px-8 sm:py-14">
        <section className="flex flex-col items-start gap-5 rounded-2xl bg-[#eaf1e3] p-7 sm:flex-row sm:items-center sm:gap-7 sm:p-10">
          <div aria-label="Avatar com a letra H" role="img" className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-4 border-white bg-[#bed1b3] text-4xl font-bold text-[#41633f]">H</div>
          <div>
            <p className="mb-2 text-sm font-semibold tracking-wide text-[#62805e]">OLÁ, SEJA BEM-VINDO!</p>
            <h1 className="mb-2 text-3xl font-bold tracking-tight text-[#2e4f32] sm:text-4xl">Meu nome é Henrique.</h1>
            <p className="max-w-xl leading-7 text-[#5d705d]">Sou estudante de Análise e Desenvolvimento de Sistemas e estou construindo meus primeiros projetos na área de tecnologia.</p>
            <a href="#projetos" className="mt-5 inline-block rounded-lg border border-[#87a381] px-4 py-2 text-sm font-semibold text-[#3d643d] hover:bg-white">Conhecer projetos</a>
          </div>
        </section>
        <Sobre />
        <Habilidades habilidades={habilidades} />
        <Projetos projetos={projetos} />
        <Contato />
      </main>
      <Rodape />
    </div>
  )
}
