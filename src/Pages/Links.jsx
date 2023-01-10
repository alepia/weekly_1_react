import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";

export default function Links() {
  //State
  const [data, setData] = useState([
    {
      name: "JQuery",
      url: "https://code.jquery.com/jquery-3.6.1.min.js",
      description: "JQuery CDN link",
    },
  ]);

  const [input, setInput] = useState("");
  const [inputLink, setInputLink] = useState("");
  const [inputDesc, setInputDesc] = useState("");

  const Delete = (index) => {
    setData((prevValue) => {
      const copyData = [...prevValue];
      copyData.splice(index, 1);
      return copyData;
    });
  };
  return (
    <div>
      <Navbar />
      {data.map((obj, index) => {
        return (
          <div className="render-container">
            <div key={index}>
              <h1>
                <a href={obj.url} target="_blank">
                  {obj.name}
                </a>
              </h1>
              <p>Description: {obj.description}</p>
              <button
                onClick={() => {
                  Delete(index);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
      <div className="lateral">
        <aside>
          <form onSubmit={(event) => event.preventDefault()}>
            <input
              type="text"
              placeholder="Name"
              onChange={(event) => {
                let currentValue = event.target.value;
                setInput(currentValue);
              }}
              value={input}
            ></input>
            <br />
            <input
              type="text"
              placeholder="URL"
              onChange={(event) => {
                let currentValue = event.target.value;
                setInputLink(currentValue);
              }}
              value={inputLink}
            ></input>
            <br />
            <input
              type="text"
              placeholder="Description"
              onChange={(event) => {
                let currentValue = event.target.value;
                setInputDesc(currentValue);
              }}
              value={inputDesc}
            ></input>
            <br />
            <button
              onClick={() =>
                setData((prevValue) => [
                  ...prevValue,
                  { name: input, url: inputLink, description: inputDesc },
                ])
              }
            >
              Add Item
            </button>
          </form>
        </aside>
      </div>
    </div>
  );
}
