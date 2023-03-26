import "./Widget.css";
import {
  KeyboardArrowUp,
  PersonOutline,
  ShoppingCartOutlined,
  MonetizationOnOutlined,
  AccountBalanceOutlined,
} from "@mui/icons-material";

const Widget = ({ type }) => {
  let data;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutline
            className="icon"
            style={{ color: "crimson", background: "rgba(225, 0, 0, 0.2" }}
          />
        ),
      };
      break;

    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all Orders",
        icon: (
          <ShoppingCartOutlined
            className="icon"
            style={{ color: "goldenrod", background: "rgba(218, 165, 32, 0.2" }}
          />
        ),
      };
      break;

    case "earnings":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlined
            className="icon"
            style={{ color: "green", background: "rgba(0, 128, 0, 0.2" }}
          />
        ),
      };
      break;

    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceOutlined
            className="icon"
            style={{ color: "purple", background: "rgba(128, 0, 128, 0.2" }}
          />
        ),
      };
      break;

    default:
      break;
  }

  return (
    <>
      <div className="widget">
        <div className="left">
          <span className="title">{data.title}</span>
          <span className="counter">{data.isMoney && "$"}100</span>
          <span className="link">{data.link}</span>
        </div>
        <div className="right">
          <div className="percentage positive">
            <KeyboardArrowUp /> 20%
          </div>
          {data.icon}
        </div>
      </div>
    </>
  );
};

export default Widget;
