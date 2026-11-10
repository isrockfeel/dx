import type { SidebarBrandMarkOwnerProps } from '@deepseek-ai/dsh-client-ui-sidebar/client'

/** Light/dark palette used by the RIOTWORK workspace; semantic state colors remain untouched. */
export const RIOTWORK_THEME_TOKENS = {
  '--dsw-alias-bg-base': { light: '#F4EDDF', dark: '#151411' },
  '--dsw-alias-bg-layer-1': { light: '#FBF7EE', dark: '#1D1A17' },
  '--dsw-alias-bg-layer-2': { light: '#EEE6D8', dark: '#25221D' },
  '--dsw-alias-bg-layer-3': { light: '#E4DACA', dark: '#2D2922' },
  '--dsw-alias-bg-overlay': { light: '#FCF9F2', dark: '#332E26' },
  '--dsw-alias-border-l1': { light: 'rgb(23 22 20 / 8%)', dark: 'rgb(244 237 223 / 8%)' },
  '--dsw-alias-border-l2': { light: 'rgb(23 22 20 / 16%)', dark: 'rgb(244 237 223 / 16%)' },
  '--dsw-alias-brand-primary': { light: '#C83D31', dark: '#F16B5D' },
  '--dsw-alias-brand-primary-invert': { light: '#F4EDDF', dark: '#171614' },
  '--dsw-alias-brand-text': { light: '#A92F27', dark: '#FF897A' },
  '--dsw-alias-button-primary-fill': { light: '#C83D31', dark: '#F16B5D' },
  '--dsw-alias-button-primary-hover': { light: '#A92F27', dark: '#D94B3E' },
  '--dsw-alias-label-primary': { light: '#171614', dark: '#F4EDDF' },
  '--dsw-alias-label-secondary': { light: '#5B554B', dark: '#C9C0B1' },
  '--dsw-alias-label-primary-inverted': { light: '#F4EDDF', dark: '#171614' },
  '--dsw-alias-link': { light: '#B83228', dark: '#FF897A' },
  '--dsw-alias-interactive-bg-hover': { light: 'rgb(200 61 49 / 8%)', dark: 'rgb(241 107 93 / 12%)' },
  '--dsw-specific-sidebar-fill': { light: '#EDE5D7', dark: '#1B1916' },
} as const

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
