import { Box, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import Markdown from "../components/Markdown";

function EditDocument() {
  const [title, setTitle] = useState("");
  const changeTitle = e => {
    setTitle(e.target.value?.trim());
  };

  return (
    <Box
      paddingTop={"50px"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Grid container>
        <Grid item xs={8} marginBottom="1rem">
          <TextField
            label="Title"
            id="standard-size-normal"
            variant="standard"
            value={title}
            onChange={changeTitle}
          />
        </Grid>
      </Grid>
      <Markdown title={title} />
    </Box>
  );
}

export default EditDocument;
