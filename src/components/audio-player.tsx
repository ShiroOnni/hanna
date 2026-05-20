'use client'
import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  // Démarre muet — seule façon d'autoplay sur mobile
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.muted = true
    audio.play().catch(() => {})
  }, [])

  function toggle() {
    const audio = audioRef.current
    if (!audio) return
    // S'assure que l'audio joue bien quand on démute
    if (audio.paused) {
      audio.play().catch(() => {})
    }
    audio.muted = !audio.muted
    setMuted(audio.muted)
  }

  return (
    <>
      <audio ref={audioRef} src="/background.mp3" loop preload="auto" />
      <button
        onClick={toggle}
        aria-label={muted ? 'Activer le son' : 'Couper le son'}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 px-3 h-10 rounded-full bg-black/60 border border-[#C9A84C]/30 hover:border-[#C9A84C] hover:bg-black/80 transition-all duration-300 cursor-pointer backdrop-blur-sm"
      >
        {muted ? (
          <>
            <VolumeX size={15} className="text-white/50" />
            <span className="text-[10px] tracking-widest uppercase text-white/40">Son</span>
          </>
        ) : (
          <Volume2 size={15} className="text-[#C9A84C]" />
        )}
      </button>
    </>
  )
}
