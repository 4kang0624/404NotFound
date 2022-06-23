import axios from "axios";

// actions
const LOGIN = "user/LOGIN";
const AUTHORIZATION = "user/AUTHORIZATION";
const REGISTER = "user/REGISTER";
const CHECK_EMAIL = "user/CHECK_EMAIL";
const GET_USER_DATA = "user/GET_USER_DATA";
const UPDATE_USER_DATA = "user/UPDATE_USER_DATA";
const DELETE_USER = "user/DELETE_USER";
const MODIFY_USER_CONTENT = "user/MODIFY_USER_CONTENT";
const GET_USER_CONTENT = "user/GET_USER_CONTENT";

//action creator
export const loginUser = dataToSubmit => {
  const request = axios
    .post("/login", dataToSubmit)
    .then(res => res.data)
    .catch(err => alert(err.message));
  return { type: LOGIN, payload: request };
};

export const authorize = () => {
  const request = axios
    .post("/autoLogin")
    .then(res => res.data)
    .catch(err => console.log(err));
  return { type: AUTHORIZATION, payload: request };
};

export const signUpUser = dataToSubmit => {
  const request = axios
    .post("/register", dataToSubmit)
    .then(res => res.data)
    .catch(err => console.log(err));
  return { type: REGISTER, payload: request };
};

export const checkEmail = dataToSubmit => {
  const request = axios
    .post("/checkEmail", dataToSubmit)
    .then(res => res.data)
    .catch(err => console.log(err));
  return { type: CHECK_EMAIL, payload: request };
};

export const getUserData = dataToSubmit => {
  const request = axios
    .post("/getUserData", dataToSubmit)
    .then(res => res.data)
    .catch(err => console.log(err));
  return { type: GET_USER_DATA, payload: request };
};

export const updateUserData = dataToSubmit => {
  const request = axios
    .post("/updateUserData", dataToSubmit)
    .then(res => res.data)
    .catch(err => console.log(err));
  return { type: UPDATE_USER_DATA, payload: request };
};

export const deleteUser = dataToSubmit => {
  const request = axios
    .post("/deleteUser", dataToSubmit)
    .then(res => res.data)
    .catch(err => console.log(err));
  return { type: DELETE_USER, payload: request };
};

export const modifyUserContent = dataToSubmit => {
  const request = axios
    .post("/modifyUserContent", dataToSubmit)
    .then(res => res.data)
    .catch(err => console.log(err));
  return { type: MODIFY_USER_CONTENT, payload: request };
};

export const getUserContent = dataToSubmit => {
  const request = axios
    .post("/getUserContent", dataToSubmit)
    .then(res => res.data)
    .catch(err => console.log(err));
  return { type: GET_USER_CONTENT, payload: request };
};

// reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case LOGIN:
      return { ...state, loginSucess: action.payload.result };
    case AUTHORIZATION:
      return state;
    case REGISTER:
      return { ...state, registerSuccss: action.payload.result };
    case CHECK_EMAIL:
      return { ...state, checkEmailSuccss: action.payload };
    case GET_USER_DATA:
      return { ...state, userData: action.payload };
    case UPDATE_USER_DATA:
      return { ...state, updateUserSuccess: action.payload.result };
    case DELETE_USER:
      return { ...state, deleteUserSuccess: action.payload.result };
    case MODIFY_USER_CONTENT:
      return { ...state, modifyUserContentSuccess: action.payload.result };
    case GET_USER_CONTENT:
      return {
        ...state,
        getUserContentSuccess: action.payload.result,
        userContent: action.payload.userContent,
      };
    default:
      return state;
  }
}
