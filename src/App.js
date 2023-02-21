import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Badge, Button, Spinner } from "react-bootstrap";
import "./App.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {} from "./redux/action";
import Router from "./Router";
import Header from "./components/header/Header";
import { useLocation, useParams } from "react-router-dom";
import Bread from "./components/bread/Bread";

function App() {
  const { pathname, state } = useLocation();
  console.log("first")
  return (
    <div className="App">
      <Header />
      <Bread pathname={pathname} state={state} />
      <Router />
    </div>
  );
}

export default App;
