import React from "react";
import { SwipeableDrawer, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const GalleryImageSwiper = React.memo(function GalleryImageSwiper({
  open,
  onClose,
  onOpen,
  image,
  alt,
}) {
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
          zIndex: 2,
        }}
        aria-label="close"
      >
        <CloseIcon />
      </IconButton>

      <Box
        component="img"
        src={image}
        alt={alt || "gallery image"}
        sx={{
          maxWidth: "90vw",
          maxHeight: "80vh",
          borderRadius: 8,
          objectFit: "contain",
          boxShadow: "0 0 20px rgba(0,0,0,0.5)",
          cursor: "pointer",
          animation: "pulse 2s infinite",
          "@keyframes pulse": {
            "0%": {
              boxShadow: "0 0 0 0 rgba(39,135,245, 0.7)",
            },
            "70%": {
              boxShadow: "0 0 0 30px rgba(39,135,245, 0)",
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

export default GalleryImageSwiper;
