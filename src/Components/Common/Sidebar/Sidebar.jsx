import "./Sidebar.css";
import { Link } from "react-router-dom";
import {
  Dashboard,
  PersonOutlineOutlined,
  CreditCard,
  LocalShipping,
  InsertChart,
  NotificationsNone,
  SettingsSystemDaydream,
  PsychologyOutlined,
  ExitToApp,
  AccountCircleOutlined,
  SettingsApplications,
  Store,
} from "@mui/icons-material";
import { useContext } from "react";
import ContextProvider from "../../Context";

const Sidebar = () => {
  const [{ dark }, dispatch] = useContext(ContextProvider);

  const handleDark = () => {
    dispatch({
      type: "SET_DARK",
      dark: true,
    });
  };

  const handleLight = () => {
    dispatch({
      type: "SET_DARK",
      dark: false,
    });
  };

  return (
    <>
      <div className="sidebar">
        <div className="top">
          <span className="logo">
            <Link to="/">
              <h1>Admin Dashboard</h1>
            </Link>
          </span>
        </div>
        <hr />
        <div className="center">
          <ul>
            <p>MAIN</p>
            <li>
              <Link to="/">
                <Dashboard />
                <span>Dashboard</span>
              </Link>
            </li>
            <p>LISTS</p>
            <li>
              <Link to="/users">
                <PersonOutlineOutlined />
                <span>Users</span>
              </Link>
            </li>
            <li>
              <Link to="/products">
                <Store />
                <span>Products</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <CreditCard />
                <span>Orders</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <LocalShipping />
                <span>Delivery</span>
              </Link>
            </li>
            <p>USEFUL</p>
            <li>
              <Link to="/">
                <InsertChart />
                <span>Stats</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <NotificationsNone />
                <span>Notifications</span>
              </Link>
            </li>
            <p>SERVICE</p>
            <li>
              <Link to="/">
                <SettingsSystemDaydream />
                <span>System Health</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <PsychologyOutlined />
                <span>Logs</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <SettingsApplications />
                <span>Settings</span>
              </Link>
            </li>
            <p>USER</p>
            <li>
              <Link to="/">
                <AccountCircleOutlined />
                <span>Profile</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <ExitToApp />
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="bottom">
          <div className="colorOption" onClick={handleLight}></div>
          <div className="colorOption" onClick={handleDark}></div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
