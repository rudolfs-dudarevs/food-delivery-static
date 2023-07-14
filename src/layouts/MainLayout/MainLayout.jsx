import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./MainLayout.scss";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <div className="outlet-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
