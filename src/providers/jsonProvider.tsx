import { useContext, createContext, useReducer, ReactNode, useId } from "react";
import { jsonReducer } from "../reducers/jsonReducer";

type jsonProviderProps = {
  children: ReactNode;
};

const Provider = createContext<any>({
  jsonData: {},
  dispatchJson: () => {},
});

export function JsonProvider({ children }: jsonProviderProps) {
  const id = useId();

  const INITIAL_DATA: any = {
    title: "",
    data: [
      {
        type: "",
        index: 0,
        childrenIndexes: [],
        collapsed: false,
        parentIndex: null,
        value: null,
      },
    ],
  };
  const [jsonData, dispatchJson] = useReducer(jsonReducer, INITIAL_DATA);

  return (
    <Provider.Provider value={{ jsonData, dispatchJson }}>
      {children}
    </Provider.Provider>
  );
}

export function useJson() {
  const { jsonData, dispatchJson } = useContext(Provider);
  return { jsonData, dispatchJson };
}
