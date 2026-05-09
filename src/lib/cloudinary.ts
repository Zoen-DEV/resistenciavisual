const CLOUD = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const BASE = `https://res.cloudinary.com/${CLOUD}/image/upload`;

type ImageSize = "thumb" | "grid" | "full";

const TRANSFORMS: Record<ImageSize, string> = {
  thumb: "f_auto,q_auto:good,w_800,c_limit",
  grid:  "f_auto,q_auto:good,w_1200,c_limit",
  full:  "f_auto,q_auto:best,w_2400,c_limit",
};

export function cldUrl(publicId: string, size: ImageSize = "grid"): string {
  return `${BASE}/${TRANSFORMS[size]}/${publicId}`;
}
