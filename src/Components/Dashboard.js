import Navbar from "./Navbar";
import Header from "./Header";
import Body from "./Body";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="ml-32">
        <Header />
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
