import React, { useEffect, useState } from "react";
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
} from "./components";
import Preloader from "./components/Preloader";
import YandexMapEmbed from "./components/YandexMap";
import Gallery from "./components/Gallery";
import profileData from "./data/profileData";
import themes from "./data/colors";
import ThemeContext from "./context/context";
import ThemeButton from "./components/ThemeButton";

export default function App() {
  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem("theme") || Object.keys(themes)[0];
  });
  const [loading, setLoading] = useState(true);

  // сохраняем тему в localStorage
  useEffect(() => {
    localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  // имитация загрузки
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      {loading ? (
        <Preloader /> // теперь Preloader имеет доступ к теме
      ) : (
        <BackgroundTemplate>
          <Card>
            <ProfileHeader {...profileData} />
            <DividerGradient direction="right" />
            <Content>
              <Statistics />
              <DividerGradient direction="left" />
              <Advantages />
              <DividerGradient direction="right" />
              <Gallery />
              <DividerGradient direction="left" />
              {/* Яндекс Карта */}
              {/* <YandexMapEmbed /> */}
              {/* <DividerGradient direction="right" /> */}
              <Contacts />
              <DividerGradient direction="right" />
              <ThemeButton />
              <DividerGradient direction="left" />
              <ProfileFooter />
            </Content>
          </Card>
        </BackgroundTemplate>
      )}
    </ThemeContext.Provider>
  );
}
