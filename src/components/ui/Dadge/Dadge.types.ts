import { dadgeRecipe } from "@/theme/recipes/Dadge";

export type DadgeSizes = keyof typeof dadgeRecipe.variants.size;
export type DadgeVariants = keyof typeof dadgeRecipe.variants.variant;
export type DadgeBaseVariants = keyof typeof dadgeRecipe.base;

export interface DadgeComponentProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: DadgeVariants
  size?: DadgeSizes
  unstyled?: boolean
}