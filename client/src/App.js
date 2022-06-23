import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Missing from "./pages/Missing";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Document from "./pages/Document";
import Header from "./components/Header";
import { Container } from "@mui/material";
import EditDiscussion from "./pages/EditDiscussion";
import EditDocument from "./pages/EditDocument";
import auth from "./hoc/auth";
import Discussion from "./pages/Discussion";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container sx={{ maxWidth: "1280px" }}>
        <Routes>
          <Route path="/" element={auth(Home, null)} />
          <Route path="/signin" element={auth(SignIn, null)} />
          <Route path="/signup" element={auth(SignUp, null)} />
          <Route path="/document" element={auth(Document, null)} />
          {/* <Route path=":id"/> */}
          <Route path="/edit_document" element={auth(EditDocument, null)} />
          <Route path="/discussion" element={auth(Discussion, null)} />
          <Route path="/edit_discussion" element={auth(EditDiscussion, null)} />
          <Route path="*" element={auth(Missing, null)} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;

// <Route path="/" element={auth(Home, null)} />
// <Route path="/signin" element={auth(SignIn, false)} />
// <Route path="/signup" element={auth(SignUp, false)} />
// <Route path="/document" element={auth(Document, null)}/>
//   {/* <Route path=":id"/> */}
// <Route path="/edit_document" element={auth(EditDocument, true)}/>
// <Route path="/discussion" element={auth(Discussion, null)}/>
// <Route path="*" element={auth(Missing, null)} />
