import { Card } from "./card";
import { Text } from "./text";

export function OperatorHistory() {
  return (
    <Card className="py-10 px-8 w-full">
      <Text as="h1" variant="heading" className="mb-4">
        Histórico de Operações
      </Text>
      <ul className="flex flex-col gap-3 px-2 overflow-y-auto max-h-96 scroll">
        <Text as="li">
          {" "}
          <Text as="span" variant="muted">
            1 + 1 =
          </Text>{" "}
          2
        </Text>
        <Text as="li">
          {" "}
          <Text as="span" variant="muted">
            4 + 3 =
          </Text>{" "}
          7
        </Text>
        <Text as="li">
          {" "}
          <Text as="span" variant="muted">
            7 + 9 =
          </Text>{" "}
          16
        </Text>
      </ul>
    </Card>
  );
}
