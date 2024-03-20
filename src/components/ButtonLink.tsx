import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import clsx from "clsx";

const ButtonLink = ({ className, ...restProps }: PrismicNextLinkProps) => {
  return (
    <PrismicNextLink
      className={clsx(
        "relative inline-flex h-fit w-fit rounded-full border border-blue-100/20 bg-blue-200/10 px-4 py-2 text-blue-200 outline-none ring-cyan-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-cyan-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-cyan-200/40 hover:text-cyan-300 after:hover:bg-opacity-15 focus:ring-2",
        className,
      )}
      {...restProps}
    />
  );
};

export default ButtonLink;
