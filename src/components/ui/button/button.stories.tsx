import type { Meta, StoryObj } from "@storybook/react"
import { ArrowRight, Search } from "lucide-react"
import { Button } from "./button"
import { IconButton } from "./IconButton"

const meta: Meta<typeof Button> = {
  title: "Base/Button",
  component: Button,
  args: {
    children: "click here",
    variant: "filled",
    color: "primary",
    size: "md",
  },
  argTypes: {
    variant: { control: "inline-radio", options: ["filled", "outlined", "ghost", "link"] },
    color: { control: "inline-radio", options: ["primary", "secondary", "contrast", "critical", "neutral"] },
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
    loading: { control: "boolean" },
    active: { control: "boolean" },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {}

export const WithIcon: Story = {
  args: {
    children: (
      <>
        view my work
        <ArrowRight />
      </>
    ),
  },
}

export const WithMotion: Story = {
  render: (args) => (
    <Button
      motion={{
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: {
          duration: 0.6,
          delay: 0.24,
        },
      }}
      variant="filled"
      color="primary"
      {...args}
    >
      View my work
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
    </Button>
  )
}

export const Loading: Story = {
  args: { loading: true, children: "saving" },
}

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      <Button {...args} variant="filled">filled</Button>
      <Button {...args} variant="outlined">outlined</Button>
      <Button {...args} variant="ghost">ghost</Button>
      <Button {...args} variant="link">link</Button>
    </div>
  ),
}

export const Colors: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      <Button {...args} color="primary">primary</Button>
      <Button {...args} color="neutral">neutral</Button>
      <Button {...args} color="secondary">secondary</Button>
      <Button {...args} color="contrast">contrast</Button>
      <Button {...args} color="critical">critical</Button>
    </div>
  ),
}

export const Icon: StoryObj<typeof IconButton> = {
  render: () => <IconButton aria-label="Search" icon={<Search />} />,
}
