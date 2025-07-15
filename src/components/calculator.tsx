import { Button } from "./button";
import { CalculatorDisplay } from "./calculator-display";
import { Card } from "./card";
type ButtonPropsArr = {
  value: string;
  className?: string;
  variant?: "default" | "primary";
};

export function Calculator() {
  const buttons:ButtonPropsArr[][] = [
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

  return (
    <Card className="flex flex-col gap-7 w-96 pt-14 px-8 pb-8">
      <CalculatorDisplay operation="1 + 1" result="2" />
      <div className="flex flex-col gap-3">
        {buttons.map((row, i) => (
          <div key={i} className="flex gap-3">
            {row.map((button) => (
              <Button
                key={button.value}
                className={`${button.className || "w-16 h-16"}`}
                variant={button.variant}
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
