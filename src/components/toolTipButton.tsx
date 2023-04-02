import { ReactNode } from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

type tooltipButtonProps = {
  title: string;
  children: ReactNode;
  styles: any;
  onClick: (e: any) => void;
};

export function TooLTipButton({
  title,
  children,
  onClick,
  styles,
}: tooltipButtonProps) {
  return (
    <Tooltip title={title}>
      <IconButton sx={styles} onClick={onClick}>
        {children}
      </IconButton>
    </Tooltip>
  );
}
