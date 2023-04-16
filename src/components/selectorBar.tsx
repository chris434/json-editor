import { useRef } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import { Select } from "./select";
import { TooLTipButton } from "./toolTipButton";
import { TOP_PARENT_TYPES } from "../data/typesData";
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
  const { collapsed, type, childrenIndexes } = jsonData.data[dataIndex];

  const getChildren = () => {
    return jsonData.data.filter((itemA, i) => {
      const hasIndex = jsonData.data[dataIndex].childrenIndexes.some(
        (itemB) => i === itemB
      );

      if (hasIndex) return itemA;
    });
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          marginBottom: "1rem",
        }}>
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

        <Box
          sx={(theme) => ({
            display: "flex",
            flexDirection: "row",
            alignItems: "center",

            [theme.breakpoints.only("xs")]: {
              gap: "1rem",
              flexDirection: "column",
            },
          })}>
          {selectType === "default" && (
            <TextField size="small" sx={{ width: "8rem" }} label="field" />
          )}
          <Select
            label="type"
            items={TOP_PARENT_TYPES}
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
      </Box>
      <Divider />
      {!collapsed && (
        <Box sx={{ padding: "1rem" }}>
          {childrenIndexes.length
            ? getChildren().map((data) => {
                return <SelectorBar dataIndex={data.index} />;
              })
            : "select type"}
        </Box>
      )}
    </Box>
  );
}
