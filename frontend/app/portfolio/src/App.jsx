import { CareerTimeline } from "./components/career/careertimeline";
import { PageMenu } from "./components/menu/menu";
import { Routes, Route, useLocation } from "react-router";
import { Projects } from "./components/projects/projects";
import { Home } from "./components/home/home";
import { useEffect, useState, useRef } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { appTheme } from "./themes/themes.jsx";
import { CssBaseline, Box } from "@mui/material";

function App() {
  const [scrollY, setScroll] = useState(0);
  const [mode, setMode] = useState("light");
  const currScroll = useRef(0);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  useEffect(() => {
    const handleScrollY = () => {
      let posY = window.scrollY > currScroll.current ? -200 : 0;
      currScroll.current = window.scrollY;
      setScroll(posY);
    };

    window.addEventListener("scroll", handleScrollY);

    return () => {
      window.removeEventListener("scroll", handleScrollY);
    };
  }, []);

  const setTheme = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <ThemeProvider theme={appTheme(mode)}>
      <CssBaseline />
      <Box
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        <PageMenu positionY={scrollY} setTheme={setTheme} />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/career" element={<CareerTimeline />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
