import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import AuthPage from "./AuthPage";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SubmitVideoPage from "./pages/SubmitVideoPage";
import SubmitVideoPageAsia from "./pages/SubmitVideoPageAsia";
import PrivatePolicy from "./pages/PrivatePolicy";
import TermsOfUse from "./pages/TermsOfUse";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import TermsOfUsePayment from "./pages/TermsOfUsePayment";
import SellVideoPage from "./pages/SellVideoPage";
import Contract from "./pages/Contract"; 
import PermissionNonExclusive from "./pages/PermissionNonExclusive"; 
import PermissionNonExclusiveRus from "./pages/PermissionNonExclusiveRus"; 


import { useStyles } from "./App.Styles.js";

import "./App.css";
import "./index.css";


const App = () => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12}>
        <Menu />
      </Grid>
      <Grid container className={classes.paddedTop}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutUs" component={About} />
          <Route exact path="/contactUs" component={Contact} />
          <Route exact path="/submitVideo" component={SubmitVideoPage} />
          <Route exact path="/submitVideoAsia" component={SubmitVideoPageAsia} />
          <Route exact path="/sellVideo" component={SellVideoPage} />
          <Route exact path="/privatePolicy" component={PrivatePolicy} />
          <Route exact path="/termsOfUse" component={TermsOfUse} /> 
          <Route exact path="/permission" component={PermissionNonExclusive} />  
          <Route exact path="/permissionRus" component={PermissionNonExclusiveRus} /> 
          <Route exact path="/application" component={AuthPage} />
          


          <Route
            exact 
            path="/termsOfUsePayment"
            component={TermsOfUsePayment}
          />
          <Route
            path="/contract"
            component={Contract}
          />
          <Redirect from="" to="/" />
        </Switch>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
};

export default withRouter(App);
