import { Logo } from "@/components/logo";
import { useScroll } from "@/hooks/use-scroll";
import routes from "@/lib/routes";
import { ROUTE_MEDIAN } from "@/lib/utils";
import Link from "next/link";
import { FC, Fragment, useEffect, useState } from "react";
import scrollClick from "@/utils/scrollClick";

const Header: FC = () => {
  const [active, setActive] = useState<boolean>(false);
  const sectionID = routes.map((val) => val.selector);

  const activeSection = useScroll(sectionID, 80);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        fixed 
        z-[998] 
        flex 
        items-center 
        justify-center
        backdrop-blur-md 
        rounded-3xl 
        shadow-gray-200
        tracking-tighter
        lg:h-12 
        h-12
        lg:w-1/2 
        w-11/12
        top-6 
        left-1/2 
        lg:left-auto 
        transform 
        -translate-x-1/2
        lg:top-auto 
        lg:translate-y-1/2 
        lg:translate-x-1/2
        will-change-transform
        py-3
        transition-all
        duration-300
        ${active ? "bg-black/80  text-white" : "bg-transparent text-white"}
      `}
    >
      <nav className="font-primary">
        <ul className="flex flex-row lg:gap-8 lg:text-base gap-3 text-sm items-center justify-between">
          {routes.map((route, idx) => {
            const isActive = activeSection === route.selector;

            if (idx + 1 === ROUTE_MEDIAN) {
              return (
                <Fragment key={route.name}>
                  <li
                    className={`hover:text-stone-300 hover:underline underline-offset-3 transition-all duration-500 hover:decoration-[#047857] `}
                  >
                    <Link
                      href={route.selector}
                      onClick={scrollClick(route.selector)}
                    >
                      {route.name}
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <Logo isAnimated />
                    </Link>
                  </li>
                </Fragment>
              );
            }
            return (
              <li
                key={idx}
                className="hover:text-stone-300 hover:underline underline-offset-3 transition-all duration-500 hover:decoration-[#047857]"
              >
                <Link
                  href={route.selector}
                  onClick={scrollClick(route.selector)}
                >
                  {route.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
