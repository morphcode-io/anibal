import React from "react";
import { createRecipeContext } from "../../../utils/recipe-context"
import { CardRecipe } from "../../../theme/recipes/Card"
import type { CardRootProps, CardComponentProps } from "./Card.types"
const {
  withProvider,
  withContext,
  PropsProvider: CardPropsProvider,
  usePropsContext: useCardContext,
} = createRecipeContext("Card", CardRecipe);
// Root component (Provider)
export const CardRoot = withProvider("div", "root") as React.ForwardRefExoticComponent<
  CardRootProps & React.RefAttributes<HTMLDivElement>
>

// Child components (Consumers)
export const CardHeader = withContext("div", "header") as React.ForwardRefExoticComponent<
  CardComponentProps & React.RefAttributes<HTMLDivElement>
>

export const CardBody = withContext("div", "body") as React.ForwardRefExoticComponent<
  CardComponentProps & React.RefAttributes<HTMLDivElement>
>

export const CardFooter = withContext("div", "footer") as React.ForwardRefExoticComponent<
  CardComponentProps & React.RefAttributes<HTMLDivElement>
>

export const CardTitle = withContext("h4", "title") as React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLHeadingElement> & { unstyled?: boolean } & React.RefAttributes<HTMLHeadingElement>
>

export const CardDescription = withContext("p", "description") as React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLParagraphElement> & { unstyled?: boolean } & React.RefAttributes<HTMLParagraphElement>
>

// Display names
CardRoot.displayName = "CardRoot"
CardHeader.displayName = "CardHeader"
CardBody.displayName = "CardBody"
CardFooter.displayName = "CardFooter"
CardTitle.displayName = "CardTitle"
CardDescription.displayName = "CardDescription"

const Card = {
  Root: CardRoot,
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
  Title: CardTitle,
  Description: CardDescription,
  PropsProvider: CardPropsProvider,
  useContext: useCardContext,
}

export default Card;