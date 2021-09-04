import React from "react";
import { usePageContext } from "./usePageContext";

export { Link };

function Link({ href, ...props }: { href: string } & Record<string, unknown>) {
  const pageContext = usePageContext();
  const className = [
    props.className,
    pageContext.urlPathname === href && "is-active",
  ]
    .filter(Boolean)
    .join(" ");
  return <a {...props} href={href} className={className} />;
}
