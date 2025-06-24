import Notice from "../universals/common for all page/Notice";
import Footer from "../universals/Footer";
import NavBar from "../universals/NavBar";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
export default function Index() {
  return (
    <div>
      <div className="container mx-auto px-2">
        <div className="sticky top-0 z-[99]">
          <NavBar />
        </div>
        <Notice />
        <Outlet />
        <Footer />
        <ToastContainer />
      </div>
    </div>
  );
}
