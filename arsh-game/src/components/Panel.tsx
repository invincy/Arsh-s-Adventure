import { forwardRef, ReactNode } from 'react'
import { useGameStore } from '@/store/useGameStore'
import { Howl } from 'howler'

const hoverSound = new Howl({ src: ['/audio/hover.mp3'], preload: false })
const clickSound = new Howl({ src: ['/audio/click.mp3'], preload: false })

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id: 'mind' | 'body' | 'spirit'
  color: string
  label: string
  onActivate: () => void
  children: ReactNode
}

const Panel = forwardRef<HTMLButtonElement, Props>(
  ({ id, color, label, onActivate, children, ...rest }, ref) => {
    const sfx = useGameStore((s) => s.sfx)
    return (
      <button
        type="button"
        ref={ref}
        className={`panel ${id}`}
        style={{ '--panel-color': color } as React.CSSProperties}
        aria-label={label}
        onClick={(e) => {
          rest.onClick?.(e)
          if (sfx) clickSound.play()
          onActivate()
        }}
        onMouseEnter={(e) => {
          rest.onMouseEnter?.(e)
          if (sfx) hoverSound.play()
        }}
        {...rest}
      >
        {children}
      </button>
    )
  }
)

export default Panel
