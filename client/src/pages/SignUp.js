import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { signUpUser, checkEmail, checkUserID } from "../redux/modules/user";

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");

  const changeId = useCallback(e => {
    setId(e.target.value.trim());
  }, []);

  const changeEmail = useCallback(e => {
    setEmail(e.target.value.trim());
  }, []);

  const changePassword = useCallback(e => {
    setPassword(e.target.value.trim());
  }, []);

  const changePassword2 = useCallback(e => {
    setPassword2(e.target.value.trim());
  }, []);

  const goSignIn = () => {
    navigate("/signin");
  };

  const goSignUp = () => {
    navigate("/signup");
  };
  // const checkEmailInput = () =>{

  // }

  const checkInput = () => {
    const pwdCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{9,15}$/;
    const idCheck = /^[a-z]+[a-z0-9]{5,19}$/g;

    if (id !== "" && password !== "" && password2 !== "" && email !== "") {
      if (password !== password2) {
        alert("비밀번호가 다릅니다.");
        return false;
      } else if (!pwdCheck.test(password)) {
        alert("비밀번호는 영문, 숫자, 특수문자 합 9-15자리가 되어야합니다.");
        return false;
      } else if (!idCheck.test(id)) {
        alert("아이디는 영문, 숫자 합 5-19자리가 되어야합니다.");
        return false;
      }
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
      email,
    };
    dispatch(checkUserID({ userId: id })).then(res => {
      if (res.payload?.result === "fail") {
        return alert("이미 있는 아이디입니다.");
      }
      dispatch(checkEmail({ email })).then(res => {
        if (res.payload?.result === "fail")
          return alert("이미 있는 이메일입니다.");
        dispatch(signUpUser(obj)).then(res => {
          if (res.payload?.result !== "fail") {
            return alert("회원가입 완료했습니다!");
          } else {
            return alert("회원가입 실패했습니다!");
          }
        });
      });
    });
  };

  return (
    <Box marginTop={"150px"} display={"flex"} justifyContent={"center"}>
      <Paper sx={{ width: "880px", height: "446px" }}>
        <Grid container>
          <Grid
            item
            width={285}
            height={446}
            bgcolor={"#0D90B2"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography variant="h3" component="h3" color={"white"}>
              Code<b>Wiki</b>
            </Typography>
          </Grid>
          <Grid item width={595} height={446} bgcolor={"#E4E3E3"}>
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
                sx={{
                  width: 372,
                  height: 52,
                  marginY: 1,
                }}
              />
              <TextField
                id="outlined-basic"
                value={email}
                onChange={changeEmail}
                type="email"
                placeholder="이메일"
                variant="outlined"
                sx={{
                  width: 372,
                  height: 52,
                  marginY: 1,
                }}
              />
              <TextField
                id="outlined-basic"
                value={password}
                onChange={changePassword}
                type="password"
                placeholder="비밀번호"
                variant="outlined"
                sx={{
                  width: 372,
                  height: 52,
                  marginY: 1,
                }}
              />
              <TextField
                id="outlined-basic"
                value={password2}
                onChange={changePassword2}
                type="password"
                placeholder="비밀번호확인"
                variant="outlined"
                sx={{
                  width: 372,
                  height: 52,
                  marginY: 1,
                }}
              />
              <Button
                variant="contained"
                type="submit"
                sx={{ alignSelf: "end" }}
              >
                회원가입
              </Button>
            </Form>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default SignUp;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 7rem 0 7rem;
  & > div {
    background-color: white;
    & > div {
      background-color: white;
    }
  }
`;
