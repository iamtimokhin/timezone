import React, { useContext, useMemo } from "react";
import contacts from "./../data/contacts";
import { Typography, Stack, Button } from "@mui/material";
import themes from "..//data/colors";
import ThemeContext from "../context/context";

function Contacts() {
  const { currentTheme } = useContext(ThemeContext);
  const colors = useMemo(() => themes[currentTheme], [currentTheme]);
  return (
    <>
      <Typography
        variant="subtitle1"
        mb={1.5}
        fontWeight="bold"
        color="white"
        sx={{ textAlign: "center" }}
      >
        Контакты
      </Typography>
      <Stack spacing={1} sx={{ mb: colors.boxMarginBottom }}>
        {contacts.map((link) => (
          <Button
            key={link.title}
            href={link.url}
            target="_blank"
            fullWidth
            sx={{
              background: colors.contacts.buttonColor,
              color: colors.contacts.color,
              fontWeight: "bold",
              textTransform: "none",
              borderRadius: 3,
              py: 1.2,

              boxShadow: colors.contacts.boxShadow,
              "&:hover": { background: colors.contacts.boxShadowHover },
            }}
          >
            {link.title}
          </Button>
        ))}
      </Stack>
    </>
  );
}

export default Contacts;
