import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { SelectorBar } from "../components/selectorBar";

export default function Home() {
  return (
    <Box sx={{ marginTop: "100px" }}>
      <Paper
        sx={(theme) => ({
          margin: "8rem 2rem 0 2rem",
          padding: "1rem",

          [theme.breakpoints.only("xs")]: {
            margin: "8rem 0 0 0",
          },
        })}>
        <SelectorBar selectLabel="type" selectType="topParent" />
      </Paper>
    </Box>
  );
}
