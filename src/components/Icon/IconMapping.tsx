import {
  AccessibleIcon,
  
} from '../icons'

const IconMapping = {
  accessible: <AccessibleIcon />,
  
}

type AvailableIcons = keyof typeof IconMapping

export { IconMapping }
export type { AvailableIcons }
