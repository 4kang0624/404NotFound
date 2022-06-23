import React from "react";
import {
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import { Link } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import { Box } from "@mui/system";
const itemData = [
  {
    title: "Python",
    version: 2,
    src: "/signin",
  },
  {
    title: "ComputerArchitecture",
    version: 1,
    src: "/signin",
  },
  {
    title: "JavaScript",
    version: 1,
    src: "/signin",
  },
];

function SearchResult({ documents }) {
  return (
    <ImageList
      sx={{ width: 500, height: 450, marginTop: "45px" }}
      cols={3}
      rowHeight={164}
    >
      {documents.map((item, i) => (
        <ImageListItem key={i}>
          <Box bgcolor={"#42bcf5"} width={"164px"} height={"164px"}></Box>
          <Link key={i} to={`/document:${item.title}`} state={item}>
            <ImageListItemBar
              title={item.title}
              subtitle={"Ver. " + item.version}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            ></ImageListItemBar>
          </Link>
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default SearchResult;
