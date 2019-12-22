export const importAllFiles = (r: any) => {
    let images = {} as any;
    r.keys().forEach((item: any) => { images[item.replace('./', '')] = r(item); });
    return images;
};
