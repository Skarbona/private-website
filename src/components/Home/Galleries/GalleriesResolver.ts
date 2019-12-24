// Cannot Map require.context with variables/properties
import {importAllFiles} from "../../../utils/importUtils";
import {GalleriesInterface} from "./Gallery.interface";

const galleryCroatia = importAllFiles(
    require.context(
        "../../../../public/images/galleries/Croatia",
        false,
        /.*\.jpg$/
    )
);

const galleryItaly = importAllFiles(
    require.context(
        "../../../../public/images/galleries/Italy",
        false,
        /.*\.jpg$/
    )
);

const galleryPrague = importAllFiles(
    require.context(
        "../../../../public/images/galleries/Prague",
        false,
        /.*\.jpg$/
    )
);

const galleryUSA = importAllFiles(
    require.context("../../../../public/images/galleries/USA", false, /.*\.jpg$/)
);

const galleryUkraine = importAllFiles(
    require.context(
        "../../../../public/images/galleries/Ukraine",
        false,
        /.*\.jpg$/
    )
);

const gallerySpain = importAllFiles(
    require.context(
        "../../../../public/images/galleries/Spain",
        false,
        /.*\.jpg$/
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