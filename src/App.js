import React, { Component, Suspense } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./HOC/PrivateRoute";

// Lazy loading routes, only loaded when the user vists any of these routes instead of being loaded with the app
const Register = React.lazy(() => import("./components/Register"));
const Listings = React.lazy(() => import("./components/Listings"));
const Login = React.lazy(() => import("./components/Login"));
const Post = React.lazy(() => import("./components/Post"));
const Dashboard = React.lazy(() => import("./components/Dashboard"));

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Suspense fallback={<h1>Loading..</h1>}>
            <React.Fragment>
              <Navbar />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route exact path="/" component={Listings} />
              <Route path="/post" component={Post} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
            </React.Fragment>
          </Suspense>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
