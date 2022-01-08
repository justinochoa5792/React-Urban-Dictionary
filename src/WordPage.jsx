import React from "react";

const WordPage = (props) => {
  let word = props.words;
  console.log(word);

  return (
    <div className="container">
      {word.list.map((Word) => {
        return (
          <div className="wordList">
            <h3>{Word.word}</h3>
            <p>{Word.definition}</p>
            <p>{Word.example}</p>
            <a target="_blank" rel="noreferrer" href={Word.permalink}>
              {Word.permalink}
            </a>
            <p>
              {Word.written_on} by, <span>{Word.author}</span>
            </p>
            <div className="rating">
              <div className="thumbs-up">Likes: {Word.thumbs_up}</div>
              <div className="thumbs-down">Dislikes: {Word.thumbs_down}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WordPage;
