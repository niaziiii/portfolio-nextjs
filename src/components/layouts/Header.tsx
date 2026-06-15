"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFileText,
  AiOutlineGithub,
  AiOutlineContacts,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineProject,
} from "react-icons/ai";

const navigations = [
  { name: "Home",       url: "/",           icon: <AiOutlineHome fontSize={20} /> },
  { name: "About",      url: "/about",      icon: <AiOutlineUser fontSize={20} /> },
  { name: "Experience", url: "/experience", icon: <AiOutlineFileText fontSize={20} /> },
  { name: "Projects",   url: "/projects",   icon: <AiOutlineProject fontSize={20} /> },
  { name: "Contact",    url: "/contact",    icon: <AiOutlineContacts fontSize={20} /> },
  { name: "GitHub",     url: "https://github.com/niaziiii", icon: <AiOutlineGithub fontSize={20} />, external: true },
];

// Bottom bar: show first 4 items + the burger "more" button
const bottomNavItems = navigations.slice(0, 4);

const Header = () => {
  const pathname = usePathname();
  const [overlayOpen, setOverlayOpen] = useState(false);

  // close overlay on route change
  useEffect(() => {
    setOverlayOpen(false);
  }, [pathname]);

  // lock body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = overlayOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [overlayOpen]);

  return (
    <>
      {/* ── Top header (always visible) ── */}
      <header className="z-30 text-white sticky top-0 left-0 py-4 w-full backdrop-blur-md opacity-90">
        <div className="w-11/12 py-2 m-auto flex items-center justify-between lg:w-4/5">
          {/* Logo */}
          <Link href="/">
            <b className="text-3xl truncate">NiaziOnTop</b>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10 ml-auto">
            {navigations.map((nav, i) =>
              nav.external ? (
                <a
                  key={i}
                  href={nav.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 font-bold hover:text-primary transition-colors"
                >
                  {nav.icon}
                  {nav.name}
                </a>
              ) : (
                <Link
                  key={i}
                  href={nav.url}
                  className={`flex items-center gap-1 font-bold transition-colors hover:text-primary ${
                    pathname === nav.url ? "text-primary" : ""
                  }`}
                >
                  {nav.icon}
                  {nav.name}
                </Link>
              )
            )}
          </nav>
        </div>
      </header>

      {/* ── Mobile bottom tab bar ── */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-secondary/95 backdrop-blur-md border-t border-white/10 flex items-center">
        {bottomNavItems.map((nav, i) => {
          const active = pathname === nav.url;
          return (
            <Link
              key={i}
              href={nav.url}
              className={`flex-1 flex flex-col items-center justify-center py-2.5 gap-1 text-[10px] font-medium transition-colors ${
                active ? "text-primary" : "text-gray-400 hover:text-white"
              }`}
            >
              <span className={`text-xl ${active ? "text-primary" : ""}`}>{nav.icon}</span>
              <span>{nav.name}</span>
              {active && (
                <span className="absolute bottom-0 w-6 h-0.5 rounded-full bg-primary" />
              )}
            </Link>
          );
        })}

        {/* Burger / More button */}
        <button
          onClick={() => setOverlayOpen(true)}
          className="flex-1 flex flex-col items-center justify-center py-2.5 gap-1 text-[10px] font-medium text-gray-400 hover:text-white transition-colors"
          aria-label="Open menu"
        >
          <AiOutlineMenu className="text-xl" />
          <span>More</span>
        </button>
      </nav>

      {/* ── Full-screen overlay for mobile ── */}
      <div
        className={`md:hidden fixed inset-0 z-50 flex flex-col transition-all duration-300 ${
          overlayOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setOverlayOpen(false)}
        />

        {/* Panel slides up from bottom */}
        <div
          className={`relative mt-auto bg-secondary rounded-t-2xl p-6 pb-safe transition-transform duration-300 ${
            overlayOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          {/* Handle bar */}
          <div className="w-10 h-1 rounded-full bg-white/20 mx-auto mb-6" />

          {/* Close */}
          <button
            onClick={() => setOverlayOpen(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-1"
            aria-label="Close menu"
          >
            <AiOutlineClose fontSize={22} />
          </button>

          <p className="text-xs uppercase tracking-widest text-gray-500 mb-4 font-semibold">
            Navigation
          </p>

          <div className="grid grid-cols-2 gap-3">
            {navigations.map((nav, i) => {
              const active = !nav.external && pathname === nav.url;
              const inner = (
                <span
                  className={`flex items-center gap-3 p-4 rounded-xl font-semibold transition-colors w-full ${
                    active
                      ? "bg-primary/20 text-primary"
                      : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span className="text-2xl">{nav.icon}</span>
                  <span>{nav.name}</span>
                </span>
              );

              return nav.external ? (
                <a
                  key={i}
                  href={nav.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="col-span-1"
                  onClick={() => setOverlayOpen(false)}
                >
                  {inner}
                </a>
              ) : (
                <Link
                  key={i}
                  href={nav.url}
                  className="col-span-1"
                  onClick={() => setOverlayOpen(false)}
                >
                  {inner}
                </Link>
              );
            })}
          </div>

          {/* spacer so it clears the bottom bar */}
          <div className="h-20" />
        </div>
      </div>

      {/* Push content up on mobile so bottom bar doesn't cover it */}
      <div className="md:hidden h-16" />
    </>
  );
};

export default Header;
