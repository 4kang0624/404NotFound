import { Box, Button, Grid, Paper, TextField } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function SignUp() {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");

  const changeId = useCallback((e) => {
    setId(e.target.value);
  },[]);

  const changeEmail = useCallback((e) => {
    setEmail(e.target.value);
  },[]);

  const changePassword = useCallback((e) => {
    setPassword(e.target.value);
  },[]);

  const changePassword2 = useCallback((e) => {
    setPassword2(e.target.value);
  },[]);

  const goSignIn = () => {
    navigate("/signin");
  }

  const goSignUp = () => {
    navigate("/signup");
  }

  return (
    <Box marginTop={"150px"} marginX={"20%"}>
      <Paper sx={{height: "400px"}}>
        <Grid container>
          <Grid item xs={4} height={"400px"} bgcolor={"black"}>
            <Box height={"100%"}></Box>
          </Grid>
          <Grid item xs={8} height={"400px"}>
            <Box sx={{display: "flex", justifyContent: "end"}}>
              <Button onClick={goSignIn}>로그인</Button>
              <Button onClick={goSignUp}>회원가입</Button>
            </Box>
            <Form>
              <TextField id="outlined-basic" value={id} onChange={changeId} placeholder='아이디' variant="outlined" />
              <TextField id="outlined-basic" value={email} onChange={changeEmail} placeholder='이메일' variant="outlined" />
              <TextField id="outlined-basic" value={password} onChange={changePassword} type="password" placeholder='비밀번호' variant="outlined" />
              <TextField id="outlined-basic" value={password2} onChange={changePassword2} type="password" placeholder='비밀번호확인' variant="outlined" />
              <Button>로그인</Button>
            </Form>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}

export default SignUp;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 4rem;
`;