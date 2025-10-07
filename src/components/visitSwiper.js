import React, { useContext, useMemo, useState, useEffect } from "react";
import {
  SwipeableDrawer,
  Box,
  IconButton,
  Typography,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import themes from "../data/colors";
import ThemeContext from "../context/context";

const VisitSwiper = React.memo(function VisitSwiper({
  open,
  onClose,
  onOpen,
  image,
  name,
  link,
  status,
  avito,
}) {
  const { currentTheme } = useContext(ThemeContext);
  const colors = useMemo(() => themes[currentTheme], [currentTheme]);

  const [startY, setStartY] = useState(null);
  const [showNotification, setShowNotification] = useState(false);

  // Авто-уведомление через 3 секунды после открытия
  useEffect(() => {
    let timer;
    if (open) {
      timer = setTimeout(() => setShowNotification(true), 1000);
    } else {
      setShowNotification(false);
    }
    return () => clearTimeout(timer);
  }, [open]);

  const handleTouchStart = (e) => setStartY(e.touches[0].clientY);
  const handleTouchEnd = (e) => {
    if (!startY) return;
    const endY = e.changedTouches[0].clientY;
    if (endY - startY > 100) onClose();
    setStartY(null);
  };

  return (
    <>
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
            zIndex: 1600, // выше, чем уведомление
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
          {/* аватар */}
          <Box
            component="img"
            src={image}
            alt={`${name} avatar`}
            sx={{
              width: 180,
              height: 180,
              borderRadius: "50%",
              objectFit: "cover",
              border: colors.profileHeader.avatarBorder,
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

      {/* Центровое уведомление */}
      <Snackbar
        open={showNotification}
        autoHideDuration={5000}
        onClose={() => setShowNotification(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{ zIndex: 1600 }}
      >
        <Alert
          icon={false}
          onClick={() => setShowNotification(false)} // <- закрытие по клику
          sx={{
            width: "auto",
            maxWidth: 300,
            backgroundColor: "rgba(0,0,0,0.85)",
            color: "#fff",
            borderRadius: 3,
            boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
            textAlign: "center",
            fontWeight: "bold",
            p: 2,
            cursor: "pointer", // покажем, что можно кликнуть
          }}
        >
          <Box
            component="span"
            sx={{
              display: "inline-block",
              mr: 1,
              transformOrigin: "70% 70%",
              animation: "wave 1.5s infinite",
              "@keyframes wave": {
                "0%": { transform: "rotate(0deg)" },
                "15%": { transform: "rotate(14deg)" },
                "30%": { transform: "rotate(-8deg)" },
                "40%": { transform: "rotate(14deg)" },
                "50%": { transform: "rotate(-4deg)" },
                "60%": { transform: "rotate(10deg)" },
                "70%": { transform: "rotate(0deg)" },
                "100%": { transform: "rotate(0deg)" },
              },
            }}
          >
            👋
          </Box>
          Привет! Я Филипп Тимохин — разработчик визиток и надежный продавец на
          Авито.
        </Alert>
      </Snackbar>
    </>
  );
});

export default VisitSwiper;
