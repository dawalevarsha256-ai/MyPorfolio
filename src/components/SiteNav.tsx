import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Certifications", href: "#certifications" },
  { label: "Awards", href: "#awards" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-canvas/90 backdrop-blur-xl">
      <nav className="section-shell flex h-[76px] items-center justify-between" aria-label="Main navigation">
        <a href="#home" className="font-heading text-xl font-bold tracking-tight text-ink" onClick={() => setOpen(false)}>
          VD<span className="text-accent">.</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.href} className="nav-link" href={link.href}>{link.label}</a>
          ))}
          <a className="button-primary !min-h-10 !px-4 !py-2 text-sm" href="#contact">Let&apos;s connect <ArrowUpRight size={16} /></a>
        </div>
        <button className="rounded-xl p-2 text-ink hover:bg-surface md:hidden" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-slate-200 bg-canvas px-6 py-5 md:hidden">
          <div className="section-shell flex flex-col gap-4">
            {links.map((link) => (
              <a key={link.href} className="nav-link py-1" href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
            ))}
            <a className="button-primary mt-2" href="#contact" onClick={() => setOpen(false)}>Let&apos;s connect <ArrowUpRight size={16} /></a>
          </div>
        </div>
      )}
    </header>
  );
}
