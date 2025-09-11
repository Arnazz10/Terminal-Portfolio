import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
  size?: "sm" | "md" | "lg";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "md", ...props }, ref) => {
    const base = "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring/70 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none shadow-[0_0_12px_rgba(57,255,20,0.25)] hover:shadow-[0_0_18px_rgba(57,255,20,0.45)]";
    const variants = {
      default: "bg-primary text-black hover:bg-accent",
      outline: "border border-primary text-foreground hover:bg-secondary",
    } as const;
    const sizes = {
      sm: "h-8 px-3",
      md: "h-10 px-4",
      lg: "h-12 px-6",
    } as const;
    return (
      <button ref={ref} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props} />
    );
  }
);
Button.displayName = "Button";


