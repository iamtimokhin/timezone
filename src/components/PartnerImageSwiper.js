import React, { useContext, useMemo, useState } from "react";
import {
  SwipeableDrawer,
  IconButton,
  Box,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import themes from "../data/colors";
import ThemeContext from "../context/context";

const PartnerImageSwiper = React.memo(function PartnerImageSwiper({
  open,
  onClose,
  onOpen,
  image,
  name,
  role,
  description,
  link, // ссылка на визитку
}) {
  const { currentTheme } = useContext(ThemeContext);
  const colors = useMemo(() => themes[currentTheme], [currentTheme]);

  const [startY, setStartY] = useState(null);
  const [iframeOpen, setIframeOpen] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(true);

  const handleTouchStart = (e) => setStartY(e.touches[0].clientY);
  const handleTouchEnd = (e) => {
    if (!startY) return;
    const endY = e.changedTouches[0].clientY;
    if (endY - startY > 100) onClose();
    setStartY(null);
  };

  const buttonStyle = {
    width: "90%",
    maxWidth: 360,
    minHeight: 48,
    background: colors.contacts.buttonColor,
    color: colors.contacts.color,
    fontWeight: "bold",
    textTransform: "none",
    borderRadius: 3,
    boxShadow: colors.contacts.boxShadow,
    mb: 1,
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
        >
          <CloseIcon />
        </IconButton>

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
          {/* Аватар с пульсирующей обводкой */}
          <Box
            sx={{
              width: 180,
              height: 180,
              borderRadius: "50%",
              position: "relative",
              mb: 2,
            }}
          >
            {/* Пульсирующая обводка */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                boxShadow: "0 0 0 0 rgba(39,135,245,0.7)",
                animation: "pulseBorder 2s infinite",
                zIndex: 0,
              }}
            />
            <Box
              component="img"
              src={image}
              alt={`${name} avatar`}
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                border: colors.profileHeader.avatarBorder,
                objectFit: "cover",
                boxShadow: "0 0 25px rgba(0,0,0,0.5)",
                position: "relative",
                zIndex: 1,
              }}
            />
            <style>{`
              @keyframes pulseBorder {
                0% { box-shadow: 0 0 0 0 rgba(39,135,245,0.7); }
                70% { box-shadow: 0 0 0 20px rgba(39,135,245,0); }
                100% { box-shadow: 0 0 0 0 rgba(39,135,245,0); }
              }
            `}</style>
          </Box>

          {/* Имя */}
          <Typography
            variant="h6"
            color={colors.profileHeader.typographyColor}
            fontWeight="bold"
            mb={1}
          >
            {name}
          </Typography>

          {role && (
            <Typography
              variant="subtitle1"
              sx={{ color: "rgba(255,255,255,0.7)", mb: 1 }}
            >
              {role}
            </Typography>
          )}

          {description && (
            <Typography
              variant="body2"
              sx={{ color: "rgba(255,255,255,0.8)", mb: 2 }}
            >
              {description}
            </Typography>
          )}

          {link && (
            <Button onClick={() => setIframeOpen(true)} sx={buttonStyle}>
              Перейти в визитку
            </Button>
          )}
        </Box>
      </SwipeableDrawer>

      {/* iframe визитки */}
      {iframeOpen && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.9)",
            zIndex: 2000,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton
            onClick={() => setIframeOpen(false)}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              color: "white",
              backgroundColor: "rgba(0,0,0,0.3)",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.5)" },
              zIndex: 2100,
            }}
          >
            <CloseIcon />
          </IconButton>

          {iframeLoading && (
            <CircularProgress
              size={64}
              sx={{ color: colors.contacts.color, mb: 2 }}
            />
          )}

          <iframe
            src={link}
            title="Partner Visit"
            style={{
              flex: 1,
              border: "none",
              width: "100%",
              height: "100%",
              display: iframeLoading ? "none" : "block",
            }}
            onLoad={() => setIframeLoading(false)}
          />
        </Box>
      )}
    </>
  );
});

export default PartnerImageSwiper;
