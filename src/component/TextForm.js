import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("success","uppercase");
  };

  const handleClearClick = () => {
    let a = window.confirm("Are you sure?");

    if (a === true) {
      let newtext = "";
      setText(newtext);
      props.showAlert("success","cleared text");
    }
  };

  const handleExtraSpaces = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("warning","spaces cleared");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("success","copied");
  };

  const handleDownClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("success","lowercase");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const countWords = (text) => {
    let words;
    if (text === " " || text.length === 0) words = 0;
    else words = text.trim().split(/\s+/).length;
    return words;
  };

  return (
    <React.Fragment>
      <div>
        <div
          className="container"
          style={{ color: props.mode === "dark" ? "white" : "#2f2f58" }}
        >
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange}
              style={{
                backgroundColor: props.mode === "dark" ? "grey" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
              id="mybox"
              rows="8"
            ></textarea>
          </div>
          <button
            type="button"
            className="btn btn-primary mx-2"
            onClick={handleUpClick}
          >
            Convert to Uppercase
          </button>
          <button
            type="button"
            className="btn btn-primary mx-2"
            onClick={handleDownClick}
          >
            Convert to Lowercase
          </button>
          <button
            type="button"
            className="btn btn-primary mx-2"
            onClick={handleClearClick}
          >
            Clear
          </button>
          <button
            type="button"
            className="btn btn-primary mx-2"
            onClick={handleCopy}
          >
            Copy
          </button>
          <button
            type="button"
            className="btn btn-primary mx-2"
            onClick={handleExtraSpaces}
          >
            Remove Space
          </button>
        </div>
      </div>

      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#2f2f58" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          You have entered {countWords(text)} words and {text.length} characters
        </p>
        <h2>You will take {0.008 * countWords(text)} seconds to read</h2>
        <h2 className="my-4">Preview</h2>
        <p>
          {text.length > 0 ? text : "Enter something to see a preview"}
        </p>
      </div>
    </React.Fragment>
  );
}
