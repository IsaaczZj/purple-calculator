import { Text } from "./text";

interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: "default" | "primary";
}

export function Button({
  variant = "default",
  children,
  className,
  ...props
}: ButtonProps) {
  const buttonVariant = {
    default: "bg-(--background)",
    primary: "bg-(--primary)",
  };

  return (
    <Text
      as="button"
      variant="heading"
      className={`  
        flex items-center justify-center rounded-xl p-3 cursor-pointer text-(--text) 
        bg-linear-(--gradient) hover:bg-linear-(--gradient-hover) shadow-(--shadow)
        ${buttonVariant[variant]} ${className ? className : ''}
    `}
      {...props}
    >
      {children}
    </Text>
  );
}
