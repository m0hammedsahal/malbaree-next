"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header" id="siteHeader">
      <div className="header-container">
        <div className="header-bar">
          <Link href="/" className="logo">
            <Image
              src="/images/logo2.png"
              alt="MALBA_REE Logo"
              width={120}
              height={60}
              className="logo-img"
              priority
            />
          </Link>

          <nav className="nav">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={pathname === n.href ? "active" : ""}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <Link href="/menu" className="btn btn-red btn-order-nav">
            Order Now
          </Link>

          <button
            className="menu-toggle"
            id="menuToggle"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            ☰
          </button>
        </div>

        <div className={`mobile-nav${open ? " open" : ""}`} id="mobileNav">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={pathname === n.href ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {n.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
