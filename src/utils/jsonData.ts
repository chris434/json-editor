type jsonDataProps = {
  data: [
    {
      childrenIndexes: [number];
    }
  ];
};

export const getData = (
  jsonData: jsonDataProps,
  dataIndex: number,
  cb: Function
) => {
  return jsonData.data.filter((itemA, i) => {
    const hasIndex = jsonData.data[dataIndex].childrenIndexes.some(
      (itemB) => i === itemB
    );
    return cb(hasIndex, itemA);
  });
};

export const deleteChildren = (jsonData: jsonDataProps, dataIndex: number) => {
  return getData(jsonData, dataIndex, (hasIndex: boolean, item: object) => {
    if (!hasIndex) return item;
  });
};

const getChildren = (jsonData: jsonDataProps, dataIndex: number) => {
  return getData(jsonData, dataIndex, (hasIndex: boolean, item: object) => {
    if (!hasIndex) return item;
  });
};
