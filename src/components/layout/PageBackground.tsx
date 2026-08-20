interface PageBackgroundProps {
  src: string;
  alt?: string;
  tabletSrc?: string;
  desktopSrc?: string;
  className?: string;
}

export function PageBackground({
  src,
  tabletSrc,
  desktopSrc,
  alt = "",
  className = "",
}: PageBackgroundProps) {
  return (
    <picture aria-hidden="true">
      {desktopSrc && (
        <source media="(min-width: 1024px)" srcSet={desktopSrc} />
      )}

      {tabletSrc && (
        <source media="(min-width: 768px)" srcSet={tabletSrc} />
      )}

      <img
        src={src}
        alt={alt}
        className={`fixed inset-0 z-0 h-full w-full object-cover ${className}`}
      />
    </picture>
  );
}

{/* 
Usage:

For one image with different cropping:
<PageBackground
  src="/images/about.webp"
  className="
    object-center
    md:object-[60%_center]
    lg:object-top
  "
/>

For genuinely different images:
<PageBackground
  src="/images/about-mobile.webp"
  tabletSrc="/images/about-tablet.webp"
  desktopSrc="/images/about-desktop.webp"
/>

And you can mix them too:
<PageBackground
  src="/images/about-mobile.webp"
  desktopSrc="/images/about-desktop.webp"
  className="object-center lg:object-top"
/>

  */}