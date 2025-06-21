import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const BgColorContext = createContext();

const pastelColors = [
  "#D4E2D4", "#E2D4E0", "#D4E2EA", "#F2E2D4",
  "#E5D4F2", "#E2F2D4", "#EADFD4", "#D4E8F2",
  "#F5E1DA", "#E0F7FA", "#E6F5D0", "#F3E5F5",
  "#FFF4D6", "#FFE8E0", "#DDEBF7", "#F9E2F4",
  "#EAF2D7", "#E2F0CB"
];

export function BgColorProvider({ children }) {
  const location = useLocation();
  const [bgColor, setBgColor] = useState(pastelColors[0]);

useEffect(() => {
  let availableColors = pastelColors.filter(color => color !== bgColor);
  const newColor = availableColors[Math.floor(Math.random() * availableColors.length)];
  setBgColor(newColor);

  // Apply color to the body
  document.body.style.backgroundColor = newColor;
}, [location.pathname]);

  return (
    <BgColorContext.Provider value={bgColor}>
      {children}
    </BgColorContext.Provider>
  );
}

export function useBgColor() {
  return useContext(BgColorContext);
}