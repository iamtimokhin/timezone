import React from "react";
import { Box, Typography } from "@mui/material";
import colors from "../data/colors";

function YandexMapEmbed() {
  return (
    <Box>
      <Typography
        variant="subtitle1"
        mb={1.5}
        fontWeight="bold"
        color="white"
        sx={{ textAlign: "center" }}
      >
        Моё местоположение
      </Typography>
      <Box
        mb={colors.boxMarginBottom}
        sx={{
          borderRadius: 2,
          overflow: "hidden",
          height: 400, // увеличенная высота
        }}
      >
        <iframe
          title="Яндекс.Карта Екатеринбург"
          src="https://yandex.ru/map-widget/v1/?ll=60.592929%2C56.898545&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNjY0NzYyNzcxEoEB0KDQvtGB0YHQuNGPLCDQodCy0LXRgNC00LvQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsINCV0LrQsNGC0LXRgNC40L3QsdGD0YDQsywg0YPQu9C40YbQsCDQo9GA0LDQu9GM0YHQutC40YUg0KDQsNCx0L7Rh9C40YUsIDU0IgoNKV9yQhUdmGNC&tab=services&z=16"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          loading="lazy"
          style={{ display: "block" }}
        />
      </Box>
    </Box>
  );
}

export default YandexMapEmbed;
