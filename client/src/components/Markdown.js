import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { Box, Button, Grid } from "@mui/material";

const mkdStr = `# Markdown Editor for [React](https://facebook.github.io/react/)

**Hello world!!!**

[![](https://avatars.githubusercontent.com/u/1680273?s=80&v=4)](https://avatars.githubusercontent.com/u/1680273?v=4)

\`\`\`javascript
import React from "react";
import ReactDOM from "react-dom";
import MEDitor from '@uiw/react-md-editor';

\`\`\`
`;

function Markdown() {
  const [value, setValue] = useState(mkdStr);
  return (
    <Box component={"form"} sx={{ width: "100%" }}>
      <MDEditor height={600} value={value} onChange={setValue} />
      <Grid
        container
        display={"flex"}
        justifyContent={"end"}
        marginTop={"1rem"}
      >
        <Grid item>
          <Button variant="contained">저장</Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Markdown;
