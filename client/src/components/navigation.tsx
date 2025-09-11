import { useLocation } from "wouter";

const navItems = [
  { href: "#about", label: "about", command: "cd about" },
  { href: "#projects", label: "projects", command: "cd projects" },
  { href: "#experience", label: "experience", command: "cd experience" },
  { href: "#resume", label: "resume", command: "cd resume" },
];

export function Navigation() {
  const [location] = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border" data-testid="navigation">
      <div className="container mx-auto px-4 py-3">
        <div className="terminal-window rounded-lg">
          <div className="terminal-header">
            <div className="terminal-dot terminal-dot-red"></div>
            <div className="terminal-dot terminal-dot-yellow"></div>
            <div className="terminal-dot terminal-dot-green"></div>
            <span className="text-muted-foreground text-sm ml-4">portfolio@terminal:~$</span>
          </div>
          <div className="px-4 py-2 flex flex-wrap items-center justify-between">
            <div className="text-primary font-semibold">
              <span className="text-accent">{'>'}</span> ./portfolio.sh
            </div>
            <div className="flex space-x-6 mt-2 sm:mt-0">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="hover-glow transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring/60 rounded-sm px-1"
                  data-command={item.command}
                  data-testid={`nav-link-${item.label}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}


