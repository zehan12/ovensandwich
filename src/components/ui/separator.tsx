import Link from "next/link";
import { Logo } from "../logo";

export const Separator = () => (
  <div className="flex items-center w-full">
    <div className="rounded-full w-full h-[1px] bg-gradient-to-r from-transparent dark:from-zinc-800 dark:to-zinc-400 to-zinc-500" />
    <div className="text-gray-600 uppercase w-fit dark:text-gray-300 text-nowrap">
      <Link href="/">
        <Logo width={150} height={150} className="my-8" />
      </Link>
    </div>
    <div className="bg-gradient-to-r rounded-full w-full h-[1px] from-zinc-500 dark:from-zinc-200 to-transparent dark:to-zinc-700" />
  </div>
);
