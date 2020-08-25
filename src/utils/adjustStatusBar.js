import { useState } from "react";

const adjustStatusBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const darkMode = isDark ? "default" : "dark-content";

  function toggleVisibility() {
    setIsVisible(!isVisible);
  }
  function toggleDark() {
    setIsDark(darkMode);
  }
  return {
    isDark,
    isVisible,
    toggleDark,
    toggleVisibility
  };
};

export default adjustStatusBar;
