"use client";
import { useState } from "react";
import type { NavItem } from "@/types/enterprise";

type NavbarProps = {
  items: NavItem[];
};

export function Navbar({ items }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const handleNavigate = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a href="#home" className="logo">
          logo
        </a>
        <button
          type="button"
          className="menu-btn"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation menu"
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav className={`nav-links ${open ? "open" : ""}`}>
          {items.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={handleNavigate}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
