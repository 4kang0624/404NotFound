import { Box, Grid, Typography } from "@mui/material";
import React from "react";

function DiscussionBlock() {
  return (
    <Box width={"100%"}>
      <Grid container marginBottom={"1rem"}>
        <Grid
          item
          xs={12}
          marginY={"1rem"}
          borderRadius={"2px"}
          bgcolor={"rgba(68, 153, 176, 0.5)"}
        >
          <Box
            sx={{
              padding: "0.4rem",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography fontSize={"1rem"}>#1(사용자 아이디)</Typography>
            <Typography fontSize={"1rem"}>2022-06-23 12:48:43</Typography>
          </Box>
          <Box bgcolor={"white"} p={"1rem"}>
            text
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default DiscussionBlock;
