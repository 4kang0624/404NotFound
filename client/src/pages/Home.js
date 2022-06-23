import {
  InputBase,
  Typography,
  Paper,
  IconButton,
  Chip,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/system";
import React, { useState } from "react";
import SearchResult from "../components/SearchResult";
import InfoIcon from "@mui/icons-material/Info";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
const itemData = [
  {
    img: "https://miro.medium.com/max/1400/0*5CnyWf0j4a9daNkY",
    title: "Python",
    version: 2,
    src: "/signin",
  },
  {
    img: "https://miro.medium.com/max/1400/0*i4vAu1uZ1-N06EA-.jpg",
    title: "ComputerArchitecture",
    version: 1,
    src: "/signin",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/140px-Unofficial_JavaScript_logo_2.svg.png",
    title: "JavaScript",
    version: 1,
    src: "/signin",
  },
];

function Home() {
  const [isCard, setIsCard] = useState(false);
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Typography
        variant="h2"
        textAlign={"center"}
        fontWeight={"600"}
        marginTop={"100px"}
        marginBottom={"50px"}
      >
        코드위키
      </Typography>

      <Paper
        variant="outlined"
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 400,
          height: 40,
          border: "1px solid gray",
          outlineColor: "white",
          bgcolor: "white",
          boxShadow: 0,
        }}
      >
        <InputBase
          sx={{ ml: 2, flex: 1, color: "black" }}
          // placeholder="Search Google Maps"
          inputProps={{ "aria-label": "search document" }}
        />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon sx={{ color: "black" }} />
        </IconButton>
      </Paper>
      {/* <Grid container sx={{ maxWidth: "500px", marginTop: "30px", ml: 11 }}>
        <Grid item xs={2} textAlign={"center"}>
          <Chip
            label="학생"
            variant="outlined"
            onClick={() => console.log("dd")}
          />
        </Grid>
        <Grid item xs={3} textAlign={"center"}>
          <Chip
            label="주니어개발자"
            variant="outlined"
            onClick={() => console.log("dd")}
          />
        </Grid>
        <Grid item xs={3} textAlign={"center"}>
          <Chip
            label="시니어개발자"
            variant="outlined"
            onClick={() => console.log("dd")}
          />
        </Grid>
        <Grid item xs={2} textAlign={"center"}>
          <Chip
            label="전체"
            variant="outlined"
            onClick={() => console.log("dd")}
          />
        </Grid>
      </Grid> */}
      {isCard && <SearchResult />}
      <ImageList
        sx={{ width: 500, height: 450, marginTop: "45px" }}
        cols={3}
        rowHeight={164}
      >
        {itemData.map(item => (
          <Link to={item.src}>
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={"Ver. " + item.version}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={"info about ${item.title}"}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              ></ImageListItemBar>
            </ImageListItem>
          </Link>
        ))}
      </ImageList>
    </Box>
  );
}

export default Home;
