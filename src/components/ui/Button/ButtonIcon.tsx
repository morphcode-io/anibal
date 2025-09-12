import React, { cloneElement } from "react";
import { Button } from "./Button";
import { IconButtonProps } from "./Button.types";
import { cn } from "@/utils/cn";

// TODO: Use createRecipeContext for consistent styling
const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, size = "md", className, ...props }, ref) => {

    const iconWithSize = cloneElement(children);

    return (
      <Button
        ref={ref}
        size={size}
        className={cn(
          "aspect-square p-0",
          className
        )}
        {...props}
      >
        {iconWithSize}
      </Button>
    );
  }
);


IconButton.displayName = "IconButton";

export { IconButton };