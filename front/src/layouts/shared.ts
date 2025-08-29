/**
 * @template C Component
 * @template O Keys to omit
 */
export type ExtractAstroProps<
  C extends (...args: any) => any,
  O extends PropertyKey = never
> = Omit<Parameters<C>[0], O>