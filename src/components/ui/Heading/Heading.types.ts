import { headingRecipe } from "@/theme/recipes/Heading";
import { JSX } from "react";

export type HeadingSizes = keyof typeof headingRecipe.size;
export type HeadingVariants = keyof typeof headingRecipe.variants;
export interface HeadingProps {
  size?: HeadingSizes;
  className?: string;
  variant?: HeadingVariants;
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements | React.ElementType;
  style?: React.CSSProperties;
}
