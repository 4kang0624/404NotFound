import { InputBase, Typography, Paper, IconButton } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/system";
import React, { useState } from "react";
import SearchResult from "../components/SearchResult";
import { getDocument, matchTitleList } from "../redux/modules/document";
import { useDispatch } from "react-redux";

function Home() {
  const [search, setSearch] = useState("");
  const [documents, setDocuments] = useState([]);
  const [matchTitle, setMatchTitle] = useState([]);
  const dispatch = useDispatch();

  const changeInput = e => {
    const obj = {
      title: e.target.value.trim(),
    };
    dispatch(matchTitleList(obj)).then(res => {
      console.log(obj.title);
      if (obj.title === "") {
        return setMatchTitle([]);
      }
      setMatchTitle(res.payload?.matchData);
    });

    dispatch(getDocument(obj)).then(res => {
      if (res.payload?.result === "fail") {
        return setDocuments([]);
      }
      setDocuments([res.payload]);
    });
    setSearch(e.target.value.trim());
  };

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
          outline: "1px solid #0D90B2",
          bgcolor: "white",
          boxShadow: 0,
        }}
      >
        <InputBase
          sx={{ ml: 2, flex: 1, color: "black" }}
          inputProps={{ "aria-label": "search document" }}
          value={search}
          onChange={changeInput}
        />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon sx={{ color: "black" }} />
        </IconButton>
      </Paper>
      {matchTitle.length !== 0 &&
        matchTitle.map((item, i) => (
          <React.Fragment key={i}>{matchTitle + " "}</React.Fragment>
        ))}
      {documents.length !== 0 && <SearchResult documents={documents} />}
    </Box>
  );
}

export default Home;
