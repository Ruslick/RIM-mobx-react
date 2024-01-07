export const simplifyCollection = <
  T extends { [key: string]: unknown },
  K extends keyof T
>(
  array: T[],
  key: K
) => {
  return array.map((element) => element[key]);
};
