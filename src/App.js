import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import LazyLoad from "./Pages/LazyLoad";
import ServiceDetail from "./Pages/ServiceDetail";

const Home = React.lazy(() => import("./Pages/Home"));
const Navbar = React.lazy(() => import("./Pages/Navbar"));
const Service = React.lazy(() => import("./Pages/Service"));
const About = React.lazy(() => import("./Pages/About"));
const Sign_Up = React.lazy(() => import("./Pages/Sign_Up"));
const Contact = React.lazy(() => import("./Pages/Contact"));

const App = () => {
  return (
    <>
      <Suspense fallback={<LazyLoad />}>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Service" component={Service} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/SignUp" component={Sign_Up} />
          <Route
            exact
            path="/serviceDetail/:id/:name"
            component={ServiceDetail}
          />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
};
export default App;
