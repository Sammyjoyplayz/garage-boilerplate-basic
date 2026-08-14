/**
 * Team feature types.
 *
 * The team roster is static configuration (see `data.ts`) rather than a
 * Firestore collection — it's a small, fixed set of people that changes rarely,
 * so it lives in the repo and deploys with the app.
 */

export type TeamRole = 'PM' | 'BA' | 'UX' | 'Dev 1' | 'Dev 2'

export interface TeamMember {
  /** Full name, as it should appear on the page. */
  name: string
  /** Project role. */
  role: TeamRole | string
  /** One- or two-sentence blurb about the person. */
  blurb: string
  /**
   * Optional photo. Put the image in `frontend/public/team/` and reference it
   * with a leading slash, e.g. `/team/jane.jpg`. If omitted, an initials avatar
   * is shown instead.
   */
  photoUrl?: string
}

export interface TeamInfo {
  /** Display name of the team. */
  name: string
  /** Short description of the team / the project. */
  blurb: string
  members: TeamMember[]
}
