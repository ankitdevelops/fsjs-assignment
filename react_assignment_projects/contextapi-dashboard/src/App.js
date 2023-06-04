import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div
      className={
        theme === "dark"
          ? "bg-slate-800 h-screen text-white"
          : "bg-slate-300 h-screen"
      }
    >
      <div className="text-center w-full text-2xl ">
        React - Tailwind CSS - Theme Changer
      </div>
      <h1 className="text-4xl text-center">Hello There</h1>
      <div className="text-center mt-5">
        <button
          onClick={() => toggleTheme()}
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black "
        >
          Change Theme
        </button>
      </div>
    </div>
  );
}

export default App;
