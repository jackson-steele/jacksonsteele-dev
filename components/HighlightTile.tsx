import Image from "next/image";
import Link from "next/link";
import { EB_Garamond } from "next/font/google";

const garamond = EB_Garamond({ subsets: ["latin"], style: ["italic"], weight: ["400"] });

export type Highlight = {
  src: string;
  title: string;
  subtitle: string;
  /** Opening line of the linked page, revealed on hover. */
  teaser: string;
  href: string;
};

type Props = {
  tile: Highlight;
  width: number;
  height: number;
  onClick?: () => void;
};

// Hover reveal: Tailwind v4's `hover:` only applies on devices that can hover,
// so touch devices keep the plain title/subtitle tile and just navigate on tap.
export default function HighlightTile({ tile, width, height, onClick }: Props) {
  return (
    <Link
      href={tile.href}
      onClick={onClick}
      aria-label={`${tile.title}: ${tile.subtitle}`}
      className="group relative block overflow-hidden rounded-2xl active:scale-[0.98] transition-transform focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      <Image
        src={tile.src}
        alt=""
        width={width}
        height={height}
        className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] group-focus-visible:scale-[1.04]"
      />
      {/* Base scrim keeps the title legible on any photo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/80 via-black/35 to-transparent"
      />
      {/* Hover tint darkens the whole tile so the teaser reads easily */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/45 group-focus-visible:bg-black/45"
      />
      <div className="absolute inset-x-0 bottom-0 px-5 pb-4 md:px-6 md:pb-5">
        <div
          className="font-bold text-white leading-tight tracking-[-0.01em]"
          style={{ fontSize: "clamp(22px, 2.1vw, 28px)", textShadow: "0 1px 12px rgba(0,0,0,0.35)" }}
        >
          {tile.title}
        </div>
        <div
          className={`${garamond.className} italic text-white/85 leading-snug mt-1`}
          style={{ fontSize: "clamp(16px, 1.45vw, 19px)" }}
        >
          {tile.subtitle}
        </div>
        {/* Animating grid rows 0fr -> 1fr grows the teaser to its natural height,
            pushing the title and subtitle up smoothly. */}
        <div
          aria-hidden
          className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr]"
        >
          <div className="overflow-hidden">
            <p
              className="mt-3 text-white/90 line-clamp-3 max-lg:hidden opacity-0 translate-y-2 transition duration-300 delay-75 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0"
              style={{ fontSize: "16px", lineHeight: 1.45, fontWeight: 400 }}
            >
              {tile.teaser}
            </p>
            <span
              className="mt-2 inline-flex items-center gap-1.5 text-white font-semibold opacity-0 transition duration-300 delay-100 group-hover:opacity-100 group-focus-visible:opacity-100"
              style={{ fontSize: "15px" }}
            >
              Read more
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
