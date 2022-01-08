import { useState } from "react";
import Axios from "axios";
import "./App.css";
import WordPage from "./WordPage";

function App() {
  const [term, setTerm] = useState("");
  const [words, setWords] = useState(null);

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      "https://mashape-community-urban-dictionary.p.rapidapi.com/define",
      {
        params: { term: `${term}` },
        headers: {
          "x-rapidapi-host":
            "mashape-community-urban-dictionary.p.rapidapi.com",
          "x-rapidapi-key":
            "dd93223963msh0d79becd651c7bap1a76e9jsn121f11a867d1",
        },
      }
    );
    setWords(response.data);
  };

  return (
    <div className="App">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Urban Dictionary</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Search Urban Dictionary"
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
      {!words ? "Enter Word in Field Above" : <WordPage words={words} />}
    </div>
  );
}

export default App;
