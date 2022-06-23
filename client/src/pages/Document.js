import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MDEditor from "@uiw/react-md-editor";
import React from "react";
import DocumentNav from "../components/DocumentNav";
import { useLocation } from "react-router-dom";

function Document() {
  const location = useLocation();
  const { content, title } = location.state;

  return (
    <Box paddingTop={"50px"} display={"flex"}>
      <Grid container>
        <Grid item xs={8}>
          <Typography variant="h3" component="h3" pb={"1rem"}>
            {title}
          </Typography>
          <hr />
          <MDEditor.Markdown
            style={{ padding: 15 }}
            source={content}
            linkTarget="_blank"
            // previewOptions={{
            //   linkTarget: "_blank"
            // }}
          />
        </Grid>
        <Grid item xs={4}>
          <DocumentNav />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Document;
