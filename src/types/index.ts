export type ComponentBaseProps = {
  className?: string;
  children?: React.ReactNode;
};

export type Link = {
  src: string;
  name: string;
};
export type Links = {
  heading: string;
  links: Link[];
};
