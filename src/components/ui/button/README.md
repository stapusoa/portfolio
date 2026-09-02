# Button

Two components built on Base UI's `Button` primitive:

- **`Button`** — text (and text + icon) buttons.
- **`IconButton`** — icon-only buttons. Separate because an icon has no text,
  so `aria-label` is **required** by the type.

```tsx
import { Button, IconButton } from "@/components/ui/button"
```

## Axes

Styling is three independent axes (Radix/MUI style), not one merged `variant`:

| Prop      | Values                                                          | Default   |
| --------- | -------------------------------------------------------------- | --------- |
| `variant` | `filled` \| `outlined` \| `ghost` \| `link`                     | `filled`  |
| `color`   | `primary` \| `secondary` \| `contrast` \| `critical` \| `neutral` | `primary` |
| `size`    | `sm` \| `md` \| `lg`                                            | `md`      |

Colors are applied via two CSS custom properties (`--btn`, `--btn-fg`) so a new
color is one line in `styles.ts` and works across every variant — see the file.

## Other props

- `loading` — shows a spinner, sets `aria-busy`, and disables the button.
- `active` — pressed/current look for toggles; sets `aria-pressed`.
- `render` — Base UI polymorphism. Render as a link or router `Link` while
  keeping button styling (preferred over an `as` prop):

```tsx
<Button render={<Link to="/work" />}>view my work</Button>
<Button render={<a href="/resume.pdf" download />} variant="link">download resume</Button>
```

There is intentionally **no** `state` / `inFocus` prop: hover/focus/active are
CSS pseudo-classes (`:hover`, `:focus-visible`, `:active`), not React state.

## IconButton

```tsx
<IconButton aria-label="Search" icon={<Search />} />
<IconButton aria-label="About" icon={<User />} render={<Link to="/about" />} />
```

## Class-only usage

For cases where you can't render a `Button` (e.g. styling a bare router `Link`),
import `buttonVariants` and pass the same axes:

```tsx
<Link to="/" className={buttonVariants({ variant: "outlined", size: "lg" })}>home</Link>
```
