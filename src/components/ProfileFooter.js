import React, { useContext, useMemo } from "react";
import { Typography, Box } from "@mui/material";
import themes from "..//data/colors";
import ThemeContext from "../context/context";
function ProfileFooter() {
  const { currentTheme } = useContext(ThemeContext);
  const colors = themes[currentTheme];
  return (
    <>
      <Box
        sx={{
          mt: 1,
          textAlign: "center",
        }}
      >
        <Typography
          variant="caption"
          component="a"
          href="https://t.me/ТВОЙ_ЮЗЕР" // сюда твоя реальная ссылка на Telegram
          target="_blank"
          sx={{
            color: colors.profileFooter.typographyColor,
            fontSize: 11,
            letterSpacing: 0.5,
            textDecoration: "none",
            transition: "color 0.2s ease",
            "&:hover": {
              color: colors.profileFooter.hoverColor,
              textDecoration: "underline",
            },
            cursor: "pointer",
          }}
        >
          Хотите такую визитку?
        </Typography>
      </Box>
    </>
  );
}
export default ProfileFooter;
