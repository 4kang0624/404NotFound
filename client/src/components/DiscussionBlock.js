import { Box, Grid, Typography } from "@mui/material";
import React from "react";

function DiscussionBlock() {
  return (
    <Grid container>
      <Grid item xs={12} marginY={"1rem"}>
        <Typography bgcolor={"royalblue"} p={".5rem"}>
          #1(사용자 아이디)
        </Typography>
        <Box sx={{ border: "1px solid black" }} p={"0.5rem"}>
          text
        </Box>
      </Grid>
    </Grid>
  );
}

export default DiscussionBlock;
