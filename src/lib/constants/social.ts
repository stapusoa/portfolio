import type { ComponentType } from 'react'

import {
  BehanceIcon,
  CodepenIcon,
  DribbbleIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/ui/icons/social'

export type SocialLink = {
  /** Accessible name; also the tooltip label. */
  name: string
  url: string
  Icon: ComponentType
}

/**
 * Single source of truth for the social profiles.
 *
 * This list previously existed three times — inline in `Footer.tsx`, again in
 * `About.tsx` (identical but for a colour field), and a two-entry variant in
 * `SocialLinks.tsx` — carrying ~200 duplicated lines of SVG path data between
 * them. Adding a profile meant editing three files and they had already drifted.
 */
export const socialLinks: SocialLink[] = [
  { name: 'Codepen', url: 'https://codepen.io/sara-tapusoa-the-decoder', Icon: CodepenIcon },
  { name: 'GitHub', url: 'https://github.com/stapusoa', Icon: GitHubIcon },
  { name: 'Dribbble', url: 'https://dribbble.com/Sarataps', Icon: DribbbleIcon },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/stapusoa/', Icon: LinkedInIcon },
  { name: 'Behance', url: 'https://www.behance.net/saratapusoa1', Icon: BehanceIcon },
]
