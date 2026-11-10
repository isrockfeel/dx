// @vitest-environment jsdom
import { Context } from '@deepseek-ai/cordis'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { cleanup, render } from '@testing-library/react'
import { SlotRegistry } from '@deepseek-ai/dsh-client-ui-renderer/client'
import { apply, inject } from '../src/client/index.ts'
import { RiotworkBrandMark, RiotworkBrandName, RIOTWORK_THEME_TOKENS } from '../src/client/Brand.tsx'
import { apply as hostApply } from '../src/index.ts'

afterEach(() => {
  cleanup()
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
})

const HOLES = ['sidebar.brand.mark', 'sidebar.brand.name'] as const

async function bench(declare = true) {
  const ctx = new Context()
  await ctx.plugin(SlotRegistry).await()
  const slots = ctx.get('slots') as SlotRegistry
  const themeDisposer = vi.fn()
  const theme = { overrideTokens: vi.fn(() => themeDisposer) }
  const themeProvider = await ctx.plugin({
    name: 'test-theme-provider',
    apply(provider) { provider.provide('theme', theme) },
  }).await()
  const declareHoles = () => slots.register({
    name: 'root',
    children: Object.fromEntries(HOLES.map(name => [name, { kind: 'single', scope: 'root' }])),
  } as never, () => null)
  const disposeHoles = declare ? declareHoles() : undefined
  return { ctx, slots, theme, themeDisposer, themeProvider, declareHoles, disposeHoles }
}

describe('RIOTWORK browser-brand plugin', () => {
  it('keeps the host Loader entry inert', () => {
    expect(hostApply).not.toThrow()
  })

  it('declares its runtime dependencies explicitly', () => {
    expect(inject).toEqual(['slots', 'theme'])
  })

  it('registers both sidebar brand occupants and the light/dark product palette', async () => {
    const subject = await bench()
    const fiber = subject.ctx.plugin({ inject: [...inject], apply })
    await fiber.await()
    for (const hole of HOLES) expect(subject.slots.entries(hole)).toHaveLength(1)
    expect(subject.theme.overrideTokens).toHaveBeenCalledWith(
      '@deepseek-ai/dsh-client-ui-brand-official',
      RIOTWORK_THEME_TOKENS,
    )
    expect(RIOTWORK_THEME_TOKENS['--dsw-alias-brand-primary']).toEqual({
      light: '#C83D31',
      dark: '#F16B5D',
    })
    await fiber.dispose()
    expect(subject.themeDisposer).toHaveBeenCalledOnce()
    for (const hole of HOLES) expect(subject.slots.entries(hole)).toHaveLength(0)
    await subject.themeProvider.dispose()
  })

  it('supports slot declarations arriving after the brand plugin', async () => {
    const subject = await bench(false)
    const fiber = subject.ctx.plugin({ inject: [...inject], apply })
    await fiber.await()
    for (const hole of HOLES) expect(subject.slots.entries(hole)).toHaveLength(0)
    subject.declareHoles()
    await Promise.resolve()
    for (const hole of HOLES) expect(subject.slots.entries(hole)).toHaveLength(1)
    await fiber.dispose()
    await subject.themeProvider.dispose()
    for (const hole of HOLES) expect(subject.slots.entries(hole)).toHaveLength(0)
  })

  it('renders the brand name and scales the mark through its host-sized slot', () => {
    const name = render(<RiotworkBrandName />)
    expect(name.container.querySelector('svg')?.getAttribute('viewBox')).toBe('0 0 112 24')
    name.unmount()

    const mark = render(<RiotworkBrandMark size={34} />)
    expect(mark.container.querySelector('svg')?.getAttribute('width')).toBe('34')
    mark.rerender(<RiotworkBrandMark size={24} />)
    expect(mark.container.querySelector('svg')?.getAttribute('width')).toBe('24')
  })
})
