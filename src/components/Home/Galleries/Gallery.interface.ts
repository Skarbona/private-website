export interface keyInterface {
    [key: string]: string;
}

export interface GalleryInterface {
    name: string;
    images: keyInterface;
}

export interface GalleriesInterface {
    Prague: keyInterface,
    Croatia: keyInterface,
    USA: keyInterface,
    Italy: keyInterface,
    Ukraine: keyInterface
}