import React, { useContext, useMemo, useState } from "react";
import {
  SwipeableDrawer,
  Box,
  IconButton,
  Button,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import themes from "../data/colors";
import ThemeContext from "../context/context";

const ShareSwiper = React.memo(function ShareSwiper({ open, onClose }) {
  const { currentTheme } = useContext(ThemeContext);
  const colors = useMemo(() => themes[currentTheme], [currentTheme]);

  const url = window.location.href;

  const buttons = [
    {
      name: "VK",
      href: `https://vk.com/share.php?url=${encodeURIComponent(url)}`,
      color: "#4a76a8",
    },
    {
      name: "Mail",
      href: `mailto:?subject=Ссылка&body=${encodeURIComponent(url)}`,
      color: "#d44638",
    },
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}`,
      color: "#1877f2",
    },
  ];

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      ModalProps={{ keepMounted: true, sx: { zIndex: 1500 } }}
      PaperProps={{
        sx: {
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.85)",
          backdropFilter: "blur(6px)",
          boxShadow: "none",
          overflow: "hidden",
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
          zIndex: 1600,
        }}
        aria-label="close"
      >
        <CloseIcon />
      </IconButton>

      {/* Контент */}
      <Box
        sx={{
          width: "90%",
          maxWidth: 360,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{ color: "#fff", fontWeight: "bold", mb: 3 }}
        >
          Поделиться ссылкой
        </Typography>

        {buttons.map((btn) => (
          <Button
            key={btn.name}
            component="a"
            href={btn.href}
            target="_blank"
            rel="noopener noreferrer"
            fullWidth
            sx={{
              width: "100%",
              minHeight: 50,
              background: btn.color,
              color: "#fff",
              fontWeight: "bold",
              textTransform: "none",
              borderRadius: 3,
              boxShadow: colors.contacts.boxShadow,
              transition: "transform 0.1s",
              "&:hover": { background: btn.color },
              "&:active": {
                background: btn.color,
                transform: "scale(0.97)",
              },
            }}
          >
            {btn.name}
          </Button>
        ))}
      </Box>
    </SwipeableDrawer>
  );
});

export default ShareSwiper;
