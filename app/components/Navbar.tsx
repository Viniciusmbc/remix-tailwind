import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className=" bg-neutral-600">
      <div className="flex max-w-screen-lg mx-auto p-4 justify-between ">
        <p>Where in the world?</p>
       {theme === "light" ? (
          <button
          
            onClick={toggleTheme}
            className="bg-neutral-800 hover:bg-neutral-900 text-white font-bold py-1 px-4 rounded-full"
          >
            Dark Mode
          </button>
        ) : (
          <button
            onClick={toggleTheme}
            className="bg-neutral-300 hover:bg-neutral-400 text-white font-bold py-1 px-4 rounded-full"
          >
            Light Mode
          </button>
        )}
      </div>
    </nav>
  );
}
