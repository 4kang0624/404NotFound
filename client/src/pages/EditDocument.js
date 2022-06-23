import { Box, Grid, Typography } from '@mui/material';
import React from 'react'
import Markdown from '../components/Markdown';


function EditDocument() {
  return (
    <Box paddingTop={"50px"} display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Grid container>
        <Grid item xs={8} >
          <Typography variant='h4' component='h4' pb={"1rem"}>주제(새 문서 작성)</Typography>
        </Grid>
      </Grid>
      <Markdown/>
    </Box>
  )
}

export default EditDocument;