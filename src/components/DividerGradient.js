import React from "react";
import { Divider } from "@mui/material";
import colors from "..//data/colors";

function DividerGradient(props) {
  const { direction } = props;
  return (
    <Divider
      sx={{
        mb: 1,
        mx: -2,
        height: 2,
        background:
          direction === "right" ? colors.gradientRight : colors.gradientLeft,
      }}
    />
  );
}

export default DividerGradient;
