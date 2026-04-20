import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "default" | "icon";
};

export function Button({
  className = "",
  size = "default",
  type = "button",
  ...props
}: ButtonProps) {
  const sizeClass = size === "icon" ? "inline-flex items-center justify-center" : "";

  return (
    <button
      type={type}
      className={`${sizeClass} ${className}`.trim()}
      {...props}
    />
  );
}