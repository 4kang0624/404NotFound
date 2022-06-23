import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MDEditor from "@uiw/react-md-editor";
import React from "react";
import DocumentNav from "../components/DocumentNav";

function Document() {
  const mkdStr = `# Markdown Editor for [React](https://facebook.github.io/react/)

**Hello world!!!**

[![](https://avatars.githubusercontent.com/u/1680273?s=80&v=4)](https://avatars.githubusercontent.com/u/1680273?v=4)

\`\`\`javascript
import React from "react";
import ReactDOM from "react-dom";
import MEDitor from '@uiw/react-md-editor';

\`\`\`
`;
  return (
    <Box paddingTop={"50px"} display={"flex"}>
      <Grid container>
        <Grid item xs={8}>
          <Typography variant="h3" component="h3" pb={"1rem"}>
            제목
          </Typography>
          <hr />
          <MDEditor.Markdown
            style={{ padding: 15 }}
            source={mkdStr}
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
