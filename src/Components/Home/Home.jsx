import React from "react";
import Chart from "../Common/Chart/Chart";
import Featured from "../Common/Featured/Featured";
import Navbar from "../Common/Navbar/Navbar";
import Sidebar from "../Common/Sidebar/Sidebar";
import TableComp from "../Common/Table/Table";
import Widget from "../Common/Widgets/Widget";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <Sidebar />
        <div className="home">
          <Navbar />
          <div className="widgets">
            <Widget type="user" />
            <Widget type="order" />
            <Widget type="earnings" />
            <Widget type="balance" />
          </div>
          <div className="charts">
            <Featured />
            <Chart aspect={2 / 1} />
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest Transactions</div>
            <TableComp />
          </div>
          Home
        </div>
      </div>
    </>
  );
};

export default Home;
