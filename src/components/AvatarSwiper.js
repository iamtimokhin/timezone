import React, { useContext, useMemo, useState } from "react";
import { SwipeableDrawer, Box, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import themes from "../data/colors";
import ThemeContext from "../context/context";

const AvatarSwiper = React.memo(function AvatarSwiper({
  open,
  onClose,
  onOpen,
  image,
  name,
  status,
  Icon,
}) {
  const { currentTheme } = useContext(ThemeContext);
  const colors = useMemo(() => themes[currentTheme], [currentTheme]);

  const [startY, setStartY] = useState(null);

  const handleTouchStart = (e) => setStartY(e.touches[0].clientY);
  const handleTouchEnd = (e) => {
    if (!startY) return;
    const endY = e.changedTouches[0].clientY;
    if (endY - startY > 100) onClose();
    setStartY(null);
  };

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      onOpen={onOpen}
      ModalProps={{ sx: { zIndex: 1500 } }}
      PaperProps={{
        sx: {
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.8)",
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
          p: 3,
          borderRadius: 3,
          backgroundColor: "transparent",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          animation: "fadeInUp 0.3s ease",
          "@keyframes fadeInUp": {
            "0%": { opacity: 0, transform: "translateY(50px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Аватар */}
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
            boxShadow: "0 0 25px rgba(0,0,0,0.5)",
            mb: 2,
            animation: "pulse 2s infinite",
            "@keyframes pulse": {
              "0%": { boxShadow: "0 0 0 0 rgba(39,135,245, 0.7)" },
              "70%": { boxShadow: "0 0 0 20px rgba(39,135,245, 0)" },
              "100%": { boxShadow: "0 0 0 0 rgba(39,135,245, 0)" },
            },
          }}
        />

        {/* Имя */}
        <Box display="flex" alignItems="center" sx={{ mb: 1.5 }}>
          <Typography
            variant="h6"
            color={colors.profileHeader.typographyColor}
            fontWeight="bold"
          >
            {name}
          </Typography>
          <Box
            component="span"
            sx={{
              ml: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              top: "1px", // чуть приподнял
              animation: "pulseRotate 2s infinite",
            }}
          >
            <Icon width={18} height={18} />
          </Box>
        </Box>
        {/* Статус */}
        {status && (
          <Typography
            variant="body2"
            sx={{ color: "rgba(255,255,255,0.8)", mb: 2, maxWidth: "100%" }}
          >
            {status}
          </Typography>
        )}
      </Box>
    </SwipeableDrawer>
  );
});

export default AvatarSwiper;
