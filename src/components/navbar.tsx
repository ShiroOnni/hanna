'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/henna', label: 'Henna' },
  { href: '/blanchiment', label: 'Blanchiment' },
  { href: '/reservation', label: 'Réserver' },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3 rounded-2xl bg-black/70 backdrop-blur-md border border-[#C9A84C]/30">
        <Link href="/" className="flex items-center gap-3 cursor-pointer">
          <Image src="/logo-henna.png" alt="Sy Henna logo" width={42} height={42} className="rounded-full object-cover" />
          <span className="font-playfair text-[#C9A84C] text-lg font-semibold hidden sm:block tracking-wide">
            SY MA
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm tracking-widest uppercase transition-colors duration-200 cursor-pointer font-light ${
                  pathname === href
                    ? 'text-[#C9A84C]'
                    : 'text-white/70 hover:text-[#C9A84C]'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white/80 hover:text-[#C9A84C] transition-colors cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto rounded-2xl bg-black/90 backdrop-blur-md border border-[#C9A84C]/20 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block text-sm tracking-widest uppercase transition-colors duration-200 cursor-pointer ${
                    pathname === href ? 'text-[#C9A84C]' : 'text-white/70 hover:text-[#C9A84C]'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
