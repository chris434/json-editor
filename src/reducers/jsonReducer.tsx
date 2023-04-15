import { updateLanguageServiceSourceFile } from "typescript";

type stateProps = {
  title: string;
  data: [];
};

type payloadProps = {
  index?: number;
  data: object;
};

export function jsonReducer(
  state: stateProps,
  action: { type: "updateJsonData"; payload: payloadProps }
) {
  const { type, payload } = action;
  switch (type) {
    case "updateJsonData":
      return (state = updateJsonData(payload, state));
  }
}

function updateJsonData(payload: payloadProps, state: stateProps): stateProps {
  const { index, data } = payload;
  const newData: any = {
    ...state,
    data: state.data.map((item: any, i) => {
      if (i === index) return { ...item, ...data };

      return item;
    }),
  };
  return newData;
}
