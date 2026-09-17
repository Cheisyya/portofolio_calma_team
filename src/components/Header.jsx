import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
      setScrolled(scrollTop > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#beranda", label: "Beranda" },
    { href: "#proyek", label: "Proyek" },
    { href: "#tim", label: "Tim" },
  ];

  return (
    <>
      <div className="progress-bar" style={{ width: `${progress}%` }} />
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="header-inner">
          <a href="#beranda" className="brand">
            <span className="brand-mark">C</span>
            <span className="brand-name">Calma</span>
          </a>

          <nav className={`main-nav${navOpen ? " is-open" : ""}`}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
                onClick={() => setNavOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            className="nav-toggle"
            aria-label="Buka menu"
            onClick={() => setNavOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
    </>
  );
}
