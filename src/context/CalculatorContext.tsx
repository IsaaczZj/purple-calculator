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
  const [history, setHistory] = useState<string[] | []>([]);

  function saveHistory(operarion: string, parsedResult: string) {
    setHistory((prev) => [...prev, `${operarion}=${parsedResult}`]);
  }

  return (
    <CalculatorContext.Provider value={{ history, saveHistory }}>
      {children}
    </CalculatorContext.Provider>
  );
}
