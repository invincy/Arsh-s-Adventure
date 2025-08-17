import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as MindSVG } from '@/assets/svg/mind.svg'
import { ReactComponent as BodySVG } from '@/assets/svg/body.svg'
import { ReactComponent as SpiritSVG } from '@/assets/svg/spirit.svg'
import Hero from '@/components/Hero'
import Panel from '@/components/Panel'
import Aura from '@/components/Aura'
import { trapArrowNavigation } from '@/utils/a11y'
import { useGameStore } from '@/store/useGameStore'

export default function Dashboard() {
  const navigate = useNavigate()
  const [powered, setPowered] = useState(false)
  const sfx = useGameStore((s) => s.sfx)
  const toggleSfx = useGameStore((s) => s.toggleSfx)
  const mindRef = useRef<HTMLButtonElement>(null)
  const bodyRef = useRef<HTMLButtonElement>(null)
  const spiritRef = useRef<HTMLButtonElement>(null)
  const refs = [mindRef, bodyRef, spiritRef]

  const handleKey = (e: React.KeyboardEvent<HTMLButtonElement>) =>
    trapArrowNavigation(e, refs)

  const activate = (path: string) => {
    navigate(path)
  }

  const powerOn = () => setPowered(true)
  const powerOff = () => setPowered(false)

  return (
    <div className="dashboard">
      <Aura />
      <button className="settings" onClick={toggleSfx}>
        {sfx ? 'SFX: On' : 'SFX: Off'}
      </button>
      <Hero powered={powered} />
      <Panel
        id="mind"
        color="var(--blue)"
        label="Open Mind"
        ref={mindRef}
        onActivate={() => activate('/mind')}
        onFocus={powerOn}
        onBlur={powerOff}
        onMouseEnter={powerOn}
        onMouseLeave={powerOff}
        onKeyDown={handleKey}
      >
        <MindSVG />
      </Panel>
      <Panel
        id="body"
        color="var(--green)"
        label="Open Body"
        ref={bodyRef}
        onActivate={() => activate('/body')}
        onFocus={powerOn}
        onBlur={powerOff}
        onMouseEnter={powerOn}
        onMouseLeave={powerOff}
        onKeyDown={handleKey}
      >
        <BodySVG />
      </Panel>
      <Panel
        id="spirit"
        color="var(--gold)"
        label="Open Spirit"
        ref={spiritRef}
        onActivate={() => activate('/spirit')}
        onFocus={powerOn}
        onBlur={powerOff}
        onMouseEnter={powerOn}
        onMouseLeave={powerOff}
        onKeyDown={handleKey}
      >
        <SpiritSVG />
      </Panel>
    </div>
  )
}
