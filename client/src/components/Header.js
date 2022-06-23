import React, { useEffect, useRef } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const titleRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.style.cursor = "pointer";
    }
  }, []);

  const goHome = () => {
    navigate("/");
  };

  return (
    <Box>
      <Grid
        container
        textAlign={"center"}
        bgcolor={"#0D90B2"}
        height={"50px"}
        color={"white"}
        display={"flex"}
        alignItems={"center"}
      >
        <Grid item xs={6.1}>
          <Typography
            ref={titleRef}
            variant="h6"
            component={"h6"}
            color={"white"}
            onClick={goHome}
          >
            Code<b>Wiki</b>
          </Typography>
        </Grid>
        <Grid item xs={0.8} sx={{ "&>a": { color: "white" } }}>
          <Link to="/signin">로그인</Link>
        </Grid>
        <Grid item xs={0.8} sx={{ "&>a": { color: "white" } }}>
          <Link to="/discussion">토론</Link>
        </Grid>
        <Grid item xs={0.8} sx={{ "&>a": { color: "white" } }}>
          <Link to="/edit_document">글쓰기</Link>
        </Grid>
        <Grid item xs={3.5} display={"flex"} justifyContent={"end"}>
          <Box width={"50px"} height={"50px"} bgcolor={"#0D90B2"}>
            <Box
              borderRadius={"50%"}
              bgcolor={"white"}
              width={"40px"}
              height={"40px"}
              margin={"5px"}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;
