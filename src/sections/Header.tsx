import { Logo } from "@/components/logo";
import routes from "@/lib/routes";
import Link from "next/link";
import { FC, Fragment } from "react";

const Header: FC = () => {
  const midIndex = Math.floor(routes.length / 2);

  return (
    <header
      className="
        fixed z-50 flex items-center justify-center
        bg-white/20 backdrop-blur-md rounded-3xl shadow-gray-200
        tracking-tighter
        lg:h-12 h-10
        lg:w-1/2 w-4/5
        top-6 left-1/2 lg:left-auto transform -translate-x-1/2
        lg:top-auto lg:translate-y-1/2 lg:translate-x-1/2
        py-3
      "
    >
      <nav>
        <ul className="flex flex-row lg:gap-8 lg:text-base gap-3 text-sm items-center justify-between">
          {routes.map((route, idx) => {
            if (idx + 1 === midIndex) {
              return (
                <Fragment key={route.name}>
                  <li className="hover:text-stone-800">
                    <Link href={route.selector}>{route.name}</Link>
                  </li>
                  <li>
                    <Link href="/">
                      <Logo />
                    </Link>
                  </li>
                </Fragment>
              );
            }
            return (
              <li key={idx} className="hover:text-stone-800">
                <Link href={route.selector}>{route.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
