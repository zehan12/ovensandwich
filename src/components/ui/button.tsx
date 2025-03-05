import { ButtonVariants, UIButtonProps } from "@/interfaces";
import { FC } from "react";

const variants = {
  accent1: "bg-accent1 text-white hover:bg-accent1/75",
  accent2: "bg-accent2 text-white hover:bg-accent2/75",
  primary: "bg-primary text-secondary hover:bg-primary/75",
  secondary: "bg-secondary text-primary hover:bg-secondary/75",
  brand: "bg-brand text-white hover:bg-brand/75",
} as Record<ButtonVariants, string>;

const Button: FC<UIButtonProps> = ({
  children,
  variant,
  className,
  ...props
}) => {
  return (
    <button
      className={`
        px-4 
        transition-all
        duration-300
        py-2 
        rounded-md 
        tracking-tight 
        text-sm 
        items-center 
        flex 
        gap-2
        cursor-pointer
        ${variants[variant]}
        ${className}
        `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
