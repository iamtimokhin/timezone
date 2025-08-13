import React from "react";
import { Typography, Box, Paper } from "@mui/material";
import badges from "../data/badges";
import colors from "../data/colors";

// typographyMarginBottom = "1.5";
// typographyMarginTop = "1.5";
// boxMarginBottom = 5;
function Statistics() {
  return (
    <>
      <Typography
        mt={-1.5}
        variant="subtitle1"
        mb={1.5}
        fontWeight="bold"
        color="white"
        sx={{ textAlign: "center" }}
      >
        В цифрах
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 1.5,
          mb: colors.boxMarginBottom,
        }}
      >
        {badges.map(({ value, label }) => (
          <Paper
            key={label}
            elevation={0}
            sx={{
              p: 1.5,
              background: colors.statiscics.paperBackground,
              borderRadius: 3,
              textAlign: "center",
              backdropFilter: "blur(6px)",
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ color: colors.statiscics.typographyValueColor, mb: 0.5 }}
            >
              {value}
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: colors.statiscics.typographyLabelColor }}
            >
              {label}
            </Typography>
          </Paper>
        ))}
      </Box>
    </>
  );
}

export default Statistics;
