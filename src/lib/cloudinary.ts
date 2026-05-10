const CLOUD = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const BASE = `https://res.cloudinary.com/${CLOUD}/image/upload`;

// Quality hint per usage context — width is resolved by the loader from next/image sizes
type ImageSize = "thumb" | "grid" | "full";

const QUALITY: Record<ImageSize, string> = {
  thumb: "q_auto",
  grid:  "q_auto",
  full:  "q_auto:best",
};

// Encodes the quality hint as a stable path segment the loader can read back
export function cldUrl(publicId: string, size: ImageSize = "grid"): string {
  return `${BASE}/${QUALITY[size]},fl_progressive,f_auto/${publicId}`;
}

export function cldBlur(publicId: string): string {
  return `${BASE}/w_30,e_blur:1000,q_1,f_auto/${publicId}`;
}
