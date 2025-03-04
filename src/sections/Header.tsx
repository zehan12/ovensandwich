import { Logo } from "@/components/logo";
import routes from "@/lib/routes";
import Link from "next/link";
import { FC, Fragment } from "react";

const Header: FC = () => {
  return (
    <header
      className="
        lg:h-12
        h-10 
        lg:w-1/2 
        w-full 
        fixed 
        z-50 
        py-3 
        bg-white/20 
        text-primary  
        text-stone-300 
        backdrop-blur-md 
        rounded-3xl 
        self-center 
        lg:translate-y-1/2
        lg:translate-x-1/2 
        lg:top-auto
        top-4
        my-auto
        shadow-gray-200 
        items-center 
        justify-center 
        flex  
        tracking-tighter"
    >
      <nav>
        <ul className="flex flex-row lg:gap-8 lg:text-base gap-3 text-sm items-center justify-between">
          {routes.map((route, idx) => {
            if (idx + 1 === Math.floor(routes.length / 2)) {
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
