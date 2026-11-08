type BrandMarkProps = {
  className?: string;
  title?: string;
};

export function BrandMark({ className, title }: BrandMarkProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} role={title ? "img" : "presentation"} aria-hidden={title ? undefined : true}>
      {title ? <title>{title}</title> : null}
      <path
        fill="currentColor"
        d="M32 6.5c.4 0 8.8 12.2 13.2 21.2 3.7 7.6 6.3 14.2 6.3 19.6 0 11.4-8.7 18.7-19.5 18.7S12.5 58.7 12.5 47.3c0-5.4 2.6-12 6.3-19.6C23.2 18.7 31.6 6.5 32 6.5Z"
      />
      <path
        fill="currentColor"
        opacity="0.28"
        d="M24.2 28.5c2.2-3.6 4.8-8.2 6.4-12.4 1.8 5.6 5.4 12.4 8.6 17.6 2.2 3.6 3.6 6.6 3.6 9.4 0 1.2-.2 2.3-.5 3.4-2.4-6.2-8.4-10.8-15.2-10.8-2.2 0-4.3.4-6.2 1.1.6-3.1 1.8-5.8 3.3-8.3Z"
      />
    </svg>
  );
}
