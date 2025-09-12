import { ReactElement } from "react";
import { buttonVariants } from "../../../theme/recipes/Button";

export type ButtonVariant = keyof typeof buttonVariants.variant;
export type ButtonSize = keyof typeof buttonVariants.size;
export type ButtonState = keyof typeof buttonVariants.state;

export interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  state?: ButtonState;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export interface IconButtonProps extends BaseButtonProps {
  children: ReactElement;
  'aria-label': string;
}