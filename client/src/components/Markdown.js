import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { Box, Button, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { insertDocument } from "../redux/modules/document";
import useBeforeLeave from "../hooks/useBeforeLeave";
import { useNavigate } from "react-router-dom";

function Markdown(props) {
  const { title, realContent } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector(state => state.user.userId);
  const [content, setContent] = useState(realContent);
  const beforeFC = () => window.confirm("사이트에 나가시겠습니까?");
  useBeforeLeave(beforeFC);

  const onSubmitHandler = e => {
    e.preventDefault();
    if (content === "" || title === "") {
      return alert("양식이 비워져있습니다.");
    }
    const obj = {
      content,
      title,
      user: userId,
    };

    dispatch(insertDocument(obj)).then(res => {
      if (res.payload?.result === "fail") {
        return alert("등록할 수가 없습니다.");
      }
      alert("성공적으로 등록했습니다!");
      return navigate("/");
    });
  };
  return (
    <Box component={"form"} sx={{ width: "100%" }} onSubmit={onSubmitHandler}>
      <MDEditor height={600} value={content} onChange={setContent} />
      <Grid
        container
        display={"flex"}
        justifyContent={"end"}
        marginTop={"1rem"}
      >
        <Grid item>
          <Button variant="contained" type="submit">
            등록
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Markdown;
