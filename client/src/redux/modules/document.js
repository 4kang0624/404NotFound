import axios from "axios";

// actions
const GET_DOCUMENT = "document/GET";
const GET_DOCUMENT_LOG = "document/GET_LOG";
const INSERT_DOCUMENT = "document/INSERT";

//action creator
export const getDocument = dataToSubmit => {
  const request = axios
    .post("/getDocument", dataToSubmit)
    .then(res => res.data)
    .catch(err => alert(err.message));
  return { type: GET_DOCUMENT, payload: request };
};

export const getDocumentLog = dataToSubmit => {
  const request = axios
    .post("/getDocumentLog", dataToSubmit)
    .then(res => res.data)
    .catch(err => alert(err.message));
  return { type: GET_DOCUMENT_LOG, payload: request };
};

export const insertDocument = dataToSubmit => {
  const request = axios
    .post("/insertDocument", dataToSubmit)
    .then(res => res.data)
    .catch(err => alert(err.message));
  return { type: INSERT_DOCUMENT, payload: request };
};

// reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case GET_DOCUMENT:
      return { ...state };
    default:
      return state;
  }
}
