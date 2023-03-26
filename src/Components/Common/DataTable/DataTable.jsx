import "./DataTable.css";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { userColomns, userRows } from "./dataTableSource";
import { Link } from "react-router-dom";

const columns: GridColDef[] = userColomns;

const rows = userRows;

const DataTable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to="/users/test">
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <div className="dataTable">
        <div className="dataTableTitle">
          Add New User <Link to="/users/new">Add New</Link>
        </div>
        <div style={{ height: 600, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns.concat(actionColumn)}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      </div>
    </>
  );
};

export default DataTable;
