import type { Access, FieldAccess, PayloadRequest } from 'payload'

export type Role = 'admin' | 'editor' | 'sales'

const roleOf = (req: PayloadRequest): Role | undefined =>
  (req.user as { role?: Role } | null | undefined)?.role

export const anyone: Access = () => true

export const isLoggedIn: Access = ({ req }) => Boolean(req.user)

export const isAdmin: Access = ({ req }) => roleOf(req) === 'admin'

export const isAdminField: FieldAccess = ({ req }) => roleOf(req) === 'admin'

/** Admin and Editor manage content. */
export const isContentManager: Access = ({ req }) => {
  const role = roleOf(req)
  return role === 'admin' || role === 'editor'
}

/** Admin and Sales handle leads. */
export const isLeadHandler: Access = ({ req }) => {
  const role = roleOf(req)
  return role === 'admin' || role === 'sales'
}

/** Published documents for the public, drafts for logged-in users. */
export const publishedOrLoggedIn: Access = ({ req }) => {
  if (req.user) return true
  return { _status: { equals: 'published' } }
}

export const adminOrSelf: Access = ({ req }) => {
  if (!req.user) return false
  if (roleOf(req) === 'admin') return true
  return { id: { equals: req.user.id } }
}
