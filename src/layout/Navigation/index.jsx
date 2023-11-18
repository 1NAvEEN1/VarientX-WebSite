import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/VARIENTX.svg";
import "./Navbar.css";
import { Button, Grid, Typography } from "@mui/material";

const Navigation = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div>
      <Grid container sx={{mt:{
        xs:"none",
        md:4
      }}}>
        <Grid
          item
          xs={11}
          md={3}
          pt={1}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <img src={Logo} alt="logo" />
        </Grid>
        <Grid item xs={0} md={6}>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a href="/home">Home</a>
            </li>
            <li className="nav-item">
              <a href="/">About</a>
            </li>
            <li className="nav-item">
              <a href="/">FAQ</a>
            </li>
            <li className="nav-item">
              <a href="/">Contact</a>
            </li>
          </ul>
        </Grid>
        <Grid
          item
          xs={1}
          md={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="outlined"
            size="small"
            sx={{
              borderRadius: 5,
              height: 30,
              display: {
                xs: "none",
                sm:"none",
                md: "inherit",
              },
            }}
            color="inherit"
          >
            <Typography
              variant="b1"
              color="#d3d3d3"
              textTransform="capitalize"
              pt={0.3}
              pl={2}
              pr={2}
            >
              Talk with us
            </Typography>
          </Button>
          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes size={30} style={{ color: "#f8f8f8" }} />
            ) : (
              <FaBars size={30} style={{ color: "#f8f8f8" }} />
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Navigation;
