import React from "react";

const themes = {
  light: {
    backgroundColor: "#fff",
    color: "#000",
    padding: "40px",
    textAlign: "center",
    transition: "0.3s",
  },
  dark: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "40px",
    textAlign: "center",
    transition: "0.3s",
  },
};
function ThemedContainer() {
  const [theme, setTheme] = useState();

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <div style={hover ? { ...divStyles, ...hoverStyles } : divStyles}>
      <h1>Привет</h1>
    </div>
  );
}

export default ThemedContainer;
