import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, Clock, ShieldCheck, Star } from 'lucide-react'

const services = [
  {
    title: '1ère Séance',
    description: 'Séance complète de 60 min. Résultats visibles dès la première séance — jusqu\'à 4 teintes plus claires.',
    duration: '60 min',
    price: '70€',
    badge: 'Populaire',
  },
  {
    title: '2ème Séance',
    description: 'Pour approfondir et prolonger les résultats de votre première séance.',
    duration: '60 min',
    price: '50€',
    badge: 'Fidélité',
  },
  {
    title: 'Retouche',
    description: 'Maintenir l\'éclat de votre sourire. Recommandé régulièrement après un traitement initial.',
    duration: '45 min',
    price: '25€',
    badge: null,
  },
]

const benefits = [
  { icon: ShieldCheck, title: 'Gel certifié', desc: 'Produits homologués CE, sans peroxyde agressif.' },
  { icon: Star, title: 'Résultats garantis', desc: 'Jusqu\'à 8 teintes de différence en une séance.' },
  { icon: CheckCircle, title: 'Sans douleur', desc: 'Technologie LED douce, sans sensation de brûlure.' },
  { icon: Clock, title: 'Rapide & efficace', desc: 'En 45 à 60 min, repartez avec un sourire éclatant.' },
]

const testimonials = [
  { name: 'Leila M.', text: 'Résultat incroyable en une seule séance ! Mariam est très professionnelle et rassurante.', stars: 5 },
  { name: 'Sarah B.', text: 'Je recommande à 100%. Mes dents n\'ont jamais été aussi blanches, et sans douleur !', stars: 5 },
  { name: 'Nadia K.', text: 'J\'avais peur au début mais Mariam m\'a tout expliqué. Super expérience, je reviendrai.', stars: 5 },
]

const socials = [
  { label: 'Instagram', handle: '@smilux_dentaire', href: 'https://instagram.com/smilux_dentaire' },
  { label: 'TikTok', handle: '@smilux_dentaire', href: 'https://tiktok.com/@smilux_dentaire' },
]

export default function BlanchimentPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/mariam-studio.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0A0A0A]" />
        <div className="relative z-10 text-center px-6 fade-in-up">
          <div className="flex justify-center mb-6">
            <Image
              src="/logo-dentaire.png"
              alt="Blanchiment dentaire logo"
              width={110}
              height={110}
              className="rounded-full border-2 border-[#C9A84C]/50 object-cover shadow-[0_0_40px_rgba(201,168,76,0.3)]"
              priority
            />
          </div>
          <Badge className="mb-4 bg-[#C9A84C]/10 text-[#C9A84C] border border-[#C9A84C]/30 text-xs tracking-widest uppercase">
            Soin premium
          </Badge>
          <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl text-white mb-4 leading-tight">
            Sourire <span className="shimmer-text">Éclatant</span>
          </h1>
          <p className="text-white/60 text-lg max-w-md mx-auto font-light tracking-wide">
            Blanchiment dentaire professionnel par <span className="text-[#C9A84C]">Mariam</span>
          </p>
          <p className="mt-4 text-white/35 text-sm tracking-widest uppercase">
            Résultats visibles dès la première séance
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="font-playfair text-4xl text-white mb-3">
            Pourquoi choisir <span className="text-[#C9A84C]">Mariam</span> ?
          </h2>
          <p className="text-white/40 text-sm tracking-wider font-light">Une approche douce, professionnelle et efficace</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="text-center p-6 rounded-2xl border border-[#C9A84C]/10 hover:border-[#C9A84C]/40 transition-all duration-300 bg-white/3 group cursor-default"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#C9A84C]/10 flex items-center justify-center group-hover:bg-[#C9A84C]/20 transition-colors">
                  <Icon size={20} className="text-[#C9A84C]" />
                </div>
              </div>
              <h3 className="text-white font-medium mb-2 tracking-wide">{title}</h3>
              <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Mariam */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="relative h-80 rounded-2xl overflow-hidden border border-[#C9A84C]/10">
              <Image
                src="/mariam-resultat.jpg"
                alt="Résultat blanchiment dentaire"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#C9A84C] text-black text-xs font-semibold px-4 py-2 rounded-full">
              Certifiée & expérimentée
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-playfair text-3xl text-white mb-6">
              <span className="text-[#C9A84C]">Mariam</span>, praticienne certifiée
            </h2>
            <p className="text-white/60 leading-relaxed mb-4 font-light text-[17px]">
              Formée aux dernières techniques de blanchiment dentaire, <strong className="text-white font-normal">Mariam</strong> propose des soins sûrs, efficaces et personnalisés. Elle adapte chaque traitement à la sensibilité de ses clients.
            </p>
            <p className="text-white/60 leading-relaxed font-light text-[17px]">
              Avec une approche bienveillante et professionnelle, elle vous accompagne du diagnostic jusqu&apos;au résultat final, pour un sourire qui vous ressemble.
            </p>
            <div className="mt-6 p-4 rounded-xl bg-[#C9A84C]/5 border border-[#C9A84C]/20">
              <p className="text-[#C9A84C] text-sm italic font-light">
                &ldquo;Mon objectif : que chaque client reparte avec un sourire éclatant et une confiance retrouvée.&rdquo;
              </p>
              <p className="text-white/40 text-xs mt-2">— Mariam</p>
            </div>

            {/* Réseaux sociaux */}
            <div className="mt-6">
              <p className="text-white/30 text-xs tracking-widest uppercase mb-3">Retrouvez Mariam</p>
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
        </div>
      </section>

      {/* Services */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="font-playfair text-4xl text-white mb-3">
            Nos <span className="shimmer-text">Formules</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-5">
          {services.map(s => (
            <Card
              key={s.title}
              className="bg-white/5 border border-[#C9A84C]/10 hover:border-[#C9A84C]/40 transition-all duration-300 cursor-pointer group relative overflow-hidden"
            >
              {s.badge && (
                <div className="absolute top-3 right-3">
                  <span className="text-[10px] bg-[#C9A84C] text-black px-2 py-0.5 rounded-full font-semibold tracking-wide">
                    {s.badge}
                  </span>
                </div>
              )}
              <CardContent className="p-6">
                <h3 className="font-playfair text-white text-lg mb-2 pr-16">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{s.description}</p>
                <div className="flex items-center gap-1.5 text-white/40 text-xs mb-3">
                  <Clock size={12} />
                  <span>{s.duration}</span>
                </div>
                <p className="text-[#C9A84C] text-2xl font-playfair font-semibold">{s.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="font-playfair text-4xl text-white text-center mb-12">
          Elles <span className="shimmer-text">témoignent</span>
        </h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {testimonials.map(t => (
            <div
              key={t.name}
              className="p-6 rounded-2xl border border-[#C9A84C]/10 bg-white/3 hover:border-[#C9A84C]/30 transition-all duration-300"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={14} className="text-[#C9A84C] fill-[#C9A84C]" />
                ))}
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-4 italic">&ldquo;{t.text}&rdquo;</p>
              <p className="text-[#C9A84C] text-xs font-medium tracking-wider">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-2xl mx-auto px-6 py-20 text-center">
        <div className="p-10 rounded-3xl border border-[#C9A84C]/20 bg-white/3">
          <h2 className="font-playfair text-3xl text-white mb-4">
            Prête pour un sourire <span className="text-[#C9A84C]">éclatant</span> ?
          </h2>
          <p className="text-white/50 mb-2 font-light">
            18 Rue Schnapper, Saint-Germain-en-Laye (RER A)
          </p>
          <p className="text-white/30 text-xs mb-8">Réservez votre séance avec Mariam dès maintenant</p>
          <Link
            href="/reservation"
            className="inline-block px-10 py-4 rounded-full bg-[#C9A84C] text-black text-sm tracking-widest uppercase font-semibold hover:bg-[#E2C97E] transition-colors duration-300 cursor-pointer"
          >
            Prendre rendez-vous
          </Link>
        </div>
      </section>
    </div>
  )
}
