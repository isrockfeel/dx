/** RIOTWORK brand occupants and semantic palette for the shared client workspace. */
import type { Context as ClientContext } from '@deepseek-ai/cordis'
import type {} from '@deepseek-ai/dsh-client-ui-renderer/client'
import type {} from '@deepseek-ai/dsh-client-ui-sidebar/client'
import type {} from '@deepseek-ai/dsh-client-ui-theme/client'
import { RiotworkBrandMark, RiotworkBrandName, RIOTWORK_THEME_TOKENS } from './Brand.tsx'

/** Required services: the UI slot registry and reversible theme runtime. */
export const inject = ['slots', 'theme']

const PLUGIN_ID = '@deepseek-ai/dsh-client-ui-brand-official'

/** Register the brand mark, wordmark, and reversible semantic palette. */
export function apply(ctx: ClientContext): void {
  ctx.effect(() => ctx.theme.overrideTokens(PLUGIN_ID, RIOTWORK_THEME_TOKENS), 'RIOTWORK workspace palette')
  ctx.slots.inject('sidebar.brand.mark', () =>
    ctx.slots.inject('sidebar.brand.name', function* () {
      yield ctx.slots.register({ name: 'sidebar.brand.mark' }, RiotworkBrandMark)
      yield ctx.slots.register({ name: 'sidebar.brand.name' }, RiotworkBrandName)
    }))
}
