interface LoaderParams {
  src: string;
  width: number;
  quality?: number;
}

export default function cloudinaryLoader({ src, width, quality }: LoaderParams): string {
  // src format: https://res.cloudinary.com/<cloud>/image/upload/<transforms>/<publicId>
  const match = src.match(/res\.cloudinary\.com\/([^/]+)\/image\/upload\/([^/]+)\/(.*)/);
  if (!match) return src;

  const [, cloud, existingTransforms, publicId] = match;

  // Preserve quality/format/progressive from cldUrl, inject responsive width from next/image
  const q = quality ? `q_${quality}` : existingTransforms.match(/q_[^,]+/)?.[0] ?? "q_auto";
  const transforms = `f_auto,${q},fl_progressive,w_${width},c_limit,dpr_auto`;

  return `https://res.cloudinary.com/${cloud}/image/upload/${transforms}/${publicId}`;
}
