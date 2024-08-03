export type ComponentBaseProps = {
  className?: string;
  children?: React.ReactNode;
};

export type Link = {
  name: string;
  href: string;
  icon?: React.ReactNode;
};
export type Links = {
  heading: string;
  links: Link[];
};
