import { deleteChildren } from "../utils/jsonData";
import { jsonDataProps } from "../types/ globalTypes";

type stateProps = {
  title: string;
  data: [jsonDataProps];
};

type payloadProps = {
  index: number;
  updateIndexes?: boolean;
  data: object;
};

export function jsonReducer(
  state: stateProps,
  action: {
    type: "updateJsonData" | "addField" | "replaceField";
    payload: payloadProps;
  }
) {
  const { type, payload } = action;
  switch (type) {
    case "updateJsonData":
      return (state = updateJsonData(payload, state));
    case "addField":
      return (state = addField(payload, state));
    case "replaceField":
      return (state = replaceJsonData(payload, state));
  }
}

function updateJsonData(payload: payloadProps, state: stateProps): stateProps {
  const { index, updateIndexes, data } = payload;
  const newData: any = {
    ...state,
    data: state.data.map((item: any, i) => {
      if (i === index && !updateIndexes) return { ...item, ...data };
      if (i === index && updateIndexes)
        return { ...item, childrenIndexes: [...item.childrenIndexes, data] };

      return item;
    }),
  };
  console.log(newData);
  return newData;
}

function addField(payload: payloadProps, state: stateProps): stateProps {
  const { data } = payload;
  const { parentIndex, index } = data;
  console.log(data);
  const updatedDate: any = updateJsonData(
    { index: parentIndex, updateIndexes: true, data: index },
    state
  );
  console.log(updatedDate);

  const newField = {
    type: "",
    index,
    childrenIndexes: [],
    collapsed: false,
    parentIndex: parentIndex,
    value: null,
  };
  const newData: any = {
    ...state,
    data: [...updatedDate.data, newField],
  };

  return newData;
}

function replaceJsonData(payload: payloadProps, state: stateProps): stateProps {
  const { index, data } = payload;
  const { type } = data;

  const childIndex = state.data[index].childrenIndexes[0];
  const newFields = deleteChildren(state, index);
  newFields[index].childrenIndexes = [childIndex];
  newFields[index].type = type;
  const newData: any = {
    ...state,
    data: [
      ...newFields,
      {
        type: "",
        index: childIndex,
        childrenIndexes: [],
        collapsed: false,
        parentIndex: index,
        value: null,
      },
    ],
  };
  console.log(newData);

  return newData;
}
