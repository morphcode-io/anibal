import React, { forwardRef, useMemo } from "react";
import { createContext } from "./create-context";
import { mergeProps } from "./merge-props";
import { cn } from "./cn";

type AnyRecord = Record<string, unknown>;
export interface RecipeConfig {
  base: Record<string, string>;
  variants: Record<string, Record<string, Record<string, string>>>;
}

const upperFirst = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export function applyRecipe<T extends RecipeConfig>(recipe: T, props: AnyRecord, part: keyof T["base"]): string {
  const base = recipe.base[part as string] || "";
  const classes = [base];

  if (!recipe.variants || !props) return cn(...classes);

  for (const variantType of Object.keys(recipe.variants)) {
    if (!(variantType in props)) continue;
    const variantValue = props[variantType];

    if (!variantValue || typeof variantValue != "string") continue;
    const variantClasses = recipe.variants[variantType][variantValue];

    if (typeof variantClasses === "object" && variantClasses[part as string]) {
      classes.push(variantClasses[part as string]);
    } else if (typeof variantClasses === "string" && variantType === part) {
      classes.push(variantClasses);
    }
  }

  return cn(...classes);
}

export function createRecipeContext<TRecipe extends RecipeConfig>(componentName: string, recipe: TRecipe) {
  const contextName = upperFirst(componentName);

  const [PropsProvider, usePropsContext] = createContext<AnyRecord>({
    strict: false,
    name: `${contextName}PropsContext`,
    providerName: `${contextName}PropsProvider`,
    defaultValue: {},
  });

  function useRecipeResult(props: AnyRecord, part: keyof typeof recipe.base) {
    const { unstyled, ...rest } = props;
    const styles = unstyled ? "" : applyRecipe(recipe, rest, part);
    const variantKeys = Object.keys(recipe.variants || {});
    const variantProps: AnyRecord = {};
    const otherProps: AnyRecord = {};
    Object.keys(rest).forEach((key) => {
      if (variantKeys.includes(key)) {
        variantProps[key] = rest[key];
      } else {
        otherProps[key] = rest[key];
      }
    });

    return {
      styles,
      variantProps,
      props: otherProps,
    };
  }

  const withProvider = <T extends React.ElementType>(Component: T, part: keyof typeof recipe.base) => {
    const WrappedComponent = forwardRef<React.ComponentRef<T>, React.ComponentPropsWithoutRef<T> & AnyRecord>(
      (inProps, ref) => {
        const { className, ...restProps } = inProps;

        const { styles, variantProps, props: localProps } = useRecipeResult(restProps, part);
        const finalProps = {
          ...localProps,
          ref,
          className: cn(styles, className),
        } as React.ComponentPropsWithRef<T>;

        return (
          <PropsProvider value={variantProps}>
            <Component {...finalProps} />
          </PropsProvider>
        );
      }
    );

    WrappedComponent.displayName = `with${contextName}Provider("Component"})`;
    return WrappedComponent;
  };

  const withContext = <T extends React.ElementType>(Component: T, part: keyof typeof recipe.base) => {
    const ContextComponent = forwardRef<
      React.ComponentRef<T>,
      React.ComponentPropsWithoutRef<T> & { unstyled?: boolean }
    >((inProps, ref) => {
      const propsContext = usePropsContext();

      const props = useMemo(() => mergeProps(propsContext, inProps), [inProps, propsContext]);

      const { styles, props: localProps } = useRecipeResult(props, part);
      const { className, ...restProps } = localProps;

      const componentProps = {
        ...restProps,
        ref,
        className: cn(styles, typeof className == "string" ? className : ""),
      } as React.ComponentPropsWithRef<T>;

      return <Component {...componentProps} />;
    });

    ContextComponent.displayName = `with${contextName}Context("Component"})`;
    return ContextComponent;
  };

  return {
    withProvider,
    withContext,
    PropsProvider,
    usePropsContext,
    useRecipeResult,
  };
}
