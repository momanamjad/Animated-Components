'use client'
import { ReactLenis } from '@studio-freight/react-lenis'

export default function Scroll({children}) {
  

  return (
    <ReactLenis root options={{lerp:0.11}}>
      { children }
    </ReactLenis>
  )
}