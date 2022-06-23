import { InputBase, Typography, Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/system";
import React from "react";
import SearchResult from "../components/SearchResult";

function Home() {
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
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 400,
          height: 40,
          borderRadius: "20px",
          bgcolor: "black",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1, color: "white" }}
          // placeholder="Search Google Maps"
          inputProps={{ "aria-label": "search document" }}
        />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon sx={{ color: "white" }} />
        </IconButton>
      </Paper>
      <SearchResult />
    </Box>
  );
}

export default Home;
