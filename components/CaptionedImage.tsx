import Image from "next/image";

interface CaptionedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: React.ReactNode;
  className?: string;
}

// An image with an optional caption underneath. Leave `caption` out for a plain image.
export default function CaptionedImage({ src, alt, width, height, caption, className = "" }: CaptionedImageProps) {
  return (
    <figure className={className}>
      <Image src={src} alt={alt} width={width} height={height} className="w-full h-auto rounded-2xl" />
      {caption && (
        <figcaption className="mt-2 text-center" style={{ fontSize: "16px", color: "rgba(0,0,0,0.6)" }}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
