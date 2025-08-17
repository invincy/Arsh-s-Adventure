import { useEffect, useRef } from 'react'
import { ReactComponent as HeroSVG } from '@/assets/svg/hero.svg'
import { gsap } from 'gsap'
import { useGameStore } from '@/store/useGameStore'

interface Props {
  powered?: boolean
}

export default function Hero({ powered = false }: Props) {
  const ref = useRef<SVGSVGElement>(null)
  const reduced = useGameStore((s) => s.reducedMotion)

  useEffect(() => {
    if (reduced || !ref.current) return
    const tl = gsap.timeline({ repeat: -1, yoyo: true })
    tl.to(ref.current, { y: -10, duration: 2, ease: 'power1.inOut' })
      .to(ref.current, { scaleY: 1.05, transformOrigin: '50% 50%', duration: 2 }, '<')
    return () => {
      tl.kill()
    }
  }, [reduced])

  return <HeroSVG ref={ref} className={`hero-svg ${powered ? 'powered' : ''}`} />
}
