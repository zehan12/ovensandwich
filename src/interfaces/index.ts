export interface NavItem {
  selector: string;
  name: string;
}

export interface FloatItem {
  src: string;
  alt: string;
  height: number;
  width: number;
  top: number;
  left: number;
}

export interface FloatItems {
  data: FloatItem[];
  isMobile: boolean;
  wrapperStyle: string;
}

export interface UIButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariants;
  children: React.ReactNode;
  className?: string;
}

export type ButtonVariants =
  | "primary"
  | "secondary"
  | "brand"
  | "accent1"
  | "accent2";

export interface CarouselProps {
  items: React.ReactNode[];
  initialScroll?: number;
}

export interface MenuCardProps {
  src: string;
  title: string;
  category: string;
}

export interface MenuItemProps {
  title: string;
  desc?: string;
  price: number;
  group: ItemGroupProps;
}

export type ItemGroupProps =
  | "sandwich"
  | "desert"
  | "beverage"
  | "cookie"
  | "toast";
export interface SquareDataProps {
  id: number;
  src: string;
}

export interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: any;
}

export interface TestimonialProps {
  title: string;
  name: string;
  job: string;
}

export interface LogoProps {
  className?: string;
  isAnimated?: boolean;
  height?: number;
  width?: number;
}
