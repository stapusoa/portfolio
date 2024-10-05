import classNames from 'classnames'

const getLogoUrl = (variant: MyLogoProps['variant']): string => {
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://stapusoa.github.io/portfolio2024/public/images/webp'
      : 'http://localhost:5001/uploads/webp';

  if (variant === 'primary')
    return `${baseUrl}/logo-primary.webp`;

  if (variant === 'green')
    return `${baseUrl}/logo-green.webp`;

  if (variant === 'white')
    return `${baseUrl}/logo-white.webp`;

  if (variant === 'symbol-green')
    return `${baseUrl}/symbol-green.webp`;

  return `${baseUrl}/logo-primary.webp`; // Default fallback
};

interface MyLogoProps {
  className?: string
  variant?: 'green' | 'primary' | 'symbol-green' | 'white'
}

export const MyLogo = ({
  className = '',
  variant = 'primary',
}: MyLogoProps) => (
  <img
    alt='Sara Tapusoa logo'
    className={classNames('h-auto max-w-full', className)}
    fetchPriority='high'
    src={getLogoUrl(variant)}
  />
)
