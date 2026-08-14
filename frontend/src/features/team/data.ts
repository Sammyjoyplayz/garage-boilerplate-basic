import type { TeamInfo } from './types'

/**
 * Team roster — SCAFFOLD / PLACEHOLDER DATA.
 *
 * TODO (team): replace everything below with your real team details.
 *   - `name`   → your team name (e.g. "Team 12")
 *   - `blurb`  → one or two sentences about the team / project
 *   - members  → one entry per person (name, role, blurb, optional photoUrl)
 *
 * To add a photo: drop the image in `frontend/public/team/` and set
 * `photoUrl: '/team/<file>.jpg'`. Without a photo an initials avatar is shown.
 */
export const team: TeamInfo = {
  name: 'Team X',
  blurb: 'TODO: a short blurb about your team and the project you are building.',
  members: [
    { name: 'TODO Name', role: 'PM', blurb: 'TODO: short blurb.' },
    { name: 'TODO Name', role: 'BA', blurb: 'TODO: short blurb.' },
    { name: 'TODO Name', role: 'UX', blurb: 'TODO: short blurb.' },
    { name: 'TODO Name', role: 'Dev 1', blurb: 'TODO: short blurb.' },
    { name: 'TODO Name', role: 'Dev 2', blurb: 'TODO: short blurb.' },
  ],
}
