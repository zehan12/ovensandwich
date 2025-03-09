import { MenuItemProps } from "@/interfaces";
import { FC } from "react";

const MenuItem: FC<MenuItemProps> = (props) => {
  const { price, title, desc } = props;

  return (
    <li className="items-center justify-between flex flex-row py-2 px-4">
      <div className="flex flex-col">
        <span className="lg:text-base lg:tracking-tight text-sm font-secondary">
          {title}
        </span>
        <span className="text-xs font-light text-stone-400  ">{desc}</span>
      </div>
      <span className="text-sm font-primary font-semibold">{price} TL</span>
    </li>
  );
};

export default MenuItem;
