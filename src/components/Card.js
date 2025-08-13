import React from "react";
import { Card } from "@mui/material";
import colors from "../data/colors";

function CardTemplate({ children }) {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 360,
        borderRadius: 4,
        background: colors.card.background,
        color: colors.card.color,
        mb: 3,
        boxShadow: colors.card.boxShadow,
        overflow: "hidden",
      }}
    >
      {children}
    </Card>
  );
}

export default CardTemplate;
