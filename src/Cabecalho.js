import React from "react";
import Login from "./Login";
import Homepage from "./Homepage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/login/">Login</Link>
          </li>          
        </ul>
      </nav>

      <Route path="/" exact component={Homepage} />
      <Route path="/login/" component={Login} />
    </div>
  </Router>
);

export default AppRouter;