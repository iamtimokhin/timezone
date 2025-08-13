import React from "react";
import advantages from "./../data/advantages";
import { Typography, Box, Paper } from "@mui/material";
import colors from "../data/colors";

function Advantages() {
  class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    speak() {
      console.log(`${this.name} sounds`);
    }
  }

  class Dog extends Animal {
    constructor(name, age, breed) {
      super(name, age);
      this.breed = breed;
    }
    speak() {
      super.speak();
      console.log(`${this.name} лает`);
    }
  }

  class Cat extends Animal {
    constructor(name, age) {
      super(name, age);
    }

    purr() {
      console.log(`${this.name} мурлычет`);
    }
  }
  return (
    <>
      <Typography
        variant="subtitle1"
        mt={1.5}
        mb={1.5}
        fontWeight="bold"
        color="white"
        sx={{ textAlign: "center" }}
      >
        Преимущества Авито Доставки
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 1.5,
          mb: colors.boxMarginBottom,
        }}
      >
        {advantages.map(({ value, label }) => (
          <Paper
            key={label}
            elevation={0}
            sx={{
              p: 1.5,
              background: colors.advantages.paperBackground,
              borderRadius: 3,
              textAlign: "center",
              backdropFilter: "blur(6px)",
            }}
          >
            <Typography
              variant="body1"
              fontWeight="bold"
              sx={{ color: colors.advantages.typographyValueColor, mb: 0.5 }}
            >
              {value}
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: colors.advantages.typographyLabelColor }}
            >
              {label}
            </Typography>
          </Paper>
        ))}
      </Box>
    </>
  );
}

export default Advantages;
