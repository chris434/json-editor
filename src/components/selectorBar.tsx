import { useRef } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import { Select } from "./select";
import { TooLTipButton } from "./toolTipButton";
import { TOP_PARENT_TYPES, TYPES } from "../data/typesData";
import { useJson } from "../providers/jsonProvider";

type selectorBarProps = {
  selectType?: "topParent" | "default";
  dataIndex?: number;
};

export function SelectorBar({
  selectType = "default",
  dataIndex = 0,
}: selectorBarProps) {
  const previousType = useRef("");
  const { dispatchJson, jsonData } = useJson();
  const { collapsed, type, childrenIndexes, parentIndex } = jsonData.data[
    dataIndex
  ];
  const types = selectType === "default" ? TYPES : TOP_PARENT_TYPES;

  const parentType =
    parentIndex !== null ? jsonData.data[parentIndex].type : null;
  console.log(parentType);

  const getChildren = () => {
    return jsonData.data.filter((itemA, i) => {
      const hasIndex = jsonData.data[dataIndex].childrenIndexes.some(
        (itemB) => i === itemB
      );

      if (hasIndex) return itemA;
    });
  };

  const getArrayIndex = () => {
    if (parentType == "Array") {
      return jsonData.data[parentIndex].childrenIndexes.indexOf(dataIndex);
    }
  };

  const isMultipleType = () => {
    return type === "Array" || type === "Object";
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          marginBottom: "1rem",
        }}>
        {type === "Array" ? (
          <TooLTipButton
            title={collapsed ? "expand" : "collapse"}
            onClick={(e) =>
              dispatchJson({
                type: "updateJsonData",
                payload: { index: dataIndex, data: { collapsed: !collapsed } },
              })
            }>
            {collapsed ? (
              <ExpandMore fontSize="large" />
            ) : (
              <ExpandLess fontSize="large" />
            )}
          </TooLTipButton>
        ) : (
          <Box width="51px" height="51px"></Box>
        )}

        <Box
          sx={(theme) => ({
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "0.5rem",

            [theme.breakpoints.only("xs")]: {
              gap: "1rem",
              flexDirection: "column",
              alignItems: "flex-end",
            },
          })}>
          {selectType === "default" && parentType !== "Array" && (
            <TextField size="small" sx={{ width: "8rem" }} label="value" />
          )}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {parentType === "Array" && `${getArrayIndex()}:`}
            <Select
              label="type"
              items={types}
              value={type}
              onChange={(e: any) => {
                const { value } = e.target;

                if (!previousType.current) {
                  previousType.current = value;
                  dispatchJson({
                    type: "updateJsonData",
                    payload: {
                      index: dataIndex,
                      data: { type: value },
                    },
                  });
                  dispatchJson({
                    type: "addField",
                    payload: {
                      data: {
                        parentIndex: dataIndex,
                        index: jsonData.data.length,
                      },
                    },
                  });
                } else if (previousType.current !== value) {
                  previousType.current = value;
                  dispatchJson({
                    type: "replaceField",
                    payload: {
                      index: dataIndex,
                      data: { type: value },
                    },
                  });
                }
              }}
            />
          </Box>
          {selectType === "default" && (
            <TextField size="small" sx={{ width: "8rem" }} label="field" />
          )}
          {isMultipleType() && (
            <Button
              onClick={() =>
                dispatchJson({
                  type: "addField",
                  payload: {
                    data: {
                      parentIndex: dataIndex,
                      index: jsonData.data.length,
                    },
                  },
                })
              }>
              add field
            </Button>
          )}
        </Box>
      </Box>

      {!collapsed && isMultipleType() && (
        <>
          <Divider />
          <Box sx={{ padding: "1rem" }}>
            {childrenIndexes.length
              ? getChildren().map((data) => {
                  return <SelectorBar dataIndex={data.index} />;
                })
              : "select type"}
          </Box>
        </>
      )}
    </Box>
  );
}
