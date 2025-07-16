import { useSaveData } from "../hooks/useSaveData";
import { Card } from "./card";
import { Text } from "./text";

export function OperatorHistory() {
  const { history } = useSaveData();
  return (
    <Card className="py-10 px-8 w-full">
      <Text as="h1" variant="heading" className="mb-4">
        Histórico de Operações
      </Text>
      {history.length > 0 ? (
        <ul className="flex flex-col gap-3 px-2 overflow-y-auto max-h-96 scroll">
          {history.map((history, i) => (
            <Text key={i} as="li">
              {" "}
              <Text as="span" variant="muted">
                {history}
              </Text>{" "}
            </Text>
          ))}
        </ul>
      ) : (
        <Text as="p" variant="muted">
          Nenhuma operação foi encontrada
        </Text>
      )}
    </Card>
  );
}
