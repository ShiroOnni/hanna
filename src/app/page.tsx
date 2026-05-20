'use client'
import { SpiralAnimation } from '@/components/ui/spiral-animation'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Home() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1800)
    return () => clearTimeout(t)
  }, [])

  return (
    <main className="fixed inset-0 w-full h-full overflow-hidden bg-black">
      {/* Spiral background */}
      <div className="absolute inset-0">
        <SpiralAnimation />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 pointer-events-none" />

      {/* Center content */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="flex flex-col items-center gap-6 text-center px-6">
          <div className="flex items-center gap-5">
            <Image
              src="/logo-henna.png"
              alt="Sy Henna"
              width={72}
              height={72}
              className="rounded-full object-cover border border-[#C9A84C]/40"
              priority
            />
            <Image
              src="/logo-dentaire.png"
              alt="Blanchiment dentaire"
              width={72}
              height={72}
              className="rounded-full object-cover border border-[#C9A84C]/40"
            />
          </div>

          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl text-white leading-tight tracking-tight">
            <span className="shimmer-text">Art & Beauté</span>
          </h1>

          <p className="text-white/60 text-sm sm:text-base tracking-widest uppercase font-light max-w-xs">
            Henné · Blanchiment Dentaire
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link
              href="/henna"
              className="px-8 py-3 rounded-full border border-[#C9A84C] text-[#C9A84C] text-sm tracking-widest uppercase font-light hover:bg-[#C9A84C] hover:text-black transition-all duration-300 cursor-pointer"
            >
              Henné — Syrine
            </Link>
            <Link
              href="/blanchiment"
              className="px-8 py-3 rounded-full border border-[#C9A84C] text-[#C9A84C] text-sm tracking-widest uppercase font-light hover:bg-[#C9A84C] hover:text-black transition-all duration-300 cursor-pointer"
            >
              Blanchiment — Mariame
            </Link>
          </div>

          <Link
            href="/reservation"
            className="mt-2 text-white/50 text-xs tracking-[0.25em] uppercase hover:text-[#C9A84C] transition-colors duration-300 cursor-pointer animate-pulse"
          >
            Réserver un rendez-vous
          </Link>
        </div>
      </div>
    </main>
  )
}
