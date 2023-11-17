import React from "react";
import { Outlet } from "react-router-dom";
import { styled, Box, Grid } from "@mui/material";
import Navigation from "./Navigation";

const layout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};

export default layout;
