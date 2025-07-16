import { useState } from "react";
import { useSaveData } from "./useSaveData";

export function useCalculator() {
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");
  const { saveHistory } = useSaveData();

  function doOperation(value: string) {
    if (value === "C") {
      setOperation("");
      setResult("");
      return;
    }
    if (value === "CE") {
      setResult("");
      setOperation(operation.slice(0, -1));
      return;
    }
    if (value === "=") {
      const operationResult = eval(`${operation.replace(/,/g, ".")}`);
      const parsedResult = operationResult.toString().replace(/\./g, ",");
      const decimalPart = String(operationResult.toString().split(".")[1]);
      let counter = 0;
      for (let i = 0; i < decimalPart.length; i++) {
        counter++;
      }
      if (counter <= 10) {
        setResult(parsedResult);
        saveHistory(operation, parsedResult);
      } else {
        const newResult = Number(parsedResult.replace(/,/g, ".")).toFixed(10);
        setResult(`${newResult.toString()}...`);
        saveHistory(operation, newResult.toString());
      }

      return;
    }
    if (result) {
      const valueNumber = Number(value);
      setOperation(isNaN(valueNumber) ? `${result}${value}` : `${value}`);
      setResult("");
      return;
    }

    if (value === "," && !operation.endsWith(",")) {
      setOperation(`${operation},`);
      return;
    }

    setOperation(`${operation}${value}`);
  }

  return {
    operation,
    result,
    doOperation
  };
}
