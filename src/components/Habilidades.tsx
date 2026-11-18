import Cartao from './Cartao'
import type { Habilidade } from '../data/conteudo'

type Props = { habilidades: Habilidade[] }

export default function Habilidades({ habilidades }: Props) {
  return (
    <section id="habilidades" className="scroll-mt-8 rounded-2xl border border-[#e5e9df] bg-white p-6 sm:p-8">
      <h2 className="mb-2 text-xl font-bold text-[#345b38]">Habilidades</h2>
      <p className="mb-5 text-sm text-[#68736a]">Tecnologias que estou estudando no momento.</p>
      <ul className="grid gap-3 sm:grid-cols-2">
        {habilidades.map((habilidade) => (
          <li key={habilidade.nome}>
            <Cartao destaque>
              <div className="flex items-center justify-between gap-3">
                <span className="font-medium">{habilidade.nome}</span>
                <span className="rounded-full bg-white px-3 py-1 text-xs text-[#56704e]">{habilidade.nivel}</span>
              </div>
            </Cartao>
          </li>
        ))}
      </ul>
    </section>
  )
}
