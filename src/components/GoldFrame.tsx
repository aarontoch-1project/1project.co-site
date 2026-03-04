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
    <div className={`relative ${className}`} style={{ paddingLeft: 20, paddingBottom: 20 }}>
      {/* Gold accent block - BOTTOM LEFT, solid filled rectangle */}
      <div
        className="absolute bg-gold"
        style={{ top: 20, left: 0, right: 20, bottom: 0, zIndex: 0 }}
      />
      {/* Media container - 4:3 ratio matching original (~575x430) */}
      <div className="relative z-10 aspect-[4/3] overflow-hidden">
        {children}
      </div>
    </div>
  );
}
