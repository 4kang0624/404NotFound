import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MDEditor from "@uiw/react-md-editor";
import React, { useState } from "react";
import DocumentNav from "../components/DocumentNav";
import { useLocation } from "react-router-dom";
import Markdown from "../components/Markdown";

function Document() {
  const location = useLocation();
  const { content, title, user, datetime, version } = location.state;
  const data = new Date(datetime);
  const year = data.getFullYear();
  const month = data.getMonth() + 1;
  const date = data.getDate();

  const [isClick, setIsClick] = useState(false);

  const onClickHandler = e => {
    setIsClick(true);
  };
  return (
    <Box paddingTop={"50px"} display={"flex"}>
      <Grid container>
        {isClick ? (
          <>
            <Markdown title={title} realContent={content} />
          </>
        ) : (
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={10}>
                <Typography variant="h3" component="h3" pb={"1rem"}>
                  {title}
                </Typography>
              </Grid>
              <Grid
                item
                xs={2}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Button variant="text" onClick={onClickHandler}>
                  수정하기
                </Button>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={4}>
                <Typography>작성자: {user}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography>버전: {version}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography>
                  날짜: {year}년 {month}월 {date}일
                </Typography>
              </Grid>
            </Grid>
            <hr />
            <MDEditor.Markdown
              style={{ padding: 15 }}
              source={content}
              linkTarget="_blank"
              // previewOptions={{
              //   linkTarget: "_blank"
              // }}
            />
          </Grid>
        )}
        <Grid item xs={4}>
          <DocumentNav />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Document;
