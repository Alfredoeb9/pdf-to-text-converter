import React from "react";
import "./App.css";
import PdfTextExtract from "./component/pdfTextExtract";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>PDF TO TEXT CONVERTER</h1>
      </header>
      <PdfTextExtract />
    </div>
  );
}

export default App;
