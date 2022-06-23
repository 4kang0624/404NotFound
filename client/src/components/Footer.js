import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      position={"absolute"}
      bottom={0}
      bgcolor={"#5D5C5D"}
      height={"60px"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      color={"white"}
      width={"100%"}
    >
      <Typography>Copyright © 2022. Codenary All Rights Reserved.</Typography>
    </Box>
  );
}

export default Footer;
