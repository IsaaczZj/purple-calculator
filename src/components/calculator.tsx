import { Button } from "./button";
import { CalculatorDisplay } from "./calculator-display";
import { Card } from "./card";
import { useCalculator } from "../hooks/useCalculator";
type ButtonPropsArr = {
  value: string;
  className?: string;
  variant?: "default" | "primary";
};

export function Calculator() {
  const { operation, result, doOperation } = useCalculator();

  const buttons: ButtonPropsArr[][] = [
    [
      { value: "CE" },
      { value: "C", className: "flex-1 h-16" },
      { value: "/", variant: "primary" },
    ],
    [
      { value: "7" },
      { value: "8" },
      { value: "9" },
      { value: "*", variant: "primary" },
    ],
    [
      { value: "4" },
      { value: "5" },
      { value: "6" },
      { value: "-", variant: "primary" },
    ],
    [
      { value: "1" },
      { value: "2" },
      { value: "3" },
      { value: "+", variant: "primary" },
    ],
    [
      { value: "0", className: "flex-1 h-16" },
      { value: "," },
      {
        value: "=",
        className: "w-16 h-16 bg-[#7f45e2]",
      },
    ],
  ];
  function handleClick(value: string) {
    doOperation(value);
  }
  return (
    <Card className="flex flex-col gap-7 w-96 pt-14 px-12 pb-8">
      <CalculatorDisplay operation={operation} result={result} />
      <div className="flex flex-col gap-3">
        {buttons.map((row, i) => (
          <div key={i} className="flex gap-3 ">
            {row.map((button) => (
              <Button
                key={button.value}
                className={`${button.className || "w-16 h-16"}`}
                variant={button.variant}
                onClick={() => handleClick(button.value)}
              >
                {button.value}
              </Button>
            ))}
          </div>
        ))}
      </div>
    </Card>
  );
}
