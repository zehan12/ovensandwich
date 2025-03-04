import Link from "next/link";
import { Logo } from "@/components/logo";
import routes from "@/lib/routes";

const footerLink = [
  {
    name: "About",
    link: "#",
  },
  {
    name: "Contact",
    link: "3",
  },
  {
    name: "FAQ",
    link: "#",
  },
  {
    name: "Privacy Policy",
    link: "#",
  },
  {
    name: "Terms and Conditions",
    link: "#",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border pt-6 pb-8 px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1.5 bg-foreground rounded-full"></div>

      <div className="flex flex-col items-center space-y-8 md:flex-row md:justify-between md:space-y-0">
        <div className="mt-8 md:mt-0">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
              <Logo />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <p
                className="text-xl font-semibold  text-primary tracking-tighter"
                style={{ fontVariationSettings: '"opsz" 32' }}
              >
                Ovensandwich
              </p>
            </div>
          </Link>
        </div>

        <div className="w-full md:w-auto">
          <nav className="flex flex-wrap justify-center gap-4 text-center md:justify-end">
            {routes.map((item) => (
              <Link
                key={item.name}
                href={item.selector}
                className="text-xs leading-5 text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex justify-center space-x-4">
          <button>
            <Link
              href="https://youtube.com/@zenityteam?si=3FIrYQTbgh0m3UKA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Youtube</span>
            </Link>
          </button>
          <button>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Instagram</span>
            </Link>
          </button>
        </div>
      </div>

      <div className="mt-8 border-t border-border/40 pt-4 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <p className="text-xs leading-5 text-muted-foreground text-center">
            &copy; {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
