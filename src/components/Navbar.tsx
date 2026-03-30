import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "SERVICE", href: "#services", hasDropdown: true },
  { label: "CASE STUDIES", href: "#case-studies" },
  { label: "PRODUCTS", href: "#about" },
  { label: "ABOUT US", href: "#about" },
  { label: "BLOG", href: "#blog" },
  { label: "CONTACT US", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/20">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        <a href="#home" className="flex items-center">
          <img src="/logo.svg" alt="Finixcode" className="h-8" />
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="text-muted-foreground hover:text-foreground transition-colors text-xs tracking-wide flex items-center gap-1">
              {l.label}
              {l.hasDropdown && <ChevronDown className="w-3 h-3" />}
            </a>
          ))}
        </div>

        <Button className="hidden lg:inline-flex bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-6 text-sm font-medium">
          Free Consultation →
        </Button>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background border-t border-border/30 px-4 pb-4">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-muted-foreground hover:text-foreground transition-colors text-sm">
              {l.label}
            </a>
          ))}
          <Button className="w-full mt-2 bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full">
            Free Consultation →
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
