import { Outlet } from "react-router-dom";
import Navbar from "../shared/ui/navbar/navbar";

const MainLayout = () => {

  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Container for sidebar and main content */}
      <div className="flex flex-1 min-h-0">
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;