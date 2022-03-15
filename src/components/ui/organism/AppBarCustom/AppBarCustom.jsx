import { AppBar, CssBaseline, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";
import { NavLogo } from "../../atoms/NavLogo/NavLogo";
import { MenuOption } from "../../molecules/MenuOption/MenuOption";
import logo from "../../../../img/logoRick.png";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./AppBarCustom.module.css";

export const AppBarCustom = () => {
  const pages = ["Get Cards", "My Album", "Series Information"];
  return (
    <AppBar position="static" className={styles.root} elevation={0}>
      <CssBaseline />
      <Toolbar disableGutters className={styles.toolbar}>
        <Grid container>
          <Grid item xs={3} className={styles.ini}>
            <NavLogo src={logo} />
          </Grid>

          <Grid
            item
            xs={9}
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              paddingLeft: "1.5rem",
            }}
          >
            <MenuOption
              icon={<MenuIcon fontSize="large" />}
              tooltip={"Options"}
              items={pages}
            />
          </Grid>

          <Grid
            item
            xs={9}
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {pages.map((page) => (
              <Link
                className={styles.link}
                to={`/${page.split(" ").join("")}`}
                style={{ display: "flex", textDecoration: "none" }}
                key={page}
              >
                <Typography
                  sx={{
                    textDecoration: "none",
                    paddingRight: "1.3rem",
                    fontWeight: "bold",
                  }}
                >
                  {page}
                </Typography>
              </Link>
            ))}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
