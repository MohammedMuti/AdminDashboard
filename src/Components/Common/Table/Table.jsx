import "./Table.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TableComp = () => {
  const rows = [
    {
      id: 123456,
      product: "ASUS ROG Strix",
      customer: "John Smith",
      date: "1 March",
      amount: 1000,
      status: "Pending",
    },
    {
      id: 123451,
      product: "ASUS ROG Strix",
      customer: "John Smith",
      date: "1 March",
      amount: 1000,
      status: "Approved",
    },
    {
      id: 123452,
      product: "ASUS ROG Strix",
      customer: "John Smith",
      date: "1 March",
      amount: 1000,
      status: "Approved",
    },
    {
      id: 123453,
      product: "ASUS ROG Strix",
      customer: "John Smith",
      date: "1 March",
      amount: 1000,
      status: "Approved",
    },
    {
      id: 123454,
      product: "ASUS ROG Strix",
      customer: "John Smith",
      date: "1 March",
      amount: 1000,
      status: "Pending",
    },
    {
      id: 123455,
      product: "ASUS ROG Strix",
      customer: "John Smith",
      date: "1 March",
      amount: 1000,
      status: "Pending",
    },
    {
      id: 123457,
      product: "ASUS ROG Strix",
      customer: "John Smith",
      date: "1 March",
      amount: 1000,
      status: "Pending",
    },
  ];

  return (
    <div className="table">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Tracking ID</TableCell>
              <TableCell className="tableCell">Product</TableCell>
              <TableCell className="tableCell">Customer</TableCell>
              <TableCell className="tableCell">Date</TableCell>
              <TableCell className="tableCell">Amount</TableCell>
              <TableCell className="tableCell">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="tableCell">{row.id}</TableCell>
                <TableCell className="tableCell">{row.product}</TableCell>
                <TableCell className="tableCell">{row.customer}</TableCell>
                <TableCell className="tableCell">{row.date}</TableCell>
                <TableCell className="tableCell">{row.amount}</TableCell>
                <TableCell className="tableCell">
                  <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableComp;
