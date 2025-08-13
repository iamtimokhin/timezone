import { React, useEffect, useState } from "react";
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
export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);
  return loading ? (
    <Preloader />
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
          {/* Яндекс карта */}
          <Contacts />
          <DividerGradient direction="right" />
          <ProfileFooter />
        </Content>
      </Card>
    </BackgroundTemplate>
  );
}
