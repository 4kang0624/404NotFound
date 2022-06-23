import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import DocumentNav from '../components/DocumentNav';

function Document() {
  return (
    <Box paddingTop={"50px"} display={"flex"}>
      <Grid container>
        <Grid item xs={8} >
          <Typography variant='h3' component='h3' pb={"1rem"}>제목</Typography>
          <hr/>
        </Grid>
        <Grid item xs={4}>
          <DocumentNav/>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Document;