import React, { useContext, useMemo } from "react";
import { SwipeableDrawer, IconButton, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import themes from "../data/colors";
import ThemeContext from "../context/context";

const AvatarSwiper = React.memo(function AvatarSwiper(props) {
  const { currentTheme } = useContext(ThemeContext);
  const colors = useMemo(() => themes[currentTheme], [currentTheme]);
  const { onClose, onOpen, image, name, open } = props;
  return (
    <SwipeableDrawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      onOpen={onOpen}
      PaperProps={{
        sx: {
          height: "100vh",
          backgroundColor: "transparent",
          boxShadow: "none",
          overflow: "visible",
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        },
      }}
    >
      {/* Кнопка закрытия */}
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          color: "white",
          backgroundColor: "rgba(0,0,0,0.3)",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.5)" },
        }}
        aria-label="close"
      >
        <CloseIcon />
      </IconButton>

      <Box
        component="img"
        src={image}
        alt={`${name} avatar`}
        sx={{
          width: 250,
          height: 250,
          borderRadius: "50%",
          border: colors.profileHeader.avatarBorder,
          objectFit: "cover",
          boxShadow: "0 0 15px rgba(0,0,0,0.3)",
          cursor: "pointer",
          animation: "pulse 2s infinite", // 👈 Анимация
          "@keyframes pulse": {
            "0%": {
              boxShadow: "0 0 0 0 rgba(39,135,245, 0.7)",
            },
            "70%": {
              boxShadow: "0 0 0 20px rgba(39,135,245, 0)",
            },
            "100%": {
              boxShadow: "0 0 0 0 rgba(39,135,245, 0)",
            },
          },
        }}
        onClick={onClose}
      />
    </SwipeableDrawer>
  );
});

export default AvatarSwiper;
