type ArrowIconProps = {
  /** "ne" = diagonal up-right (external link style), "e" = horizontal right */
  direction?: "ne" | "e";
  size?: number;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Renders a crisp vector arrow instead of a raw unicode character (↗ / →).
 * Unicode arrow glyphs get swapped for their emoji presentation on some
 * mobile systems (notably iOS), which looks inconsistent with the rest of
 * the UI. An inline SVG renders identically everywhere.
 */
export default function ArrowIcon({ direction = "ne", size = 16, className, style }: ArrowIconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={style}
    >
      {direction === "ne" ? (
        <>
          <path d="M4 12 12 4" />
          <path d="M6 4h6v6" />
        </>
      ) : (
        <>
          <path d="M2 8h12" />
          <path d="M9 3l5 5-5 5" />
        </>
      )}
    </svg>
  );
}
