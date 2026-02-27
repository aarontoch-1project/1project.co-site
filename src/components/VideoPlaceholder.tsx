interface VideoPlaceholderProps {
  /** Describe what video goes here for future replacement */
  label?: string;
  aspect?: "video" | "square" | "hero";
  className?: string;
}

export function VideoPlaceholder({
  label = "Video Coming Soon",
  aspect = "video",
  className = "",
}: VideoPlaceholderProps) {
  const aspectClass = {
    video: "aspect-video",
    square: "aspect-square",
    hero: "min-h-screen",
  }[aspect];

  return (
    /* TODO: Replace with <video> tag — see label for content description */
    <div
      className={`bg-dark-deep flex items-center justify-center ${aspectClass} ${className}`}
    >
      <span className="text-sm text-muted">{label}</span>
    </div>
  );
}
