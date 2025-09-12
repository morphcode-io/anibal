import { ContainerVariants } from "../../../theme/recipes/Container";

export type ContainerVariant = keyof typeof ContainerVariants.variant;
export type ContainerSize = keyof typeof ContainerVariants.maxW;

type PaddingSize = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24;

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  maxW?: ContainerSize;
  variant?: ContainerVariant;
  px?: PaddingSize;
  className?: string;
}
