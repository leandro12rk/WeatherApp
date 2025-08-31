import { useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
export default function ButtonTheme() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button className="btn-theme" onClick={toggleTheme}>
      {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
    </button>
  );
}
