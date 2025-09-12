"use client"
import { dadgeRecipe } from "@/theme/recipes/Dadge";
import { createRecipeContext } from "@/utils/recipe-context";
import { DadgeComponentProps } from "./Dadge.types";

const {
  withContext,
} = createRecipeContext("Dadge", dadgeRecipe);

// without provider
export const Dadge = withContext("span", "root") as React.ForwardRefExoticComponent<
  DadgeComponentProps & React.RefAttributes<HTMLSpanElement>
>;

// Display name
Dadge.displayName = "Dadge";

export default Dadge;