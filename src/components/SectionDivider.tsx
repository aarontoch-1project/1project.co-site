interface SectionDividerProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionDivider({ children, className = "" }: SectionDividerProps) {
  return (
    <div className={`flex items-center gap-6 ${className}`}>
      <div className="flex-1 h-px bg-rule" />
      <div className="shrink-0">{children}</div>
      <div className="flex-1 h-px bg-rule" />
    </div>
  );
}
