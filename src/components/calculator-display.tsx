import { Text } from "./text";

interface CalculatorDisplayProps {
  operation: string;
  result: string;
}

export function CalculatorDisplay({
  operation,
  result,
}: CalculatorDisplayProps) {
  return (
    <div className="flex flex-col gap-2 px-5 cursor-default select-none">
      <Text
        as="div"
        variant="muted"
        className="flex items-center justify-end h-7"
      >
        {operation}
      </Text>
      <div className="flex items-center justify-between">
        <Text as="div" variant="muted">
          =
        </Text>
        <Text as="div" variant="blast">
          {result}
        </Text>
      </div>
    </div>
  );
}
