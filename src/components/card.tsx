interface CardProps extends React.ComponentProps<"div"> {}
export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={`bg-(--background) shadow-(--shadow) rounded-2xl ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
}
