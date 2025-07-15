import { CalculatorDisplay } from "./components/calculator-display";
import { Card } from "./components/card";

export function App() {
  return (
    <div className="min-h-screen text-(--text) font-(--font-sans) bg-linear-[180deg,_#807ECE_0%,_#8E7ECE_100%] flex items-center justify-center">
      <Card className="w-40 ">
        <CalculatorDisplay operation="+" result="2" />
      </Card>
    </div>
  );
}
