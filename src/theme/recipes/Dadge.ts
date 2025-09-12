export const dadgeRecipe = {
  base: { root: "text-xs px-2 inline-flex items-center gap-1 font-medium font-primary text-mirage-900 dark:text-mirage-200 font-primary bg-mirage-100/60 dark:bg-mirage-800/30 rounded-md" },
  variants: {
    variant: {
      solid: { root: "" },
      subtle: { root: "" },
      outline: { root: "" },
      surface: { root: "" },
      plain: { root: "" },
    },
    size: {
      xs: { root: "text-xs px-1.5" },
      sm: { root: "" },
      md: { root: "" },
      lg: { root: "" },
    },
  },
  defaultVariants: {
    variant: "subtle",
    size: "sm",
  },
};
