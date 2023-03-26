import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Login from "./Components/Login/Login";
import List from "./Components/List/List";
import Single from "./Components/Single/Single";
import New from "./Components/New/New";
import { userInputs } from "./Components/New/formSource";
import "./Components/Styles/dark.css";
import { useContext } from "react";
import ContextProvider from "./Components/Context";

function App() {
  const [{ dark }] = useContext(ContextProvider);
  console.log(dark);

  return (
    <div className={dark === true ? "App dark" : "App"}>
      <Router>
        <Routes>
          {/* Users */}
          <Route exact path="/AdminDashboard/users" element={<List />} />
          <Route
            exact
            path="/AdminDashboard/users/:userId"
            element={<Single />}
          />
          <Route
            exact
            path="/AdminDashboard/users/new"
            element={<New inputs={userInputs} />}
          />
          {/* Products */}
          <Route exact path="/AdminDashboard/products" element={<List />} />
          <Route
            exact
            path="/AdminDashboard/products/:productId"
            element={<Single />}
          />
          <Route
            exact
            path="/AdminDashboard/products/new"
            element={<New inputs={userInputs} />}
          />
          <Route exact path="/AdminDashboard/login" element={<Login />} />
          <Route exact path="/AdminDashboard/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;