import { createContext, useEffect, useState } from "react";

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
  const HISTORY_STORAGE_KEY = "@history";
  function saveHistory(operation: string, parsedResult: string) {
    if (!history.includes(`${operation}=${parsedResult}`)) {
      setHistory((prevHistory) => {
        const updatedHistory = [...prevHistory, `${operation}=${parsedResult}`];
        localStorage.setItem(
          HISTORY_STORAGE_KEY,
          JSON.stringify(updatedHistory)
        );
        return updatedHistory;
      });
    }
  }
  
  function loadHistory() {
    const storageHistory = localStorage.getItem(HISTORY_STORAGE_KEY);
    if (storageHistory) {
      const parsedhistory = JSON.parse(storageHistory);
      setHistory(parsedhistory);
      return
    }
  }
  useEffect(() => {
    loadHistory();
  }, []);

  return (
    <CalculatorContext.Provider value={{ history, saveHistory }}>
      {children}
    </CalculatorContext.Provider>
  );
}
