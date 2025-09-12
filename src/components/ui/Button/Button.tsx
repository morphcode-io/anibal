import React, { ReactNode } from "react";
import { BaseButtonProps } from "./Button.types";
import { buttonVariants } from "../../../theme/recipes/Button";
import { cn } from "../../../utils/cn";

// TODO: Use createRecipeContext for consistent styling
export const Button = React.forwardRef<HTMLButtonElement, BaseButtonProps & { children: ReactNode }>(
  (
    {
      variant = "primary",
      size = "md",
      state = "default",
      className,
      children,
      disabled,
      loading,
      type = "button",
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "flex cursor-pointer gap-2 items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
          buttonVariants.variant[variant],
          buttonVariants.size[size],
          buttonVariants.state[state],
          className
        )}
        disabled={disabled || loading}
        {...props}
        aria-disabled={disabled || loading}
        aria-busy={loading}
      >
        {loading && (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
