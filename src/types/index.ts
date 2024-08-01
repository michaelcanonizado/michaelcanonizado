export type ComponentBaseProps = {
  className?: string;
  children?: React.ReactNode;
};

export type Link = {
  name: string;
  href: string;
};
export type Links = {
  heading: string;
  links: Link[];
};
