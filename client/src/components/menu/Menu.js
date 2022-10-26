import React from "react";
import classNames from "classnames";
import { Link, withRouter } from "react-router-dom";
import {
  AppBar,
  Button,
  Typography,
  Slide,
  useScrollTrigger,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";

import { useStyles } from "./Menu.Styles.js";

import useWindowDimensions from "../../utils/windowDimensions";

const Menu = (props) => {
  const classes = useStyles();
  const { window } = props;
  const { t } = useTranslation();
  const { width } = useWindowDimensions();

  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/main">
            <img alt="" src={"/assets/images/logo.png"} width="64px" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={classNames("collapse navbar-collapse", {
              [classes.centeredMenu]: width < 992,
            })}
            id="navbarNavAltMarkup"
          >
            <div
              className={classNames(classes.centeredVertical, "navbar-nav", {
                [classes.navToTop]: width < 992,
              })}
            >
              <Link
                className={classNames(
                  classes.link,
                  classes.uppercase,
                  "nav-item",
                  "nav-link"
                )}
                to="/submitVideo"
              >
                <Button variant="contained" color="primary">
                  <Typography>{t("submitVideo")}</Typography>
                </Button>
              </Link>
              <Link
                className={classNames(
                  classes.link,
                  classes.uppercase,
                  "nav-item",
                  "nav-link"
                )}
                to="/"
              >
                {t("home")}
              </Link>
              <Link
                className={classNames(
                  classes.link,
                  classes.uppercase,
                  "nav-item",
                  "nav-link"
                )}
                to="/aboutUs"
              >
                {t("aboutUs")}
              </Link>
              <Link
                className={classNames(
                  classes.link,
                  classes.uppercase,
                  "nav-item",
                  "nav-link"
                )}
                to="/contactUs"
              >
                {t("contactUs")}
              </Link>
            </div>
          </div>
        </nav>
      </AppBar>
    </Slide>
  );
};

export default withRouter(Menu);
