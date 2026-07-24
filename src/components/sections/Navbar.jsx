import { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "../ui/Container.jsx";
import useActiveSection from "../../hooks/useActiveSection.js";
import logo from "../images/logo.webp";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Stats", href: "#stats" },
  { label: "Clients", href: "#clients" },
  { label: "Accredian Edge", href: "#accredian-edge" },
  { label: "CAT", href: "#cat" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQs", href: "#faqs" },
  { label: "Testimonials", href: "#testimonials" },
];

const SECTION_IDS = NAV_LINKS.map((link) => link.href.slice(1));

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <Container className="navbar-bar flex items-center justify-between">
        <a href="#home">
          <img src={logo} alt="Accredian - credentials that matter" className="navbar-logo" />
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`border-b-2 pb-1 text-sm font-medium transition-colors ${
                activeId === link.href.slice(1)
                  ? "border-brand-600 text-brand-600"
                  : "border-transparent text-ink-600 hover:text-brand-600"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="p-2 text-ink-900 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-[28rem]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 border-t border-slate-100 bg-white px-4 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`rounded-lg px-3 py-2 text-sm font-medium ${
                activeId === link.href.slice(1)
                  ? "bg-brand-50 text-brand-600"
                  : "text-ink-600 hover:bg-brand-50 hover:text-brand-600"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
