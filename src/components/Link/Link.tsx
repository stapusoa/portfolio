import classNames from 'classnames'
import type { AvailableIcons } from '../Icon/index'
import { Icon } from '../Icon/Icon'

type NativeButton = React.ButtonHTMLAttributes<HTMLButtonElement>

type NativeAnchor = React.AnchorHTMLAttributes<HTMLAnchorElement>

type BaseLinkProps = {
  children?: string
  endIcon?: AvailableIcons
  startIcon?: AvailableIcons
  showUnderlineOnlyOnHover?: boolean
}

type LinkButtonProps = BaseLinkProps &
  NativeButton & {
    isDisabled?: boolean
    onClick: React.MouseEventHandler<HTMLButtonElement>
  }

// if we make href required, then when href is provided we make it an anchor tag and not a button nor a router link
type LinkAnchorProps = BaseLinkProps & NativeAnchor & { href: string }

const Link = ({
  children,
  endIcon,
  showUnderlineOnlyOnHover,
  startIcon,
  ...props
}: LinkButtonProps | LinkAnchorProps) => {
  if ('href' in props) {
    const { href, target, ...remainingProps } = props

    const aLabelClasses = classNames({
      [underlineClasses]: !showUnderlineOnlyOnHover,
      [hoverUnderlineClasses]: showUnderlineOnlyOnHover,
    })

    return (
      <a
        {...remainingProps}
        aria-label={children}
        className={baseLinkClasses}
        href={href}
        target={target}
      >
        {startIcon && <Icon name={startIcon} />}
        <span className={aLabelClasses}>{children}</span>
        {endIcon && <Icon name={endIcon} />}
      </a>
    )
  } else {
    const { onClick, isDisabled, ...remainingProps } = props
    const buttonLabelClasses = classNames({
      [underlineClasses]: !showUnderlineOnlyOnHover,
      [hoverUnderlineClasses]: showUnderlineOnlyOnHover && !isDisabled,
    })

    return (
      <button
        {...remainingProps}
        aria-label={children}
        className={baseLinkClasses}
        disabled={isDisabled}
        type='button'
        onClick={onClick}
      >
        {startIcon && <Icon name={startIcon} size='small' />}
        <span className={buttonLabelClasses}>{children}</span>
        {endIcon && <Icon name={endIcon} size='small' />}
      </button>
    )
  }
}

const underlineClasses = 'b-b-1 b-b-solid b-valley'

const hoverUnderlineClasses = 'hover:b-b-1 hover:b-b-solid'

const baseLinkClasses =
  'type-link-desktop inline-flex flex-row gap-1 items-center fw-700 h-[22px] md:h-6 bg-transparent b-none c-forest box-border p-0 pb-1 decoration-none w-fit cursor-pointer disabled:cursor-default disabled:opacity-60 hover:c-newForest transition-all duration-200 focus:outline-1 focus:outline-offset-3 focus:outline-valley [&>*]:hover:b-newForest!'

  export default Link;