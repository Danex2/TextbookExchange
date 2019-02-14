import React, { Component, Suspense } from "react";
import Navbar from "./components/NavbarComponent";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./HOC/PrivateRoute";

// Lazy loading routes, only loaded when the user vists any of these routes instead of being loaded with the app
const Register = React.lazy(() => import("./components/RegisterComponent"));
const Listings = React.lazy(() => import("./containers/ListingsContainer"));
const Login = React.lazy(() => import("./components/LoginComponent"));
const Form = React.lazy(() => import("./components/FormComponent"));
const Dashboard = React.lazy(() => import("./containers/DashboardContainer"));

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
              <PrivateRoute path="/post" component={Form} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
            </React.Fragment>
          </Suspense>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
