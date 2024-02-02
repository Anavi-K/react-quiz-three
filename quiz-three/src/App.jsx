import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/HomeComponent";
import Quiz from "./components/QuizComponent";
import Result from "./components/ResultComponent";

export default class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/play-quiz" element={<Quiz />}></Route>
        <Route path="/finish-quiz" element={<Result />}></Route>
      </Routes>
    );
  }
}