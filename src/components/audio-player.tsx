'use client'
import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [muted, setMuted] = useState(false)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // Démarre au premier clic sur la page (politique autoplay navigateur)
    const tryPlay = () => {
      if (!started) {
        audio.play().catch(() => {})
        setStarted(true)
      }
    }

    document.addEventListener('click', tryPlay, { once: true })
    document.addEventListener('touchstart', tryPlay, { once: true })

    return () => {
      document.removeEventListener('click', tryPlay)
      document.removeEventListener('touchstart', tryPlay)
    }
  }, [started])

  function toggle() {
    const audio = audioRef.current
    if (!audio) return
    if (muted) {
      audio.muted = false
      setMuted(false)
    } else {
      audio.muted = true
      setMuted(true)
    }
  }

  return (
    <>
      <audio ref={audioRef} src="/background.mp3" loop preload="auto" />
      <button
        onClick={toggle}
        aria-label={muted ? 'Activer le son' : 'Couper le son'}
        className="fixed bottom-5 right-5 z-50 w-10 h-10 rounded-full bg-black/60 border border-[#C9A84C]/30 flex items-center justify-center hover:border-[#C9A84C] hover:bg-black/80 transition-all duration-300 cursor-pointer backdrop-blur-sm"
      >
        {muted
          ? <VolumeX size={16} className="text-white/50" />
          : <Volume2 size={16} className="text-[#C9A84C]" />
        }
      </button>
    </>
  )
}
