import { useState } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Select } from "./select";
import { TooLTipButton } from "./toolTipButton";
import { TOP_PARENT_TYPES } from "../data/typesData";

type selectorBarProps = {
  selectType: "topParent" | "default";
  inputLabel?: string;
  selectLabel: string;
};

export function SelectorBar({
  selectType = "default",
  inputLabel,
  selectLabel,
}: selectorBarProps) {
  const [topParentValue, setTopParentValue] = useState("");
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "1rem",
        }}>
        <TooLTipButton title="collapse" onClick={() => {}}>
          <ExpandMore fontSize="large" />
        </TooLTipButton>

        <Box
          sx={(theme) => ({
            display: "flex",
            gap: "1rem",
            flexDirection: "row",

            [theme.breakpoints.only("xs")]: {
              flexDirection: "column",
            },
          })}>
          {selectType === "default" && (
            <TextField sx={{ width: "10rem" }} label={inputLabel} />
          )}

          <Select
            label={selectLabel}
            items={TOP_PARENT_TYPES}
            value={topParentValue}
            setValue={setTopParentValue}
          />
        </Box>
      </Box>
      <Divider />
      <Box sx={{ padding: "1rem" }}>select a Type</Box>
    </Box>
  );
}
