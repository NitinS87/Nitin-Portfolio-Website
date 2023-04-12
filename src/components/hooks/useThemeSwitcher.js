import { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const [mode, setMode] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("theme");

    let initialMode;
    if (userPref !== null) {
      initialMode = userPref === "dark" ? "dark" : "light";
    } else {
      initialMode = mediaQuery.matches ? "dark" : "light";
      window.localStorage.setItem("theme", initialMode);
    }

    setMode(initialMode);

    if (initialMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    const handleChange = () => {
      if (mediaQuery.matches) {
        setMode("dark");
        window.localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
      } else {
        setMode("light");
        window.localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return [
    mode,
    (newMode) => {
      setMode(newMode);

      if (newMode === "dark") {
        window.localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
      } else {
        window.localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
      }
    },
  ];
};

export default useThemeSwitcher;
