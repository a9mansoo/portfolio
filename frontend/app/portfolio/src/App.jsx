import CustomizedTimeline from "./components/career/careertimeline";
import { PageMenu } from "./components/menu";
import { Routes, Route } from "react-router";
import { Projects } from "./components/projects/projects";
import { Home } from "./components/home/home";

function App() {
  return (
    <>
      <PageMenu />
      <Routes>
        <Route path="*" element={<Home/>} />
        <Route path="/career" element={<CustomizedTimeline />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
