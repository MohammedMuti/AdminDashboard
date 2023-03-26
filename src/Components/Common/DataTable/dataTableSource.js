export const userColomns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImage" src={params.row.img} alt="" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "age",
    headerName: "Age",
    width: 80,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    username: "Snow",
    age: 35,
    status: "active",
    email: "Snow@gmail.com",
    img: require("../../../Images/users/pic-6.png"),
  },
  {
    id: 2,
    username: "Lannister",
    age: 42,
    status: "active",
    email: "Lannister@gmail.com",
    img: require("../../../Images/users/pic-6.png"),
  },
  {
    id: 3,
    username: "Lannister",
    age: 45,
    status: "passive",
    email: "Lannister@gmail.com",
    img: require("../../../Images/users/pic-6.png"),
  },
  {
    id: 4,
    username: "Stark",
    age: 16,
    status: "active",
    email: "Stark@gmail.com",
    img: require("../../../Images/users/pic-6.png"),
  },
  {
    id: 5,
    username: "Targaryen",
    age: 34,
    status: "passive",
    email: "Targaryen@gmail.com",
    img: require("../../../Images/users/pic-6.png"),
  },
  {
    id: 6,
    username: "Melisandre",
    age: 150,
    status: "active",
    email: "Melisandre@gmail.com",
    img: require("../../../Images/users/pic-6.png"),
  },
  {
    id: 7,
    username: "Clifford",
    age: 44,
    status: "active",
    email: "Clifford@gmail.com",
    img: require("../../../Images/users/pic-6.png"),
  },
  {
    id: 8,
    username: "Frances",
    age: 36,
    status: "active",
    email: "Frances@gmail.com",
    img: require("../../../Images/users/pic-6.png"),
  },
  {
    id: 9,
    username: "Roxie",
    age: 65,
    status: "passive",
    email: "Roxie@gmail.com",
    img: require("../../../Images/users/pic-6.png"),
  },
];
