import type { CollectionAfterChangeHook, CollectionAfterDeleteHook, GlobalAfterChangeHook } from 'payload'

/** Purge the whole site cache. Content changes are rare, so one broad purge keeps every page consistent. */
const purge = async (reason: string, log?: { info: (m: string) => void }) => {
  try {
    const { revalidatePath } = await import('next/cache')
    revalidatePath('/', 'layout')
    log?.info(`Revalidated site (${reason})`)
  } catch {
    // Outside a Next.js request (seed script, CLI): nothing to purge.
  }
}

export const revalidateAfterChange =
  (collection: string): CollectionAfterChangeHook =>
  async ({ doc, req, context }) => {
    if (!context?.disableRevalidate) await purge(`${collection}:${doc?.slug ?? doc?.id}`, req.payload.logger)
    return doc
  }

export const revalidateAfterDelete =
  (collection: string): CollectionAfterDeleteHook =>
  async ({ doc, req, context }) => {
    if (!context?.disableRevalidate) await purge(`${collection}:delete`, req.payload.logger)
    return doc
  }

export const revalidateAll: CollectionAfterChangeHook & CollectionAfterDeleteHook = async ({ doc, req, context }) => {
  if (!context?.disableRevalidate) await purge('collection', req.payload.logger)
  return doc
}

export const revalidateGlobal: GlobalAfterChangeHook = async ({ doc, req, context, global }) => {
  if (!context?.disableRevalidate) await purge(`global:${global.slug}`, req.payload.logger)
  return doc
}
