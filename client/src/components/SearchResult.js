import React from 'react'
import { Card, Grid } from "@mui/material";

function SearchResult() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  return (
    <Grid container sx={{marginY: "50px"}}>
      {array.map((el) => (
        <Grid item xs={4} sx={{padding: "1rem", height: "200px"}}>
          <Card variant="outlined" sx={{height: "100%"}}>{el}</Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default SearchResult;