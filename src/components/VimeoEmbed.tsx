interface VimeoEmbedProps {
  videoId: string;
  hash?: string;
  /** "background" = autoplay/loop/muted, "player" = with controls */
  mode?: "background" | "player";
  aspect?: "video" | "square" | "hero" | "wide";
  className?: string;
}

export function VimeoEmbed({
  videoId,
  hash,
  mode = "background",
  aspect = "video",
  className = "",
}: VimeoEmbedProps) {
  const aspectClass = {
    video: "aspect-video",
    square: "aspect-square",
    hero: "min-h-screen",
    wide: "aspect-[21/9]",
  }[aspect];

  const hashParam = hash ? `h=${hash}&` : "";

  const src =
    mode === "background"
      ? `https://player.vimeo.com/video/${videoId}?${hashParam}background=1&autoplay=1&loop=1&muted=1&quality=1080p`
      : `https://player.vimeo.com/video/${videoId}?${hashParam}title=0&byline=0&portrait=0`;

  return (
    <div
      className={`relative overflow-hidden bg-dark-deep ${aspectClass} ${className}`}
    >
      <iframe
        src={src}
        frameBorder="0"
        allow="autoplay; fullscreen"
        loading="lazy"
        className={
          mode === "background"
            ? "absolute top-1/2 left-1/2 w-[110%] h-[110%] -translate-x-1/2 -translate-y-1/2 object-cover"
            : "absolute inset-0 w-full h-full"
        }
        title={`Vimeo video ${videoId}`}
      />
    </div>
  );
}
