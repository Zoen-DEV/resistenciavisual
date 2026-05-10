"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";

type Props = Omit<ImageProps, "onLoad"> & { shimmer?: boolean };

export default function BlurImage({ className, shimmer = true, ...props }: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <span className="contents">
      {shimmer && !loaded && (
        <span className="absolute inset-0 z-10 animate-shimmer bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.06)_50%,transparent_100%)] bg-[length:200%_100%]" />
      )}
      <Image
        {...props}
        className={`transition-opacity duration-700 ease-in-out ${loaded ? "opacity-100" : "opacity-0"} ${className ?? ""}`}
        onLoad={() => setLoaded(true)}
      />
    </span>
  );
}
