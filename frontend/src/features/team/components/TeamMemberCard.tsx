import Image from 'next/image'
import type { TeamMember } from '../types'

function initials(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('')
}

export function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-lg border border-zinc-200 bg-white p-6 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      {member.photoUrl ? (
        <Image
          src={member.photoUrl}
          alt={member.name}
          width={64}
          height={64}
          className="h-16 w-16 rounded-full object-cover"
        />
      ) : (
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-100 text-lg font-semibold text-zinc-500 dark:bg-zinc-800">
          {initials(member.name) || '?'}
        </div>
      )}

      <div>
        <p className="font-semibold">{member.name}</p>
        <p className="text-sm text-zinc-500">{member.role}</p>
      </div>

      <p className="text-sm text-zinc-600 dark:text-zinc-400">{member.blurb}</p>
    </div>
  )
}
