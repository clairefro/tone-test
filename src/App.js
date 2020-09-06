import React from "react";
import "./styles/index.css";

import Player from "./components/Player";

function App() {
  return (
    <div className="App">
      <Player />
      <br />
      <br />
      <p style={{ fontWeight: "normal", fontSize: "14px" }}>
        Background image by{" "}
        <a
          href="https://unsplash.com/photos/uhjiu8FjnsQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Unsplash
        </a>
      </p>
    </div>
  );
}

export default App;
