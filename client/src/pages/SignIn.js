import { Box, Button, Grid, Paper, TextField } from "@mui/material";
import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/modules/user";

function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const changeId = useCallback(e => {
    setId(e.target.value);
  }, []);

  const changePassword = useCallback(e => {
    setPassword(e.target.value);
  }, []);

  const goSignIn = () => {
    navigate("/signin");
  };

  const goSignUp = () => {
    navigate("/signup");
  };

  const checkInput = () => {
    if (id !== "" && password !== "") {
      return true;
    }
    alert("아직 입력이 안된 양식이 있습니다!");
    return false;
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    if (!checkInput()) {
      return;
    }
    const obj = {
      userId: id,
      password,
    };
    dispatch(loginUser(obj)).then(res => {
      if (res.payload?.result) {
        const { token } = res.payload;
        document.cookie = `token=${token}`;
        alert("로그인 완료했습니다!");
        return navigate("/");
      } else {
        return alert("로그인 실패했습니다!");
      }
    });
  };

  return (
    <Box marginTop={"200px"} marginX={"20%"}>
      <Paper sx={{ height: "300px" }}>
        <Grid container>
          <Grid item xs={4} height={"300px"} bgcolor={"#2C2D36"}>
            <Box height={"100%"}></Box>
          </Grid>
          <Grid item xs={8} height={"300px"}>
            <Box sx={{ display: "flex", justifyContent: "end" }}>
              <Button onClick={goSignIn}>로그인</Button>
              <Button onClick={goSignUp}>회원가입</Button>
            </Box>
            <Form onSubmit={onSubmitHandler}>
              <TextField
                id="outlined-basic"
                value={id}
                onChange={changeId}
                placeholder="아이디"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                value={password}
                onChange={changePassword}
                type="password"
                placeholder="비밀번호"
                variant="outlined"
              />
              <Button type="submit">로그인</Button>
            </Form>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default SignIn;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 4rem;
`;
