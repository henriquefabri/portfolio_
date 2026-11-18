import type { Projeto } from '../data/conteudo'

type Props = { projetos: Projeto[] }

export default function Projetos({ projetos }: Props) {
  return (
    <section id="projetos" className="scroll-mt-8">
      <div className="mb-5">
        <h2 className="text-xl font-bold text-[#345b38]">Meus projetos</h2>
        <p className="mt-2 text-sm text-[#68736a]">Dois projetos que venho desenvolvendo para colocar meus conhecimentos em prática.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {projetos.map((projeto) => (
          <article key={projeto.id} className="rounded-2xl border border-[#e5e9df] bg-white p-6 transition-shadow hover:shadow-md">
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#e5eddb] text-lg font-bold text-[#496a40]">
              {projeto.id.toString().padStart(2, '0')}
            </div>
            <h3 className="mb-2 font-bold text-[#344c38]">{projeto.titulo}</h3>
            <p className="mb-5 min-h-20 text-sm leading-6 text-[#667168]">{projeto.descricao}</p>
            <span className="inline-block rounded-md bg-[#f0f4eb] px-3 py-1 text-xs font-semibold text-[#56704e]">{projeto.tecnologia}</span>
          </article>
        ))}
      </div>
    </section>
  )
}
