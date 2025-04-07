import React, { ReactNode } from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  header?: string;
  children: ReactNode;
  footer?: string;
  size?: "card" | "small" | "medium" | "large";
}

const sizeClasses = {
  card: "max-w-[200px] h-[100px] p-[10px]",
  small: "max-w-[300px] h-[220px] p-[20px]",
  medium: "max-w-[500px] h-[300px] p-[35px]",
  large: "max-w-[700px] h-[400px] p-[50px]",
};

const GlassCard: React.FC<GlassCardProps> = ({
  header,
  children,
  footer,
  size = "medium",
  className = "",
  style,
  ...props
}) => {
  // If a backgroundColor is provided in the style prop, don't add the default bg-white/45 class
  const defaultBgClass = style?.backgroundColor ? "" : "bg-white/45";
  return (
    <div
      {...props}
      style={style} // Inline styles, including backgroundColor, will be applied here
      className={`${sizeClasses[size]} ${className} flex flex-col justify-between border border-white/25 rounded-[20px] ${defaultBgClass} shadow-[0_0_10px_1px_rgba(0,0,0,0.25)] backdrop-blur-[15px]`}
    >
      <div>
        {header && <h3 className="text-xl font-bold mb-2">{header}</h3>}
        {children}
      </div>
      {footer && <p className="text-[0.65em] text-[#446]">{footer}</p>}
    </div>
  );
};

export default GlassCard;