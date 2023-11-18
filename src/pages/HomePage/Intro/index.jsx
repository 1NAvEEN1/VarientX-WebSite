import React from "react";
import TwitterPost from "../../../assets/twitterPost.svg";
import SideBar from "../../../assets/side bar.svg";
import { Grid, Typography } from "@mui/material";

const Intro = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={5}>
          <img src={TwitterPost} alt="post" />
        </Grid>
        <Grid item xs={6} color="white" pt={30}>
          <Typography variant="h2">It's Not your Typical</Typography>
          <Typography variant="h2" textTransform="uppercase" fontWeight={600}>
            IT solution
          </Typography>
          <Typography color="#808080" mt={5}>
            We build brands by careful understanding of our clients needs. We
            implement all the various elements
          </Typography>
          <Typography color="#808080">
            required to create revenue streams and shine the light on how
            effective digital strategy and
          </Typography>
          <Typography color="#808080">
            implementation can better serve the global markets and humanity.
          </Typography>
        </Grid>
        <Grid
          item
          xs={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={SideBar} alt="post" width={60} />
        </Grid>
      </Grid>
    </>
  );
};

export default Intro;
