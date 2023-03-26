import "./Navbar.css";
import {
  SearchOutlined,
  LanguageOutlined,
  DarkModeOutlined,
  FullscreenExitOutlined,
  NotificationsNoneOutlined,
  ChatBubbleOutlineOutlined,
  ListOutlined,
  DarkMode,
} from "@mui/icons-material";
import { useContext } from "react";
import ContextProvider from "../../Context";

const Navbar = () => {
  const [{ dark }, dispatch] = useContext(ContextProvider);

  const handleDark = () => {
    dispatch({
      type: "SET_DARK",
      dark: !dark,
    });
  };

  return (
    <>
      <div className="navbar">
        <div className="navWrapper">
          <div className="search">
            <input type="text" placeholder="Search..." />
            <SearchOutlined />
          </div>
          <div className="navItems">
            <div className="navItem">
              <LanguageOutlined />
              English
            </div>
            <div className="navItem">
              {dark ? (
                <DarkMode onClick={handleDark} />
              ) : (
                <DarkModeOutlined onClick={handleDark} />
              )}
            </div>
            <div className="navItem">
              <FullscreenExitOutlined />
            </div>
            <div className="navItem">
              <NotificationsNoneOutlined />
              <div className="counter">1</div>
            </div>
            <div className="navItem">
              <ChatBubbleOutlineOutlined />
              <div className="counter">2</div>
            </div>
            <div className="navItem">
              <ListOutlined />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
