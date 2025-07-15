import { createContext, useState } from "react";

type CalculatorContextType = {
  history: string[];
  saveHistory: (operation: string, parsedResult: string) => void;
};
export const CalculatorContext = createContext({} as CalculatorContextType);

export function CalculatorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [history, setHistory] = useState<string[]>([]);

  function saveHistory(operation: string, parsedResult: string) {
    if (!history.includes(`${operation}=${parsedResult}`)) {
      setHistory((prev) => [...prev, `${operation}=${parsedResult}`]);
      return;
    }
  }

  return (
    <CalculatorContext.Provider value={{ history, saveHistory }}>
      {children}
    </CalculatorContext.Provider>
  );
}
