import { Calculator } from "./components/calculator";
import { OperatorHistory } from "./components/operator-history";

export function App() {
  return (
    <div className="min-h-screen text-(--text) font-(--font-sans) bg-linear-[180deg,_#807ECE_0%,_#8E7ECE_100%] flex items-center justify-center">
      <main className="flex flex-col items-center gap-2 sm:flex-row sm:items-stretch">
        <Calculator />
        <OperatorHistory/>
      </main>
    </div>
  );
}
