export const buttonVariants = {
  variant: {
    primary: "bg-primary-600 hover:bg-primary-700/60 text-white dark:bg-primary-700/60 dark:hover:bg-primary-700",
    secondary: "bg-secondary-600 hover:bg-secondary-700 text-white dark:bg-secondary-500 dark:hover:bg-secondary-600",
    outline: "border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white dark:border-primary-400 dark:text-primary-400",
    ghost: "text-primary-600 hover:bg-primary-50 dark:text-primary-400 dark:hover:bg-primary-900/20",
    destructive: "bg-red-600 hover:bg-red-700 text-white",
  },
  
  size: {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 text-base",
    lg: "h-12 px-6 text-lg",
    xl: "h-14 px-8 text-xl",
  },
  
  state: {
    default: "",
    loading: "opacity-70 cursor-not-allowed",
    disabled: "opacity-50 cursor-not-allowed pointer-events-none",
  }
};