import {
  InputBase,
  Typography,
  Paper,
  IconButton,
  Chip,
  Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/system";
import React, { useState } from "react";
import SearchResult from "../components/SearchResult";

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
      <Grid container sx={{ maxWidth: "900px", marginTop: "30px" }}>
        <Grid item xs={3} textAlign={"center"}>
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
        <Grid item xs={3} textAlign={"center"}>
          <Chip
            label="전체"
            variant="outlined"
            onClick={() => console.log("dd")}
          />
        </Grid>
      </Grid>
      {isCard && <SearchResult />}
    </Box>
  );
}

export default Home;
