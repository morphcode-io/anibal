
export function mergeProps<T extends Record<string, unknown>>(...sources: (T | undefined)[]): T {
  const result = {} as T
  
  for (const source of sources) {
    if (!source) continue
    
    for (const key in source) {
      if (source.hasOwnProperty(key)) {
        const value = source[key]
        if (value !== undefined) {
          result[key] = value
        }
      }
    }
  }
  
  return result
}