import { cn } from "@/utils/cn";
import { ContainerProps } from "./Container.types";
import { ContainerVariants } from "@/theme/recipes/Container";
// TODO: Use createRecipeContext for consistent styling
export const Container: React.FC<ContainerProps> = ({
  children,
  maxW = "container.lg",
  variant = "base",
  className = "",
  ...props
}) => {
  return (
    <div className={cn("px-2",ContainerVariants.variant[variant], ContainerVariants.maxW[maxW], className)} {...props}>
      {children}
    </div>
  );
};
