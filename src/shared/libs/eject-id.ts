export const ejectId = (url: string | undefined) => {
  if (!url) return;

  const regex = /\d+/;
  const match = url.match(regex);

  if (!match) return;

  return match[0];
};
