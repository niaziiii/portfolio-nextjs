import Image from "next/image";

/**
 * Square logo tile. Company logos come on white, so they sit on a white tile with a
 * hairline border and a little inner padding (as on LinkedIn); `bare` drops the tile for
 * marks that carry their own shape.
 */
export default function Logo({
  src,
  alt,
  className = "size-12",
  bare = false,
}: {
  src: string;
  alt: string;
  className?: string;
  bare?: boolean;
}) {
  return (
    <span
      className={`relative inline-flex shrink-0 overflow-hidden ${
        bare ? "" : "rounded-xl border border-line bg-white"
      } ${className}`}
    >
      <span className={`absolute ${bare ? "inset-0" : "inset-[9%]"}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="64px"
          unoptimized={src.endsWith(".svg")}
          className="object-contain"
        />
      </span>
    </span>
  );
}
