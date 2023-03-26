import "./Featured.css";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreVert,
} from "@mui/icons-material";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <>
      <div className="featured">
        <div className="top">
          <h2 className="title">Total Revenue</h2>
          <MoreVert />
        </div>
        <div className="bottom">
          <div className="featuredChart">
            <CircularProgressbar value={70} strokeWidth={5} text={"70%"} />
          </div>
          <p className="title">Total Sales made today</p>
          <p className="amount">$420</p>
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam,
            consequuntur.
          </p>
          <div className="summary">
            <div className="item">
              <div className="itemTitle">Target</div>
              <div className="itemResult negative">
                <KeyboardArrowDown />
                <div className="resultAmount">$12.4k</div>
              </div>
            </div>
            <div className="item">
              <div className="itemTitle">Last Week</div>
              <div className="itemResult positive">
                <KeyboardArrowUp />
                <div className="resultAmount">$12.4k</div>
              </div>
            </div>
            <div className="item">
              <div className="itemTitle">Last Month</div>
              <div className="itemResult positive">
                <KeyboardArrowUp />
                <div className="resultAmount">$12.4k</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
