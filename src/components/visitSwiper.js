import React, { useContext, useMemo, useState } from "react";
import {
  SwipeableDrawer,
  Box,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import themes from "../data/colors";
import ThemeContext from "../context/context";

const VisitSwiper = React.memo(function VisitSwiper({
  open,
  onClose,
  onOpen,
  image,
  imageWebp,
  name,
  link,
  status,
  avito,
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
      ModalProps={{ keepMounted: true, sx: { zIndex: 1500 } }}
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
      {/* кнопка закрытия */}
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

      {/* контент */}
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
        {/* Аватар с пульсирующей тенью */}
        <Box
          sx={{
            width: 180,
            height: 180,
            borderRadius: "50%",
            position: "relative",
            mb: 2,
          }}
        >
          {/* Пульсирующая тень */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              boxShadow: "0 0 0 0 rgba(39,135,245,0.7)",
              animation: "pulseShadow 2s infinite",
              zIndex: 0,
            }}
          />

          {/* Сам аватар */}
          {/* Сам аватар */}
          <Box
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              position: "relative",
              zIndex: 1,
              overflow: "hidden",
              border: colors.profileHeader.avatarBorder,
            }}
          >
            <picture
              style={{ width: "100%", height: "100%", display: "block" }}
            >
              {imageWebp && <source srcSet={imageWebp} type="image/webp" />}
              <img
                src={image}
                alt={`${name} avatar`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  boxShadow: "0 0 25px rgba(0,0,0,0.5)",
                }}
              />
            </picture>
          </Box>

          <style>{`
            @keyframes pulseShadow {
              0% { box-shadow: 0 0 0 0 rgba(39,135,245,0.7); }
              70% { box-shadow: 0 0 0 20px rgba(39,135,245,0); }
              100% { box-shadow: 0 0 0 0 rgba(39,135,245,0); }
            }
          `}</style>
        </Box>

        {/* имя */}
        <Typography
          variant="h6"
          color={colors.profileHeader.typographyColor}
          fontWeight="bold"
          mb={1}
        >
          {name}
        </Typography>

        {/* описание */}
        {status && (
          <Typography
            variant="body2"
            sx={{ color: "rgba(255,255,255,0.8)", mb: 2, maxWidth: "100%" }}
          >
            {status}
          </Typography>
        )}

        {/* кнопки */}
        {link && (
          <Button
            href={link}
            target="_blank"
            sx={{
              width: "80%",
              maxWidth: 320,
              minHeight: 48,
              background: colors.contacts.buttonColor,
              color: colors.contacts.color,
              fontWeight: "bold",
              textTransform: "none",
              borderRadius: 3,
              boxShadow: colors.contacts.boxShadow,
              transition: "transform 0.1s",
              "&:hover": { background: colors.contacts.buttonColor },
              "&:active": {
                background: colors.contacts.buttonColor,
                transform: "scale(0.97)",
              },
              mb: 1,
            }}
          >
            Написать в Телеграм
          </Button>
        )}
        {avito && (
          <Button
            href={avito}
            target="_blank"
            sx={{
              width: "80%",
              maxWidth: 320,
              minHeight: 48,
              background: colors.contacts.buttonColor,
              color: colors.contacts.color,
              fontWeight: "bold",
              textTransform: "none",
              borderRadius: 3,
              boxShadow: colors.contacts.boxShadow,
              transition: "transform 0.1s",
              "&:hover": { background: colors.contacts.buttonColor },
              "&:active": {
                background: colors.contacts.buttonColor,
                transform: "scale(0.97)",
              },
            }}
          >
            Перейти на Avito
          </Button>
        )}
      </Box>
    </SwipeableDrawer>
  );
});

export default VisitSwiper;
