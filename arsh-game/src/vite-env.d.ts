/// <reference types="vite/client" />

import type { FunctionComponent, SVGProps } from 'react'

declare module '*.svg' {
  export const ReactComponent: FunctionComponent<SVGProps<SVGSVGElement>>
  const src: string
  export default src
}
