import React from "react";
import ReactDOM from "react-dom";

import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyDYZ0KGbplmjdd96JN-SRgywqhI6UQbZ9o";

// Create a new component. This component should produce some HTML

const App = () => {
  return (
    <div>
      <SearchBar/>
    </div>
  );
};

// Take this component's generated HTML and put it on the page (in the DOM)
var app = document.querySelector(".container");
ReactDOM.render(<App/>, app);
