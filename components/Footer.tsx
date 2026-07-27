"use client";

import Link from "next/link";
import Image from "next/image";
import { useToast } from "./ToastProvider";
import { SITE } from "@/lib/data";

export default function Footer() {
  const { showToast } = useToast();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-grid footer">
        <div>
          <Link href="/" className="logo">
            <Image
              src="/images/logo2.png"
              alt="MALBA_REE Logo"
              width={120}
              height={60}
              className="logo-img"
            />
          </Link>
          <p
            className="font-script"
            style={{ marginTop: 16, fontSize: 24, lineHeight: 1.2, opacity: 0.9 }}
          >
            Sip the taste of Kerala in every glass.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/menu">Menu</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/franchise">Franchise</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4>Visit Us</h4>
          <ul>
            <li>📍 {SITE.address}</li>
            <li>📞 {SITE.phone}</li>
            <li>✉️ {SITE.email}</li>
          </ul>
        </div>

        <div>
          <h4>Stay Updated</h4>
          <form
            className="footer-newsletter"
            onSubmit={(e) => {
              e.preventDefault();
              showToast("Subscribed!");
              (e.target as HTMLFormElement).reset();
            }}
          >
            <input type="email" required placeholder="Your email" />
            <button>Join</button>
          </form>
          <div className="socials">
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="Facebook">📘</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {year} MALBA_REE. All rights reserved.</span>
        <span>Made in Hyderabad · Inspired by Kerala</span>
      </div>
    </footer>
  );
}
