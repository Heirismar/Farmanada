import React from "react";
import { Moon } from "lucide-react";
const Darkmode = () => {
  const [theme, setTheme] = React.useState("dark");

  return (
    <div>
      <Moon
        alt="luna"
        className='${theme === "dark"? "opacity-o" : "opacity-100"} cursor-pointer'
      />
    </div>
  );
};

export default Darkmode;
