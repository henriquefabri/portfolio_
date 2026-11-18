import { useState } from 'react'

type Props = { convite: string }

export default function Contato({ convite }: Props) {
  const [mostrarMensagem, setMostrarMensagem] = useState(false)

  return (
    <section id="contato" className="scroll-mt-8 rounded-2xl bg-[#eaf1e3] p-6 sm:p-8">
      <h2 className="mb-2 text-xl font-bold text-[#345b38]">Contato</h2>
      <p className="mb-4 text-sm leading-6 text-[#586958]">
        {convite}
      </p>
      <button
        type="button"
        onClick={() => setMostrarMensagem(!mostrarMensagem)}
        aria-expanded={mostrarMensagem}
        className="cursor-pointer rounded-lg bg-[#466e45] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#315732] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#315732]"
      >
        {mostrarMensagem ? 'Ocultar contato' : 'Ver contato'}
      </button>
      {mostrarMensagem && (
        <p className="mt-4 rounded-lg bg-white p-4 text-sm leading-6 text-[#4c6250]">
          Me procure pessoalmente na faculdade! Você também pode adicionar seu e-mail e GitHub aqui.
        </p>
      )}
    </section>
  )
}
