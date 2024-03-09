import Footer from "./components/Footer"
import Header from "./components/Header"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
      <div className="sm:mx-26 mx-6 md:mx-24 lg:mx-[250px]">
          <Header />
          <Outlet />
          <Footer />
      </div>
  );
}

export default Layout