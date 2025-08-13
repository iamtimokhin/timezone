import React, { useState, useCallback, useContext, useMemo } from "react";
import { ImageList, ImageListItem, Typography, Box } from "@mui/material";
import examples from "..//data/examples";
import GalleryImageSwiper from "./GalleryImageSwiper";
import themes from "../data/colors";
import ThemeContext from "../context/context";
export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const { currentTheme } = useContext(ThemeContext);
  const colors = useMemo(() => themes[currentTheme], [currentTheme]);

  const handleOpen = useCallback((img, title) => {
    setSelectedImage({ img, title });
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
    setSelectedImage(null);
  }, []);

  return (
    <Box sx={{ mb: colors.boxMarginBottom }}>
      <Typography
        variant="subtitle1"
        mb={1.5}
        fontWeight="bold"
        color="white"
        sx={{ textAlign: "center" }}
      >
        Примеры работ
      </Typography>

      <ImageList cols={2} gap={12}>
        {examples.map((item) => (
          <ImageListItem key={item.img}>
            <Box
              sx={{
                width: "100%",
                height: 160,
                overflow: "hidden",
                borderRadius: 2,
                cursor: "pointer",
              }}
              onClick={() => handleOpen(item.img, item.title)}
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 8,
                }}
              />
            </Box>
            <Typography variant="subtitle2" mt={1}>
              {item.description}
            </Typography>
          </ImageListItem>
        ))}
      </ImageList>

      {/* Галерея свайпер для выбранного изображения */}
      {selectedImage && (
        <GalleryImageSwiper
          open={open}
          image={selectedImage.img}
          alt={selectedImage.title}
          onOpen={() => setOpen(true)}
          onClose={handleClose}
        />
      )}
    </Box>
  );
}
