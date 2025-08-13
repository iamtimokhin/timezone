import React, {
  useState,
  useEffect,
  useCallback,
  useContext,
  useMemo,
} from "react";
import { CardHeader, Avatar, Box, Typography } from "@mui/material";
import themes from "../data/colors";
import AvatarSwiper from "./AvatarSwiper";
import ThemeContext from "../context/context";

function ProfileHeader({ image, name, icon: Icon, status }) {
  const { currentTheme } = useContext(ThemeContext);
  const colors = useMemo(() => themes[currentTheme], [currentTheme]);
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <>
      <CardHeader
        // sx={{ minHeight: 250 }}
        avatar={
          <Box
            onClick={handleOpen}
            sx={{
              p: "2px",
              borderRadius: "50%",
              background: colors.profileHeader.boxBackground,
              display: "inline-flex",
              cursor: "pointer",
            }}
          >
            <Avatar
              src={image}
              sx={{
                width: 60,
                height: 60,
                border: colors.profileHeader.avatarBorder,
              }}
            />
          </Box>
        }
        title={
          <Box display="flex" alignItems="center">
            <Typography fontWeight="bold" sx={{ mr: 1, fontSize: 18 }}>
              {name}
            </Typography>
            <Box
              component="span"
              sx={{ ml: 0.5, display: "flex", alignItems: "center" }}
            >
              <Icon width={18} height={18} />
            </Box>
          </Box>
        }
        subheader={
          <Typography
            variant="body2"
            sx={{ color: colors.profileHeader.typographyColor }}
          >
            {status}
          </Typography>
        }
      />
      <AvatarSwiper
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        image={image}
        name={name}
      />
    </>
  );
}

export default ProfileHeader;
