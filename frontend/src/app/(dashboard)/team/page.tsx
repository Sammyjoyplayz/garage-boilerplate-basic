import type { Metadata } from 'next'
import { requireAuth } from '@/actions/auth.actions'
import { PageHeader } from '@/components/layout/PageHeader'
import { TeamMemberCard } from '@/features/team/components/TeamMemberCard'
import { team } from '@/features/team/data'

export const metadata: Metadata = { title: 'Team' }

export default async function TeamPage() {
  await requireAuth()

  return (
    <div className="space-y-6">
      <PageHeader title={team.name} description={team.blurb} />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {team.members.map((member) => (
          <TeamMemberCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  )
}
