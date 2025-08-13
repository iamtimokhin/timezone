import React, { useContext, useMemo } from "react";
import contacts from "./../data/contacts";
import { Typography, Stack, Button } from "@mui/material";
import themes from "..//data/colors";
import ThemeContext from "../context/context";
import SaveContactButton from "./SaveContactButton";
import profileData from "../data/profileData";

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

      <Stack spacing={1} sx={{ mb: 3 }}>
        {contacts.map((link) => (
          <Button
            key={link.title}
            fullWidth
            onClick={() =>
              window.open(link.url, "_blank", "noopener,noreferrer")
            }
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
        <SaveContactButton contact={profileData} />
      </Stack>
    </>
  );
}

export default Contacts;
