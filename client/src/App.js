import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Missing from "./pages/Missing";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Document from "./pages/Document"
import Header from "./components/Header";
import { Container } from "@mui/material";
import Discussion from "./pages/Discussion";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Container sx={{maxWidth: "1280px"}}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/document" element={<Document/>}>
            {/* <Route path=":id"/> */}
          </Route>
          <Route path="/discussion" element={<Discussion/>}/>
          <Route path="*" element={<Missing/>} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
