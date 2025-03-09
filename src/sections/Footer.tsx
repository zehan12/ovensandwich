import { FC } from "react";
import { Separator } from "@/components/ui/separator";
import routes from "@/lib/routes";
import Link from "next/link";
import scrollClick from "@/utils/scrollClick";

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative py-14 px-4 sm:px-6 lg:px-8 w-full  mx-auto bg-gradient-to-b from-[#0a0a0a] to-emerald-700">
      <div className="flex flex-col items-center justify-center max-w-7xl mx-auto w-full gap-8">
        <h1 className="lg:text-7xl text-4xl font-bold tracking-tighter font-secondary self-center justify-self-center text-center">
          OVENSANDWICH
        </h1>
        <ul className="flex flex-row lg:gap-2  items-center justify-center lg:text-base text-sm max-w-full w-full">
          {routes.map((route, idx) => {
            return (
              <li
                key={idx}
                className={`${
                  routes.length - 1 !== idx && "border-r border-stone-400"
                } flex items-center justify-center text-center`}
              >
                <Link
                  onClick={scrollClick(route.selector)}
                  href={route.selector}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-300 font-primary tracking-tighter hover:underline underline-offset-3 transition-all duration-500 hover:decoration-[#047857] px-4"
                >
                  {route.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <Separator />
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <p className="text-xs leading-5 text-stone-300 text-center font-primary">
            &copy; {currentYear} Tüm hakları saklıdır. |{" "}
            <Link
              href="https://burakdev.com/motion-provider/"
              target="_blank"
              className="hover:text-white hover:underline underline-offset-3 transition-all duration-500 hover:decoration-[#047857]"
            >
              Powered By Motion Provider
            </Link>{" "}
            -{" "}
            <Link
              href="https://burakdev.com/"
              target="_blank"
              className="hover:underline hover:text-white underline-offset-3 transition-all duration-500 hover:decoration-[#047857]"
            >
              Burak Bilen.
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
