import {
  Box,
  Grid,
  MenuItem,
  Select,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

function EditDiscussion() {
  const [list, setList] = useState("");
  return (
    <Box paddingTop={"50px"} display={"flex"} flexDirection={"column"}>
      <Typography variant="h4" component="h4" pb={"1rem"}>
        주제
      </Typography>
      <Grid>
        <Typography>토론</Typography>
      </Grid>
      <Grid>
        <Select
          value={list}
          onChange={e => setList(e.target.value)}
          inputProps={{ "aria-label": "Without label" }}
          sx={{ width: "35rem" }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </Grid>
      <Box
        component={"form"}
        sx={{
          marginY: "3rem",
        }}
      >
        <Typography>새로운 토론 주제</Typography>
        <Grid>
          <Typography>주제</Typography>
          <TextareaAutosize
            aria-label="empty textarea"
            style={{
              width: "35rem",
              height: "5rem",
              fontSize: "1rem",
              border: "1px solid gray",
              outlineColor: "royalblue",
              padding: "0.5rem",
            }}
          />
        </Grid>
        <Grid>
          <Typography>내용</Typography>
          <TextareaAutosize
            aria-label="empty textarea"
            style={{
              width: "35rem",
              height: "5rem",
              fontSize: "1rem",
              border: "1px solid gray",
              outlineColor: "royalblue",
              padding: "0.5rem",
            }}
          />
        </Grid>
      </Box>
    </Box>
  );
}

export default EditDiscussion;
