import "./App.css";

import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
import MainLayout from "./layouts/MainLayout/MainLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/Product" element={<NotFound />} />
          <Route path="/FAQ" element={<NotFound />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
