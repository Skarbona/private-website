// Cannot Map require.context with variables/properties
import {importAllFiles} from "../../../utils/importUtils";
import {GalleriesInterface} from "./Gallery.interface";

const galleryCroatia = importAllFiles(
    require.context(
        "../../../../public/images/galleries/Croatia",
        false,
        /.*\.webp$/
    )
);

const galleryItaly = importAllFiles(
    require.context(
        "../../../../public/images/galleries/Italy",
        false,
        /.*\.webp$/
    )
);

const galleryPrague = importAllFiles(
    require.context(
        "../../../../public/images/galleries/Prague",
        false,
        /.*\.webp$/
    )
);

const galleryUSA = importAllFiles(
    require.context("../../../../public/images/galleries/USA", false, /.*\.webp$/)
);

const galleryUkraine = importAllFiles(
    require.context(
        "../../../../public/images/galleries/Ukraine",
        false,
        /.*\.webp$/
    )
);

const gallerySpain = importAllFiles(
    require.context(
        "../../../../public/images/galleries/Spain",
        false,
        /.*\.webp$/
    )
);

export const galleries = {
    Spain: gallerySpain,
    Prague: galleryPrague,
    Croatia: galleryCroatia,
    USA: galleryUSA,
    Italy: galleryItaly,
    Ukraine: galleryUkraine
} as GalleriesInterface;