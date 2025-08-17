import React from 'react'

export function trapArrowNavigation(
  e: React.KeyboardEvent<HTMLButtonElement>,
  refs: React.RefObject<HTMLButtonElement>[]
) {
  const idx = refs.findIndex((r) => r.current === e.currentTarget)
  if (idx === -1) return
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    e.preventDefault()
    refs[(idx + 1) % refs.length].current?.focus()
  }
  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    e.preventDefault()
    refs[(idx - 1 + refs.length) % refs.length].current?.focus()
  }
}
