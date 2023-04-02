import { ReactNode } from "react";
import MuiMenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

type menuItemProps = {
  title: string;
  Icon: ReactNode;
  onClick: (e: object) => void;
};

export function MenuItem({ title, onClick, Icon }: menuItemProps) {
  return (
    <MuiMenuItem onClick={onClick}>
      <ListItemIcon>{Icon}</ListItemIcon>
      <ListItemText>{title}</ListItemText>
    </MuiMenuItem>
  );
}
