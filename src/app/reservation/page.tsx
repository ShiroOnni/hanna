'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { CheckCircle, Calendar, Clock, User } from 'lucide-react'

const services = [
  { id: 'henna-oriental', label: 'Henné Oriental', artist: 'Syrine', duration: '1h – 2h' },
  { id: 'henna-moderne', label: 'Henné Moderne', artist: 'Syrine', duration: '45min – 1h30' },
  { id: 'henna-mariee', label: 'Forfait Mariée', artist: 'Syrine', duration: '3h – 5h' },
  { id: 'henna-soiree', label: 'Henné Soirée', artist: 'Syrine', duration: '2h – 3h' },
  { id: 'blanchiment-express', label: 'Blanchiment Express', artist: 'Mariame', duration: '60 min' },
  { id: 'blanchiment-intensif', label: 'Traitement Intensif', artist: 'Mariame', duration: '3 séances' },
  { id: 'blanchiment-entretien', label: 'Séance Entretien', artist: 'Mariame', duration: '45 min' },
  { id: 'blanchiment-duo', label: 'Pack Duo', artist: 'Mariame', duration: '60 min' },
]

type FormData = {
  name: string
  email: string
  phone: string
  service: string
  date: string
  time: string
  message: string
}

export default function ReservationPage() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  const selectedService = services.find(s => s.id === form.service)

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-6">
        <div className="text-center max-w-md fade-in-up">
          <div className="w-20 h-20 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/40 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={36} className="text-[#C9A84C]" />
          </div>
          <h2 className="font-playfair text-4xl text-white mb-4">Demande envoyée</h2>
          <p className="text-white/50 mb-2 font-light">
            Merci <span className="text-[#C9A84C]">{form.name}</span> pour votre demande de rendez-vous.
          </p>
          <p className="text-white/40 text-sm mb-8">
            Nous vous confirmerons votre rendez-vous dans les plus brefs délais par email ou téléphone.
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm({ name:'',email:'',phone:'',service:'',date:'',time:'',message:'' }) }}
            className="px-8 py-3 rounded-full border border-[#C9A84C]/40 text-[#C9A84C] text-sm tracking-widest uppercase hover:bg-[#C9A84C] hover:text-black transition-all duration-300 cursor-pointer"
          >
            Nouvelle demande
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Header */}
      <section className="pt-32 pb-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,168,76,0.08)_0%,_transparent_60%)] pointer-events-none" />
        <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-4">Prenez rendez-vous</p>
        <h1 className="font-playfair text-5xl sm:text-6xl text-white mb-4">
          Réserver <span className="shimmer-text">ma séance</span>
        </h1>
        <p className="text-white/40 max-w-md mx-auto font-light text-lg">
          Henné avec Syrine ou blanchiment avec Mariame — choisissez votre prestation et votre créneau.
        </p>
      </section>

      <div className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-5 gap-10">

          {/* Sidebar info */}
          <aside className="lg:col-span-2 space-y-6">
            {/* Syrine card */}
            <div className="p-5 rounded-2xl border border-[#C9A84C]/15 bg-white/3">
              <div className="flex items-center gap-4 mb-3">
                <Image
                  src="/logo-henna.png"
                  alt="Syrine"
                  width={48}
                  height={48}
                  className="rounded-full object-cover border border-[#C9A84C]/30"
                />
                <div>
                  <p className="text-white font-medium">Syrine</p>
                  <p className="text-white/40 text-xs tracking-wider uppercase">Artiste henné</p>
                </div>
              </div>
              <ul className="space-y-1.5">
                {services.filter(s => s.artist === 'Syrine').map(s => (
                  <li key={s.id} className="flex justify-between text-xs text-white/50">
                    <span>{s.label}</span>
                    <span className="text-[#C9A84C]/60">{s.duration}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mariame card */}
            <div className="p-5 rounded-2xl border border-[#C9A84C]/15 bg-white/3">
              <div className="flex items-center gap-4 mb-3">
                <Image
                  src="/logo-dentaire.png"
                  alt="Mariame"
                  width={48}
                  height={48}
                  className="rounded-full object-cover border border-[#C9A84C]/30"
                />
                <div>
                  <p className="text-white font-medium">Mariame</p>
                  <p className="text-white/40 text-xs tracking-wider uppercase">Praticienne blanchiment</p>
                </div>
              </div>
              <ul className="space-y-1.5">
                {services.filter(s => s.artist === 'Mariame').map(s => (
                  <li key={s.id} className="flex justify-between text-xs text-white/50">
                    <span>{s.label}</span>
                    <span className="text-[#C9A84C]/60">{s.duration}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Info block */}
            {selectedService && (
              <div className="p-4 rounded-xl bg-[#C9A84C]/8 border border-[#C9A84C]/30">
                <p className="text-[#C9A84C] text-xs tracking-wider uppercase mb-2">Prestation sélectionnée</p>
                <p className="text-white font-medium text-sm">{selectedService.label}</p>
                <div className="flex items-center gap-2 mt-2 text-white/40 text-xs">
                  <User size={12} />
                  <span>{selectedService.artist}</span>
                  <Clock size={12} className="ml-2" />
                  <span>{selectedService.duration}</span>
                </div>
              </div>
            )}
          </aside>

          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-6">
            <div className="p-8 rounded-3xl border border-[#C9A84C]/10 bg-white/3">
              <h2 className="font-playfair text-2xl text-white mb-8">Vos informations</h2>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white/60 text-xs tracking-widest uppercase">
                    Nom complet *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/25 focus:border-[#C9A84C]/60 focus-visible:ring-[#C9A84C]/20 rounded-xl h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white/60 text-xs tracking-widest uppercase">
                    Téléphone *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+33 6 00 00 00 00"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/25 focus:border-[#C9A84C]/60 focus-visible:ring-[#C9A84C]/20 rounded-xl h-11"
                  />
                </div>
              </div>

              <div className="space-y-2 mt-5">
                <Label htmlFor="email" className="text-white/60 text-xs tracking-widest uppercase">
                  Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/25 focus:border-[#C9A84C]/60 focus-visible:ring-[#C9A84C]/20 rounded-xl h-11"
                />
              </div>

              <div className="space-y-2 mt-5">
                <Label htmlFor="service" className="text-white/60 text-xs tracking-widest uppercase">
                  Prestation souhaitée *
                </Label>
                <select
                  id="service"
                  name="service"
                  required
                  value={form.service}
                  onChange={handleChange}
                  className="w-full h-11 rounded-xl bg-white/5 border border-white/10 text-white px-3 text-sm focus:border-[#C9A84C]/60 focus:outline-none cursor-pointer transition-colors"
                >
                  <option value="" className="bg-[#1a1a1a] text-white/50">Choisir une prestation…</option>
                  <optgroup label="— Henné (Syrine)" className="bg-[#1a1a1a]">
                    {services.filter(s => s.artist === 'Syrine').map(s => (
                      <option key={s.id} value={s.id} className="bg-[#1a1a1a] text-white">
                        {s.label} ({s.duration})
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="— Blanchiment (Mariame)" className="bg-[#1a1a1a]">
                    {services.filter(s => s.artist === 'Mariame').map(s => (
                      <option key={s.id} value={s.id} className="bg-[#1a1a1a] text-white">
                        {s.label} ({s.duration})
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-5 mt-5">
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-white/60 text-xs tracking-widest uppercase">
                    <Calendar size={12} className="inline mr-1.5 mb-0.5" />
                    Date souhaitée *
                  </Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    required
                    value={form.date}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 text-white focus:border-[#C9A84C]/60 focus-visible:ring-[#C9A84C]/20 rounded-xl h-11 [color-scheme:dark] cursor-pointer"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time" className="text-white/60 text-xs tracking-widest uppercase">
                    <Clock size={12} className="inline mr-1.5 mb-0.5" />
                    Heure souhaitée
                  </Label>
                  <Input
                    id="time"
                    name="time"
                    type="time"
                    value={form.time}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 text-white focus:border-[#C9A84C]/60 focus-visible:ring-[#C9A84C]/20 rounded-xl h-11 [color-scheme:dark] cursor-pointer"
                  />
                </div>
              </div>

              <div className="space-y-2 mt-5">
                <Label htmlFor="message" className="text-white/60 text-xs tracking-widest uppercase">
                  Message (optionnel)
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Précisez vos attentes, l'occasion, ou toute information utile…"
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/25 focus:border-[#C9A84C]/60 focus-visible:ring-[#C9A84C]/20 rounded-xl resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-8 py-4 rounded-full bg-[#C9A84C] text-black font-semibold text-sm tracking-widest uppercase hover:bg-[#E2C97E] transition-all duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? 'Envoi en cours…' : 'Envoyer ma demande'}
              </button>

              <p className="text-center text-white/25 text-xs mt-4">
                Confirmation par email ou téléphone sous 24h
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
