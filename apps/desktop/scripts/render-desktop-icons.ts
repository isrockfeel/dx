/** Build Electron's raster and tray assets from the canonical RIOTWORK SVG artwork. */
import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'
import { packIco, renderTrayIconEntries } from './render-tray-icon.ts'

const resources = fileURLToPath(new URL('../resources/', import.meta.url))
const sources = {
  app: fileURLToPath(new URL('../resources/icon.svg', import.meta.url)),
  macos: fileURLToPath(new URL('../resources/icon-macos.svg', import.meta.url)),
  windows: fileURLToPath(new URL('../resources/icon-windows.svg', import.meta.url)),
} as const

async function render(source: string, target: string): Promise<void> {
  const svg = await readFile(source)
  const png = await sharp(svg).resize(1024, 1024, { fit: 'fill' }).png().toBuffer()
  await writeFile(target, png)
}

/** Generate the exact paths electron-builder and the Windows shell load. */
export async function renderDesktopIcons(): Promise<void> {
  await Promise.all([
    render(sources.app, `${resources}icon.png`),
    render(sources.macos, `${resources}icon-macos.png`),
    render(sources.windows, `${resources}icon-windows.png`),
  ])
  const entries = await renderTrayIconEntries(await readFile(sources.windows))
  await writeFile(`${resources}tray-windows.ico`, packIco(entries))
}

if (process.argv[1] !== undefined && import.meta.filename === process.argv[1]) {
  await renderDesktopIcons()
  process.stdout.write('desktop icons: RIOTWORK PNG and ICO assets generated\\n')
}
