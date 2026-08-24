// Shared Tailwind class presets used across the case-study/work UI.

export const cardStyles = {
  base: "group cursor-pointer overflow-hidden rounded-xl border border-border bg-card text-card-foreground transition-all hover:shadow-lg",
  imageWrapper: "relative w-full aspect-[4/3] overflow-hidden",
  image: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105",
  content: "flex flex-col gap-2 p-6",
  title: "text-xl font-semibold lowercase",
  subtitle: "text-muted-foreground",
  footer: "mt-4 flex items-center justify-between",
  tag: "text-sm text-muted-foreground",
} as const
