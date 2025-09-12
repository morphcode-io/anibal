import { createContext as createReactContext, useContext as useReactContext } from "react";

export interface CreateContextOptions<T> {
  name: string;
  strict?: boolean;
  hookName?: string;
  providerName?: string;
  errorMessage?: string;
  defaultValue?: T;
}

export type CreateContextReturn<T> = [React.Provider<T>, () => T, React.Context<T>];

export function createContext<T>(options: CreateContextOptions<T>) {
  const {
    name,
    strict = true,
    providerName = `Provider`,
    errorMessage = `use${name}Context must be used within a ${providerName}`,
    defaultValue,
  } = options;

  const Context = createReactContext<T | undefined>(defaultValue);

  Context.displayName = name;

  function useContext() {
    const context = useReactContext(Context);
    if (!context && strict) {
      const error = new Error(errorMessage);
      error.name = "ContextError";
      Error.captureStackTrace?.(error, useContext);
      throw error;
    }

    return context as T;
  }

  return [Context.Provider, useContext, Context] as CreateContextReturn<T>;
}
