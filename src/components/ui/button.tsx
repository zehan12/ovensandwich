import { ButtonVariants, UIButtonProps } from "@/interfaces";
import { FC } from "react";

const variants = {
  primary: "bg-[var(--white)] text-[var(--black)]",
  secondary: "bg-[var(--black)] text-[var(--white)]",
  accent1: "bg-[var(--accent1)] text-[var(--black)]",
  accent2: "bg-[var(--accent2)] text-[var(--white)]",
  brand: "bg-[var(--brand)] text-[var(--white)]",
} as Record<ButtonVariants, string>;

const Button: FC<UIButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`
        px-4 
        py-2 
        rounded-md 
        bg-white 
        text-black 
        font-primary 
        tracking-tight 
        text-sm 
        cursor-pointer
        ${variants[variant]}
        ${className}
        `}
    >
      {children}
    </button>
  );
};

export default Button;
