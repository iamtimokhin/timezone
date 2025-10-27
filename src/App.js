import React, { useState, useEffect } from "react";
import {
  Card,
  BackgroundTemplate,
  ProfileHeader,
  Content,
  DividerGradient,
  Statistics,
  Advantages,
  Contacts,
  ProfileFooter,
  ThemeButton,
  YandexMapEmbed,
  ScrollToTopFab,
  ScrollProgress,
  PartnersSection,
  Gallery,
} from "./components";
import profileData from "./data/profileData";
import footerData from "./data/footerData";
import themes from "./data/colors";
import ThemeContext from "./context/context";
import { motion } from "framer-motion";

export default function App() {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved && themes[saved] ? saved : Object.keys(themes)[0];
  });

  useEffect(() => {
    localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <ScrollProgress />
      <BackgroundTemplate>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <ProfileHeader {...profileData} />
            <DividerGradient direction="right" />{" "}
            {/* между хедером и статистикой */}
            <Content>
              <Statistics />
              <DividerGradient direction="left" />{" "}
              {/* между статистикой и преимуществами */}
              <Advantages />
              <DividerGradient direction="right" />{" "}
              {/* между преимуществами и галереей */}
              <Gallery />
              <DividerGradient direction="left" />{" "}
              {/* между галереей и партнерами */}
              <PartnersSection />
              <DividerGradient direction="right" />{" "}
              {/* между партнерами и контактами */}
              <Contacts />
              <DividerGradient direction="left" />{" "}
              {/* между контактами и картой */}
              <YandexMapEmbed />
              <DividerGradient direction="right" />{" "}
              {/* между картой и кнопкой темы */}
              <ThemeButton />
              <DividerGradient direction="left" />{" "}
              {/* между кнопкой темы и футером */}
              <ProfileFooter {...footerData} />
            </Content>
            <ScrollToTopFab />
          </Card>
        </motion.div>
      </BackgroundTemplate>
    </ThemeContext.Provider>
  );
}
