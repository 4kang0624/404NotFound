import { Box, Button, Grid, Paper, TextField } from '@mui/material';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const changeId = useCallback((e) => {
    setId(e.target.value);
  },[]);

  const changePassword = useCallback((e) => {
    setPassword(e.target.value);
  },[]);

  const goSignIn = () => {
    navigate("/signin");
  }

  const goSignUp = () => {
    navigate("/signup");
  }

  return (
    <Box marginTop={"200px"} marginX={"20%"}>
      <Paper sx={{height: "300px"}}>
        <Grid container>
          <Grid item xs={4} height={"300px"} bgcolor={"black"}>
            <Box height={"100%"}></Box>
          </Grid>
          <Grid item xs={8} height={"300px"}>
            <Box sx={{display: "flex", justifyContent: "end"}}>
              <Button onClick={goSignIn}>로그인</Button>
              <Button onClick={goSignUp}>회원가입</Button>
            </Box>
            <Form>
              <TextField id="outlined-basic" value={id} onChange={changeId} placeholder='아이디' variant="outlined" />
              <TextField id="outlined-basic" value={password} onChange={changePassword} type="password" placeholder='비밀번호' variant="outlined" />
              <Button>로그인</Button>
            </Form>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}

export default SignIn;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 4rem;
`;
