import type { Meta, StoryObj } from '@storybook/react'

import { Link } from './Link'

const meta: Meta<typeof Link> = {
  component: Link,
}

export default meta
type Story = StoryObj<typeof Link>

export const Underlined: Story = {
  args: {
    children: 'Underlined',
    isDisabled: false,
    showUnderlineOnlyOnHover: false,
  },
}

export const NotUnderlined: Story = {
  args: {
    children: 'Not underlined',
    isDisabled: false,
    showUnderlineOnlyOnHover: true,
  },
}
