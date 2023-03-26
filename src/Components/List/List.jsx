import DataTable from "../Common/DataTable/DataTable";
import Navbar from "../Common/Navbar/Navbar";
import Sidebar from "../Common/Sidebar/Sidebar";
import "./List.css";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listComp">
        <Navbar />
        <DataTable />
      </div>
    </div>
  );
};

export default List;
