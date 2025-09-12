export const CardRecipe = {
  base: {
    root: "flex flex-col relative min-w-0 break-words rounded-lg text-left bg-white dark:bg-secondary-900/30 border border-gray-300/60 dark:border-gray-600/30 overflow-hidden",
    title: "",
    description: "font-normal mt-1",
    header: "px-4 pt-4 flex flex-col gap-2",
    body: "px-4 pt-2 pb-4 flex-1 flex flex-col",
    footer: "px-4 pt-2 pb-4 flex gap-2 items-center",
  },
  variants: {
    size: {
      sm: {
        root: "text-sm",
        title: "text-sm",
        header: "px-4 pt-4",
        body: "px-4 py-3",
        footer: "px-4 pb-4",
      },
      md: {
        root: "",
        title: "text-xl font-semibold",
        description: "text-sm",
      },
      lg: {
        root: "text-lg",
        title: "text-lg",
        header: "px-8 pt-8",
        body: "px-8 py-6",
        footer: "px-8 pb-8",
      },
    },
    variant: {
      default: {
        root: "bg-white border-gray-200",
      },
      subtle: {
        root: "bg-mirage-100 dark:bg-mirage-900/30 shadow-none border-none",
      },
      outlined: {
        root: "bg-white dark:bg-shark-900/30 border border-shark-300/60 dark:border-shark-600/30 shadow-none",
      },
      elevated: {
        root: "bg-white dark:bg-shark-900/50 shadow-lg border-0",
      }
    }
  }
}