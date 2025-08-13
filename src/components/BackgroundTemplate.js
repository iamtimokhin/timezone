import React from "react";
import { Box } from "@mui/material";
import colors from "../data/colors";
function BackgroundTemplate({ children }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: colors.backgroundTemplate.background,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
      }}
    >
      {children}
    </Box>
  );
}

export default BackgroundTemplate;
