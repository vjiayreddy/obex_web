export const shouldForwardProp = <CustomProps extends Record<string, any>>(
  props: Array<keyof CustomProps>,
  prop: PropertyKey
): boolean => !props.includes(prop as string);
