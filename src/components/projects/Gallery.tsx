"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { LuChevronLeft, LuChevronRight, LuMaximize2, LuX } from "react-icons/lu";
import type { Shot } from "@/data/projects";

export default function Gallery({ shots, title }: { shots: Shot[]; title: string }) {
  const [index, setIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const open = index !== null;

  const go = useCallback(
    (delta: number) => setIndex((i) => (i === null ? i : (i + delta + shots.length) % shots.length)),
    [shots.length]
  );

  const show = (i: number) => {
    lastFocus.current = document.activeElement as HTMLElement;
    setIndex(i);
  };

  const close = useCallback(() => {
    setIndex(null);
    lastFocus.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, go, close]);

  const current = index !== null ? shots[index] : null;

  return (
    <>
      <ul className="grid gap-4 sm:grid-cols-2">
        {shots.map((shot, i) => (
          <li key={shot.src}>
            <button
              type="button"
              onClick={() => show(i)}
              className="group block w-full text-left"
              aria-label={`Open image: ${shot.caption ?? shot.alt}`}
            >
              <div className="relative overflow-hidden rounded-xl border border-line bg-surface-2">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={shot.width}
                  height={shot.height}
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="aspect-[16/10] w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                />
                <span className="absolute right-3 top-3 inline-flex size-8 items-center justify-center rounded-full bg-black/55 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                  <LuMaximize2 className="size-4" aria-hidden />
                </span>
              </div>
              {shot.caption ? <p className="mt-2.5 text-sm text-faint">{shot.caption}</p> : null}
            </button>
          </li>
        ))}
      </ul>

      {current ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} image ${index! + 1} of ${shots.length}`}
          className="fixed inset-0 z-50 flex flex-col bg-black/90 backdrop-blur-sm"
          onClick={close}
        >
          <div className="flex items-center justify-between px-4 py-3 text-sm text-white/80">
            <span className="font-mono">
              {index! + 1} / {shots.length}
            </span>
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              className="inline-flex size-10 items-center justify-center rounded-full hover:bg-white/10"
              aria-label="Close"
            >
              <LuX className="size-5" />
            </button>
          </div>
          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-16" onClick={(e) => e.stopPropagation()}>
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              sizes="100vw"
              className="max-h-full w-auto max-w-full rounded-lg object-contain shadow-2xl"
            />
            {shots.length > 1 ? (
              <>
                <button
                  type="button"
                  onClick={() => go(-1)}
                  className="absolute left-2 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-4"
                  aria-label="Previous image"
                >
                  <LuChevronLeft className="size-5" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  className="absolute right-2 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-4"
                  aria-label="Next image"
                >
                  <LuChevronRight className="size-5" />
                </button>
              </>
            ) : null}
          </div>
          {current.caption ? (
            <p className="px-4 pb-5 pt-3 text-center text-sm text-white/75" onClick={(e) => e.stopPropagation()}>
              {current.caption}
            </p>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
