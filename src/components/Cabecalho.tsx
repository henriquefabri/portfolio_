type Props = { nome: string }

export default function Cabecalho({ nome }: Props) {
  return (
    <header className="border-b border-[#e3e8df] bg-white/90">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 py-4 sm:px-8">
        <a href="#inicio" className="text-lg font-bold tracking-tight text-[#3d633f]">
          {nome}<span className="text-[#a5bb8c]">.</span>
        </a>
        <nav aria-label="Navegação principal" className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#536054]">
          <a href="#sobre" className="hover:text-[#315d33]">Sobre</a>
          <a href="#habilidades" className="hover:text-[#315d33]">Habilidades</a>
          <a href="#projetos" className="hover:text-[#315d33]">Projetos</a>
          <a href="#contato" className="hover:text-[#315d33]">Contato</a>
        </nav>
      </div>
    </header>
  )
}
