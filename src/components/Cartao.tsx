import type { ReactNode } from 'react'

type Props = { children: ReactNode; destaque?: boolean }

export default function Cartao({ children, destaque = false }: Props) {
  return (
    <div className={destaque ? 'rounded-2xl border border-[#d4e2ca] bg-[#f1f5ec] p-4' : 'rounded-2xl border border-[#e5e9df] bg-white p-4'}>
      {children}
    </div>
  )
}
