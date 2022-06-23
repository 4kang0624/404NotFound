import axios from "axios";

// actions
const GET_DOCUMENT = "document/GET";
const GET_DOCUMENT_LOG = "document/GET_LOG";
const INSERT_DOCUMENT = "document/INSERT";
const MATCH_TITLE_LIST = "document/MATCH_TITLE_LIST";
const RECENT_DOCUMENT_LIST = "document/RECENT_DOCUMENT_LIST";

//action creator
export const getDocument = dataToSubmit => {
  const request = axios
    .post("/document/get-document", dataToSubmit)
    .then(res => res.data)
    .catch(err => alert(err.message));
  return { type: GET_DOCUMENT, payload: request };
};

export const getDocumentLog = dataToSubmit => {
  const request = axios
    .post("/document/get-document-log", dataToSubmit)
    .then(res => res.data)
    .catch(err => alert(err.message));
  return { type: GET_DOCUMENT_LOG, payload: request };
};

export const insertDocument = dataToSubmit => {
  const request = axios
    .post("/document/insert-document", dataToSubmit)
    .then(res => res.data)
    .catch(err => alert(err.message));
  return { type: INSERT_DOCUMENT, payload: request };
};

export const matchTitleList = dataToSubmit => {
  const request = axios
    .post("/document/match-title-list", dataToSubmit)
    .then(res => res.data)
    .catch(err => alert(err.message));
  return { type: MATCH_TITLE_LIST, payload: request };
};

export const recentDocumentList = dataToSubmit => {
  const request = axios
    .post("/document/recent-document-list", dataToSubmit)
    .then(res => res.data)
    .catch(err => alert(err.message));
  return { type: RECENT_DOCUMENT_LIST, payload: request };
};

// reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case GET_DOCUMENT:
      return { ...state, documentData: action.payload };
    case GET_DOCUMENT_LOG:
      return { ...state, documentLog: action.payload?.log };
    case INSERT_DOCUMENT:
      return { ...state, insertDocumentSuccess: action.payload?.result };
    case MATCH_TITLE_LIST:
      return state;
    case RECENT_DOCUMENT_LIST:
      return state;
    default:
      return state;
  }
}
