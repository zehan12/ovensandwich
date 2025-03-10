import { ItemGroupProps } from "@/interfaces";
import routes from "./routes";

const MOBILE_BREAKPOINT = 768;
const ROUTE_MEDIAN = Math.floor(routes.length / 2);
const INSTAGRAM_URL = "https://www.instagram.com/ovens.andwich/";
const CATEGORY_TRANSLATION = {
  sandwich: "sandviçlerimiz",
  toast: "tostlarımız",
  desert: "tatlılarımız",
  beverage: "içeceklerimiz",
} as Record<ItemGroupProps, string>;
const ANALYTICS_ID = "G-1L6T9ZBZQG";

export {
  MOBILE_BREAKPOINT,
  ROUTE_MEDIAN,
  INSTAGRAM_URL,
  CATEGORY_TRANSLATION,
  ANALYTICS_ID,
};
