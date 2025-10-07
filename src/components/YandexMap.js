import React, { useContext, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import themes from "../data/colors";
import ThemeContext from "../context/context";
import ThemedCircularProgress from "./ThemedCircularProgress";

function YandexMapEmbed() {
  const { currentTheme } = useContext(ThemeContext);
  const colors = themes[currentTheme];

  const mapCoords = "60.592929,56.898545";
  const zoom = 16;
  const mapSrc = `https://yandex.ru/map-widget/v1/?ll=${mapCoords}&z=${zoom}&l=map&pt=${mapCoords},pm2rdm`;

  const [showMap, setShowMap] = useState(false);
  const [loading, setLoading] = useState(false); // состояние загрузки

  const handleClick = () => {
    setLoading(true); // включаем спиннер
    setTimeout(() => {
      setShowMap((prev) => !prev); // переключаем видимость карты
      setLoading(false); // выключаем спиннер
    }, 500); // имитация небольшой задержки
  };

  return (
    <Box
      sx={{
        mb: colors.boxMarginBottom,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="subtitle1"
        mb={1.5}
        fontWeight="bold"
        color={colors.profileHeader.typographyColor || "#fff"}
        sx={{ textAlign: "center" }}
      >
        Моё местоположение
      </Typography>

      <Button
        onClick={handleClick}
        fullWidth
        disabled={loading} // вот ключевой момент
        sx={{
          background: colors.contacts.buttonColor,
          color: colors.contacts.color,
          fontWeight: "bold",
          textTransform: "none",
          borderRadius: 3,
          py: 1.2,
          mb: -2.5,
          boxShadow: colors.contacts.boxShadow,
          transition: "transform 0.1s",
          "&:hover": {
            background: colors.contacts.buttonColor,
          },
          "&:active": {
            background: colors.contacts.buttonColor,
            transform: "scale(0.97)",
          },
          "&.Mui-disabled": {
            background: colors.contacts.buttonColor,
            color: colors.contacts.color,
            boxShadow: colors.contacts.boxShadow,
          },
          position: "relative",
        }}
      >
        {loading ? (
          <ThemedCircularProgress size={24} />
        ) : showMap ? (
          "Скрыть местоположение"
        ) : (
          "Показать местоположение"
        )}
      </Button>

      {showMap && (
        <Box
          sx={{
            mt: 5.5,
            mb: -2,
            position: "relative",
            width: "100%",
            maxWidth: 600,
            height: { xs: 300, sm: 400 },
            borderRadius: 3,
            overflow: "hidden",
            boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
            backgroundColor: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(8px)",
          }}
        >
          <iframe
            title="Яндекс.Карта Екатеринбург"
            src={mapSrc}
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            loading="lazy"
            style={{
              display: "block",
              border: "none",
              borderRadius: 12,
            }}
          />
        </Box>
      )}
    </Box>
  );
}

export default YandexMapEmbed;
