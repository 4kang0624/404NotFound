import {
  Box,
  Grid,
  MenuItem,
  Select,
  TextareaAutosize,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import styled from "styled-components";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

function EditDiscussion() {
  const [discussion, setnum] = React.useState("");

  const handleChange = event => {
    setnum(event.target.value);
  };
  return (
    <StyledBody>
      <Box
        paddingTop={"50px"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        width={"100%"}
      >
        <Typography
          variant="h4"
          component="h4"
          pb={"1rem"}
          fontWeight={"600"}
          marginBottom={"70px"}
          fontSize={"35px"}
          alignSelf={"start"}
        >
          주제
        </Typography>
        <Grid paddingBottom={"10px"} alignSelf={"start"}>
          <Typography fontWeight={"600"} fontSize={"20px"}>
            토론
          </Typography>
        </Grid>
        <Grid paddingBottom={"30px"}>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 1200 }}>
            <InputLabel id="demo-simple-select-standard-label"></InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={discussion}
              onChange={handleChange}
              label="List"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Box
          component={"form"}
          sx={{
            marginY: "3rem",
          }}
        >
          <Typography
            fontWeight={"600"}
            fontSize={"20px"}
            paddingBottom={"30px"}
          >
            새로운 토론 주제
          </Typography>
          <Grid paddingBottom={"30px"}>
            <Typography paddingBottom={"10px"}>주제</Typography>
            <TextareaAutosize
              aria-label="empty textarea"
              style={{
                width: "1200px",
                height: "4rem",
                fontSize: "1rem",
                border: "1px solid gray",
                outlineColor: "royalblue",
                padding: "0.5rem",
              }}
            />
          </Grid>
          <Grid paddingBottom={"40px"}>
            <Typography paddingBottom={"10px"}>내용</Typography>
            <TextareaAutosize
              aria-label="empty textarea"
              style={{
                width: "1200px",
                height: "8rem",
                fontSize: "1rem",
                border: "1px solid gray",
                outlineColor: "royalblue",
                padding: "0.5rem",
              }}
            />
          </Grid>
          <Grid paddingBottom={"150px"}>
            <Button
              variant={"contained"}
              style={{
                width: "145px",
                height: "41px",
                backgroundColor: "#2C2D36",
                float: "right",
                borderRadius: "10px",
              }}
            >
              <Typography fontWeight={"400"} fontSize={"24px"}>
                등록
              </Typography>
            </Button>
          </Grid>
        </Box>
      </Box>
    </StyledBody>
  );
}

const StyledBody = styled.div``;

export default EditDiscussion;
