import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from './Icon'
import { IconMapping } from './IconMapping'
import type { AvailableIcons } from './IconMapping'

export default {
  title: 'Iconography',
  component: Icon,
} satisfies Meta<typeof Icon>

type Story = StoryObj<typeof Icon>

const availableIcons = Object.keys(IconMapping) as AvailableIcons[]

/**
 * Double-click on any icon to copy its code.
 */
export const Iconography: Story = {
  render: args => (
    <div className='grid grid-cols-4 gap-4 md:grid-cols-6 lg:grid-cols-8'>
      {availableIcons.map(iconName => (
        <button
          key={iconName}
          className='border-1 border-grey-300 flex flex-col items-center gap-2 rounded border-solid bg-transparent p-2 hover:cursor-pointer hover:shadow'
          onDoubleClick={async () => {
            const code = `<Icon name="${iconName}" />`
            try {
              await navigator.clipboard.writeText(code)
            } catch (error) {
              console.error(error)
            }
          }}
        >
          <Icon key={iconName} {...args} name={iconName} />
          <span className='text-grey-700 line-clamp-1 w-full'>{iconName}</span>
        </button>
      ))}
    </div>
  ),
}
