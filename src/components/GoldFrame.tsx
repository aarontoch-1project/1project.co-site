interface GoldFrameProps {
  children: React.ReactNode;
  direction?: "right" | "left";
  className?: string;
}

export function GoldFrame({
  children,
  direction = "right",
  className = "",
}: GoldFrameProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Gold border frame offset behind the content */}
      <div
        className="absolute bg-gold z-0"
        style={
          direction === "right"
            ? { top: 20, left: 20, right: -20, bottom: -20 }
            : { top: -20, left: -20, right: 20, bottom: 20 }
        }
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
