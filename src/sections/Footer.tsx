import routes from "@/lib/routes";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-14 px-4 sm:px-6 lg:px-8 w-full  mx-auto bg-gradient-to-b from-[#0a0a0a] to-emerald-700">
      <div className="flex flex-col items-center justify-center max-w-7xl mx-auto w-full gap-8">
        <h1 className="lg:text-7xl text-5xl font-bold tracking-tighter font-secondary self-center justify-self-center text-center">
          OVENSANDWICH
        </h1>
        <ul className="items-center justify-center flex flex-row  gap-2 lg:text-base text-sm">
          {routes.map((route, index) => (
            <li
              key={index}
              className={`${
                routes.length - 1 !== index && "border-r border-stone-400 "
              } w-24 items-center text-center   justify-center flex`}
            >
              <Link
                href={route.selector}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-stone-300 font-primary tracking-tighter hover:underline underline-offset-3 transition-all duration-500  hover:decoration-[#047857]"
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8 pt-4 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <p className="text-xs leading-5 text-muted-foreground text-center font-secondary">
            &copy; {currentYear} Tüm hakları saklıdır. | Powered By Motion
            Provider - Burak Bilen.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
