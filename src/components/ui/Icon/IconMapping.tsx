import {
  AccessibleIcon,
  CloseIcon,
  WhoIcon,
  WhyIcon,
  WhenIcon,
  WhereIcon,
  BackArrowIcon,
  LinkedinIcon,
  GithubIcon,
} from '../icons'

const IconMapping = {
  accessible: <AccessibleIcon />,
  close: <CloseIcon />,
  who: <WhoIcon />,
  why: <WhyIcon />,
  when: <WhenIcon />,
  where: <WhereIcon />,
  backArrow: <BackArrowIcon />,
  linkedin: <LinkedinIcon />,
  github: <GithubIcon />,
}

type AvailableIcons = keyof typeof IconMapping

export { IconMapping }
export type { AvailableIcons }
