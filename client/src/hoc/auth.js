import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authorize } from "../redux/modules/user";
import { useNavigate } from "react-router-dom";

export default function auth(SpecificComponent, option) {
  /* option*/
  //null => 아무나 출입 가능한 페이지
  //true => 로그인한 유저만 출입 가능한 페이지
  //false => 로그인한 유저는 출입 불가능한 페이지

  function AuthenticationCheck(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(authorize()).then(response => {
        // 로그인 하지 않은 상태
        if (response.payload?.result) {
          console.log(response);
          //로그인 한 상태
          if (!option) {
            navigate("/");
          }
        } else {
          //로그인 안한 상태
          if (option) {
            navigate("/signin");
          }
        }
      });
    }, [dispatch, navigate]);
    return <SpecificComponent />;
  }
  return (
    <>
      <AuthenticationCheck />
    </>
  );
}
