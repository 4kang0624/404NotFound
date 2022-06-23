import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      bgcolor={"#5D5C5D"}
      position={"absolute"}
      height={"60px"}
      width={"100%"}
      bottom={"0"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      color={"white"}
    >
      <Typography>Copyright © 2022. Codenary All Rights Reserved.</Typography>
    </Box>
  );
}

export default Footer;
