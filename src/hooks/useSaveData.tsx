import { useContext } from "react";
import { CalculatorContext } from "../context/CalculatorContext";

export function useSaveData() {
  const context = useContext(CalculatorContext);
  if (!context) throw new Error("O provider precisa emcapsular os componentes");
  return context;
}
