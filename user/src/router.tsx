import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tab from "./components/common/tab";
import StartPage from "./pages/StartPage";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/tab" element={<Tab />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
