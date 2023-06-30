import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
