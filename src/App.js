import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Button from "./Button";

const title = "Welcome to my React page";
const likes = 50;
const link = "http://www.google.com";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <h1 className="title">{title}</h1>
        <Home className="home"></Home>
        <Button className="button"></Button>
        <p className="page">
          My page is liked {Math.floor(Math.random() * 11)} times!
        </p>
      </div>
    </div>
  );
}

export default App;
