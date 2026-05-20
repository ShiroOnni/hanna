import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Sparkles, Clock, MapPin, Camera } from 'lucide-react'

const services = [
  {
    title: 'Henné Simple',
    description: 'Motifs simples et élégants sur la main. Idéal pour un look discret et raffiné.',
    duration: 'Rapide',
    price: '5€ la main',
  },
  {
    title: 'Henné Complexe',
    description: 'Motifs détaillés et élaborés. Pour un résultat impressionnant et personnalisé.',
    duration: 'Sur place',
    price: '7€',
  },
  {
    title: 'Forfait Mariée',
    description: 'Pack complet mains + pieds + bras avec motifs de mariage. Une expérience unique pour votre grand jour.',
    duration: '3h – 5h',
    price: 'Sur devis',
  },
  {
    title: 'Henné Soirée',
    description: 'Designs exclusifs pour les soirées orientales, cérémonies et fêtes. Sur réservation uniquement.',
    duration: '2h – 3h',
    price: 'À partir de 50€',
  },
]

const gallery = [
  { src: '/sy1.jpg', alt: 'Henné floral sur la main' },
  { src: '/sy2.jpg', alt: 'Henné floral rouge sur fond bleu' },
  { src: '/sy3.jpg', alt: 'Henné géométrique deux mains' },
  { src: '/sy4.jpg', alt: 'Henné floral deux mains' },
  { src: '/sy5.jpg', alt: 'Henné géométrique berbère' },
  { src: '/sy6.jpg', alt: 'Henné symétrique deux mains' },
  { src: '/sy7.jpg', alt: 'Henné géométrique carré' },
  { src: '/sy8.jpg', alt: 'Henné soirée groupe de mains' },
]

const socials = [
  { label: 'Instagram', handle: '@srnhenna78', href: 'https://instagram.com/srnhenna78' },
  { label: 'TikTok', handle: '@srnhenna78', href: 'https://tiktok.com/@srnhenna78' },
  { label: 'Snapchat', handle: '@srnhenna78', href: 'https://snapchat.com/add/srnhenna78' },
]

export default function HennaPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/sy8.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0A0A0A]" />
        <div className="relative z-10 text-center px-6 fade-in-up">
          <div className="flex justify-center mb-6">
            <Image
              src="/logo-henna.png"
              alt="Sy Henna logo"
              width={110}
              height={110}
              className="rounded-full border-2 border-[#C9A84C]/50 object-cover shadow-[0_0_40px_rgba(201,168,76,0.3)]"
              priority
            />
          </div>
          <Badge className="mb-4 bg-[#C9A84C]/10 text-[#C9A84C] border border-[#C9A84C]/30 text-xs tracking-widest uppercase">
            Art traditionnel
          </Badge>
          <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl text-white mb-4 leading-tight">
            Sy <span className="shimmer-text">Henna</span>
          </h1>
          <p className="text-white/60 text-lg max-w-md mx-auto font-light tracking-wide">
            L&apos;art du henné par <span className="text-[#C9A84C]">Syrine</span> — élégance et tradition
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-white/40 text-sm">
            <MapPin size={14} />
            <span>18 Rue Schnapper, Saint-Germain-en-Laye (RER A)</span>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-playfair text-3xl text-white mb-6">
              L&apos;artiste derrière <span className="text-[#C9A84C]">le trait</span>
            </h2>
            <p className="text-white/60 leading-relaxed mb-4 font-light text-[17px]">
              Passionnée d&apos;art depuis toujours, <strong className="text-white font-normal">Syrine</strong> a développé une technique unique mêlant traditions orientales et sensibilité moderne. Chaque œuvre est pensée pour sublimer la peau.
            </p>
            <p className="text-white/60 leading-relaxed font-light text-[17px]">
              Que ce soit pour un mariage, une soirée ou simplement pour se faire plaisir, Syrine crée des motifs sur mesure, adaptés à votre personnalité et à l&apos;occasion.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {['Mariages', 'Anniversaires', 'Shooting photo', 'Événements'].map(tag => (
                <span key={tag} className="px-4 py-1.5 rounded-full border border-[#C9A84C]/30 text-[#C9A84C]/80 text-xs tracking-wider uppercase">
                  {tag}
                </span>
              ))}
            </div>

            {/* Réseaux sociaux */}
            <div className="mt-8">
              <p className="text-white/30 text-xs tracking-widest uppercase mb-3">Retrouvez Syrine</p>
              <div className="flex gap-3 flex-wrap">
                {socials.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full border border-[#C9A84C]/25 text-[#C9A84C]/70 text-xs hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-200 cursor-pointer"
                  >
                    {s.label} · {s.handle}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-80 rounded-2xl overflow-hidden border border-[#C9A84C]/10">
              <Image src="/sy2.jpg" alt="Syrine artiste henné" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#C9A84C] text-black text-xs font-semibold px-4 py-2 rounded-full">
              5+ ans d&apos;expérience
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-14">
          <h2 className="font-playfair text-4xl text-white mb-3">
            Nos <span className="shimmer-text">Prestations</span>
          </h2>
          <p className="text-white/40 tracking-widest uppercase text-xs">Tarifs sur place</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(s => (
            <Card key={s.title} className="bg-white/5 border border-[#C9A84C]/10 hover:border-[#C9A84C]/40 transition-all duration-300 cursor-pointer group">
              <CardContent className="p-6">
                <Sparkles size={18} className="text-[#C9A84C] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-playfair text-white text-lg mb-2">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{s.description}</p>
                <div className="flex items-center gap-1.5 text-white/40 text-xs mb-2">
                  <Clock size={12} />
                  <span>{s.duration}</span>
                </div>
                <p className="text-[#C9A84C] text-sm font-medium">{s.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="font-playfair text-4xl text-white text-center mb-12">
          <span className="shimmer-text">Galerie</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {gallery.map((img, i) => (
            <div key={i} className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Camera size={24} className="text-[#C9A84C]" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-2xl mx-auto px-6 py-20 text-center">
        <div className="p-10 rounded-3xl border border-[#C9A84C]/20 bg-white/3">
          <h2 className="font-playfair text-3xl text-white mb-4">
            Prête pour votre <span className="text-[#C9A84C]">création</span> ?
          </h2>
          <p className="text-white/50 mb-2 font-light">
            18 Rue Schnapper, Saint-Germain-en-Laye (RER A)
          </p>
          <p className="text-white/30 text-xs mb-8">Contactez Syrine via les réseaux ou réservez en ligne</p>
          <Link
            href="/reservation"
            className="inline-block px-10 py-4 rounded-full bg-[#C9A84C] text-black text-sm tracking-widest uppercase font-semibold hover:bg-[#E2C97E] transition-colors duration-300 cursor-pointer"
          >
            Réserver ma séance
          </Link>
        </div>
      </section>
    </div>
  )
}
