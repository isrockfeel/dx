/** RIOTWORK occupants for the shared sidebar brand slots. */
import type { Context as ClientContext } from '@deepseek-ai/cordis'
import type {} from '@deepseek-ai/dsh-client-ui-renderer/client'
import type {} from '@deepseek-ai/dsh-client-ui-sidebar/client'
import { RiotworkBrandMark, RiotworkBrandName } from './Brand.tsx'

/** Required service: the UI slot registry. */
export const inject = ['slots']

/** Register the two independent brand occupants once the sidebar declares them. */
export function apply(ctx: ClientContext): void {
  ctx.slots.inject('sidebar.brand.mark', () =>
    ctx.slots.inject('sidebar.brand.name', function* () {
      yield ctx.slots.register({ name: 'sidebar.brand.mark' }, RiotworkBrandMark)
      yield ctx.slots.register({ name: 'sidebar.brand.name' }, RiotworkBrandName)
    }))
}
