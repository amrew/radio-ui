import { Palette } from "lucide-react";
import { useTheme } from "~/contexts/ThemeContext";

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="absolute top-4 right-4 z-50">
      <div className="dropdown dropdown-end">
        <button
          tabIndex={0}
          className="btn btn-circle btn-sm bg-base-200/80 backdrop-blur-sm border-base-300 hover:bg-base-300"
          aria-label="Change theme"
        >
          <Palette className="w-4 h-4" />
        </button>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow-lg bg-base-200 rounded-box w-52 mt-2 border border-base-300"
        >
          <li>
            <button
              onClick={() => setTheme("minimalist")}
              className={theme === "minimalist" ? "active" : ""}
            >
              <span>Minimalist</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setTheme("cheerful")}
              className={theme === "cheerful" ? "active" : ""}
            >
              <span>Fun</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setTheme("retro")}
              className={theme === "retro" ? "active" : ""}
            >
              <span>Retro</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setTheme("dark")}
              className={theme === "dark" ? "active" : ""}
            >
              <span>Dark</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setTheme("radio")}
              className={theme === "radio" ? "active" : ""}
            >
              <span>Radio Shape</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setTheme("ios")}
              className={theme === "ios" ? "active" : ""}
            >
              <span>iOS</span>
            </button>
          </li>
          {/* <li>
            <button
              onClick={() => setTheme("pastel")}
              className={theme === "pastel" ? "active" : ""}
            >
              <span>Pastel</span>
            </button>
          </li> */}
          <li>
            <button
              onClick={() => setTheme("vinyl")}
              className={theme === "vinyl" ? "active" : ""}
            >
              <span>Vinyl</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setTheme("ipod")}
              className={theme === "ipod" ? "active" : ""}
            >
              <span>iPod Classic</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setTheme("retroradio")}
              className={theme === "retroradio" ? "active" : ""}
            >
              <span>Retro Radio</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
