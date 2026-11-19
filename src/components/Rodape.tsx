type Props = { nome: string }

export default function Rodape({ nome }: Props) {
  return (
    <footer className="border-t border-[#e3e8df] py-6 text-center text-sm text-[#778077]">
      © {new Date().getFullYear()} {nome}
    </footer>
  )
}
