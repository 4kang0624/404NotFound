import { Box, Typography } from "@mui/material";
import React from "react";
import DiscussionBlock from "../components/DiscussionBlock";

function Discussion() {
  return (
    <Box paddingTop={"50px"} display={"flex"} flexDirection={"column"}>
      <Typography variant="h4" component="h4" pb={"1rem"}>
        주제
      </Typography>
      <Typography marginY={"2rem"}>자세한 주제</Typography>
      <DiscussionBlock />
    </Box>
  );
}

export default Discussion;
