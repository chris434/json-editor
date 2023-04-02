import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Redo from "@mui/icons-material/Redo";
import Undo from "@mui/icons-material/Undo";
import File from "@mui/icons-material/Article";
import MenuIcon from "@mui/icons-material/Menu";
import MenuList from "@mui/material/MenuList";
import Divider from "@mui/material/Divider";
import { MenuItem } from "./menuItem";
import { TooLTipButton } from "../components/toolTipButton";
import { useToggle } from "../hooks/useToggle";

type titleTextAreaProps = {
  defaultValue: string;
  display: any;
  onChange: (e: any) => void;
};

function TitleTextArea({
  defaultValue,
  onChange,
  display,
}: titleTextAreaProps) {
  return (
    <Typography
      component="input"
      value={defaultValue}
      onChange={onChange}
      sx={(theme) => ({
        display: display == "block" ? "none" : "block",
        border: 0,
        [theme.breakpoints.up("sm")]: {
          display,
        },
      })}
    />
  );
}

export function Header() {
  const [toggle, toggleValue] = useToggle();
  const [title, setTitle] = useState("untitled");
  return (
    <AppBar sx={{ backgroundColor: "transparent", color: "black" }}>
      <Toolbar>
        <Box width="100%">
          <Box
            marginTop="1rem"
            alignItems="center"
            display="flex"
            justifyContent="space-between"
            width="100%">
            <TooLTipButton
              title="menu"
              onClick={() => toggleValue()}
              styles={(theme: any) => ({
                display: "block",
                [theme.breakpoints.up("sm")]: {
                  display: "none",
                },
              })}>
              <MenuIcon />
            </TooLTipButton>

            <Box display="flex" alignItems="center" gap="2rem">
              <Typography variant="h5" component="h1">
                {"JSON-{editor}"}
              </Typography>
              <TitleTextArea
                display="block"
                defaultValue={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Box>
            <Switch />
          </Box>

          <MenuList
            sx={(theme) => ({
              display: toggle ? "block" : "none",
              [theme.breakpoints.up("sm")]: {
                display: "flex",
              },
            })}>
            <TitleTextArea
              display="none"
              defaultValue={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Divider sx={{ marginTop: "1rem" }} />

            <MenuItem title="File" Icon={<File />} onClick={() => {}} />
            <MenuItem title="Undo" Icon={<Undo />} onClick={() => {}} />
            <MenuItem title="Redo" Icon={<Redo />} onClick={() => {}} />
          </MenuList>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
