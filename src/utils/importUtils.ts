export const importAllFiles = (r: any) => {
  const images = {} as any;
  r.keys().forEach((item: any) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
};
