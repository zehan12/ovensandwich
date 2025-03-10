import { MenuItemProps } from "@/interfaces";
import { FC } from "react";

const MenuItem: FC<MenuItemProps> = (props) => {
  const { price, title, desc } = props;

  return (
    <li className="items-center justify-between flex flex-row py-2 px-4 w-full">
      <div className="flex flex-col w-full h-auto items-start justify-between">
        <span className="lg:tracking-tight text-base font-secondary">
          {title}
        </span>
        <span className="text-sm font-light text-stone-400 lg:max-w-lg max-w-xs">
          {desc}
        </span>
      </div>
      <span className="text-sm font-secondary font-semibold w-16">
        {price} TL
      </span>
    </li>
  );
};

export default MenuItem;
