# Purple Calculator

Este é um projeto de uma calculadora simples - ou nem tanto - e moderna com tema roxo.

## Funcionalidades

- **Operações Aritméticas Básicas**: Suporte para adição, subtração, multiplicação e divisão.
- **Display Duplo**: Mostra tanto a operação sendo digitada quanto o resultado anterior.
- **Manipulação de Entrada**: Funções para limpar a entrada atual (CE) ou limpar todo o cálculo (C).
- **Suporte a Decimais**: Permite o uso de vírgula para números decimais.
- **Histórico de Operações**: Salva e exibe um histórico dos cálculos realizados.

## Tecnologias Utilizadas

- **Frontend**:
  - **React**: Biblioteca principal para construção da interface.
  - **TypeScript**: Superset do JavaScript para tipagem estática.
  - **Vite**: Ferramenta de build rápida para desenvolvimento.
  - **Tailwind CSS**: Para estilização utilitária e criação do design.

## Como Executar o Projeto

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/IsaaczZj/purple-calculator.git
    ```

2.  **Acesse o diretório do projeto:**

    ```bash
    cd purple-calculator
    ```

3.  **Instale as dependências:**
    (Recomendado usar pnpm, pois o projeto contém o arquivo `pnpm-lock.yaml`)

    ```bash
    pnpm install
    ```

    ou se você utiliza npm:

    ```bash
    npm install
    ```

4.  **Execute o servidor de desenvolvimento:**

    ```bash
    pnpm run dev
    ```

    ou

    ```bash
    npm run dev
    ```

5.  Abra o navegador no endereço fornecido (geralmente `http://localhost:5173`).

## Estrutura do Projeto

- **`src/`**: Contém todo o código fonte da aplicação.
  - **`components/`**: Componentes React reutilizáveis (ex: `Button.tsx`, `CalculatorDisplay.tsx`, `Card.tsx`).
  - **`context/`**: Contextos React para gerenciamento de estado (`CalculatorContext.tsx`).
  - **`hooks/`**: Hooks customizados com a lógica da aplicação (`useCalculator.tsx`, `useSaveData.tsx`).
  - **`main.tsx`**: Ponto de entrada da aplicação React.
  - **`App.tsx`**: Componente raiz da aplicação.
  - **`globals.css`**: Estilos globais e diretivas do Tailwind CSS.
- **`public/`**: Arquivos estáticos que são servidos diretamente pelo Vite.
- **`index.html`**: Arquivo HTML principal da aplicação.
- **`vite.config.ts`**: Arquivo de configuração para o Vite.
- **`tsconfig.json`**: Arquivo de configuração do TypeScript.
- **`package.json`**: Define as informações do projeto, scripts e dependências.
- **`pnpm-lock.yaml`**: Arquivo de lock de dependências do pnpm.
