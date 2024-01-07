/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
export const debounce = <Props extends any[], Return>(
  func: (...props: Props) => Return,
  delay: number
): ((...props: Props) => void) => {
  let timeoutId: NodeJS.Timeout;

  return (...args: Props): void => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
