import { Box, Typography } from "@mui/material";
import React from "react";
import DiscussionBlock from "../components/DiscussionBlock";
import styled from "styled-components";

function Discussion() {
  return (
    <StyledBody>
      <Box
        paddingTop={"100px"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Typography variant="h4" component="h4" pb={"1rem"} fontWeight={"600"}>
          주제
        </Typography>
        <Typography marginY={"1rem"} fontWeight={"300"}>
          자세한 주제
        </Typography>
        <DiscussionBlock />
      </Box>
    </StyledBody>
  );
}

const StyledBody = styled.div``;

export default Discussion;
