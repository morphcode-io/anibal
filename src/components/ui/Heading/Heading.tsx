import React from "react";
import { cn } from "../../../utils/cn";
import { headingRecipe } from "@/theme/recipes/Heading";
import { HeadingProps } from "./Heading.types";

// TODO: Use createRecipeContext for consistent styling
const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, variant = "base", as: Component = "h2", style, size = "xl", children }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(headingRecipe.variants[variant], headingRecipe.size[size], className)}
        style={style}
        data-testid={`heading-${size}`}
      >
        {children}
      </Component>
    );
  }
);

Heading.displayName = "Heading";
export default Heading;
