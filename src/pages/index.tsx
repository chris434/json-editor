import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { SelectorBar } from "../components/selectorBar";
import { useJson } from "../providers/jsonProvider";

export default function Home() {
  const { jsonData } = useJson();
  return (
    <Box sx={{ marginTop: "100px" }}>
      <Paper
        sx={(theme) => ({
          margin: "8rem 1rem 0 1rem",
          padding: "1rem",

          [theme.breakpoints.only("xs")]: {
            margin: "8rem 0 0 0",
          },
        })}>
        <SelectorBar selectType="topParent" />
      </Paper>
    </Box>
  );
}
