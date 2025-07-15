import React from "react";

interface TextProps {
  as: string;
  variant: "default" | "muted" | "heading" | "blast";
  className?: string;
  children: React.ReactNode;
}

export function Text({
  as = "span",
  variant,
  className,
  children,
  ...props
}: TextProps) {
  const textVariants = {
    default: "text-xl",
    muted: "text-md text-(--text-secondary)",
    heading: "text-2xl",
    blast: "text-3xl",
  };

  return React.createElement(as, {
    ...props,
    variant,
    className: `${textVariants[variant]} ${className ? className : ""}`,
    children,
  });
}
