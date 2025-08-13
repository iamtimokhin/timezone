import React from "react";
import contacts from "./../data/contacts";
import { Typography, Stack, Button } from "@mui/material";
import colors from "..//data/colors";

function Contacts() {
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
