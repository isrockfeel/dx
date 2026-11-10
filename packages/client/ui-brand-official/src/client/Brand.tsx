import type { SidebarBrandMarkOwnerProps } from '@deepseek-ai/dsh-client-ui-sidebar/client'

/** Render the RIOTWORK patch mark in the sidebar's host-supplied icon slot. */
export function RiotworkBrandMark({ size }: SidebarBrandMarkOwnerProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5.5 2H18.7L17.3 6.1L20.5 8.8L18.1 22H4.7L6.1 17.2L2.7 14.1L5.5 2Z"
        fill="#E94E3D" stroke="currentColor" strokeWidth="0.9" strokeLinejoin="bevel"/>
      <path d="M14.9 4.8L8.3 13H12.8L10.9 19.3L17.4 10.1H13.1L15.7 4.8H14.9Z"
        fill="#F4EDDF"/>
    </svg>
  )
}

/** Render the RIOTWORK name as an independent brand slot. */
export function RiotworkBrandName() {
  return (
    <svg width="112" height="24" viewBox="0 0 112 24" fill="none" aria-hidden="true">
      <text x="0" y="18" fill="currentColor" fontFamily="Arial Black, Impact, sans-serif"
        fontSize="17" fontWeight="900" letterSpacing="-0.7">RIOTWORK</text>
      <path d="M88 3H111V6H88Z" fill="#D9EC46"/>
    </svg>
  )
}
