import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
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
          <Route exact path="/users" element={<List />} />
          <Route exact path="/users/:userId" element={<Single />} />
          <Route
            exact
            path="/users/new"
            element={<New inputs={userInputs} />}
          />
          {/* Products */}
          <Route exact path="/products" element={<List />} />
          <Route exact path="/products/:productId" element={<Single />} />
          <Route
            exact
            path="/products/new"
            element={<New inputs={userInputs} />}
          />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
