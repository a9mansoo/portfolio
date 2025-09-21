import CustomizedTimeline from "./components/career/careertimeline";
import { PageMenu } from "./components/menu";
import { Routes, Route, useLocation } from "react-router";
import { Projects } from "./components/projects/projects";
import { Home } from "./components/home/home";
import { useEffect, useState, useRef } from "react";

function App() {
  const [scrollY, setScroll] = useState(0);
  const currScroll = useRef(0);
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

  useEffect(() => {
    const handleScrollY = () => {
      let posY = (window.scrollY > currScroll.current)? -200: 0
      currScroll.current = window.scrollY
      setScroll(posY);
    }

    window.addEventListener("scroll", handleScrollY);

    return () => {
      window.removeEventListener("scroll", handleScrollY);
    }

  }, [])


  return (
    <>
      <PageMenu positionY={scrollY} />
      <Routes>
        <Route path="*" element={<Home/>} />
        <Route path="/career" element={<CustomizedTimeline />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
