import { CardRecipe } from "@/theme/recipes/Card";

export type CardSizes = keyof typeof CardRecipe.variants.size;
export type CardVariants = keyof typeof CardRecipe.variants.variant;
export type CardBaseVariants = keyof typeof CardRecipe.base;

export interface CardRootProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariants
  size?: CardSizes
  unstyled?: boolean
}

export interface CardComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  unstyled?: boolean
}
