import React, {Component} from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";

const API_KEY = "AIzaSyDYZ0KGbplmjdd96JN-SRgywqhI6UQbZ9o";



class  App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: "react.js"}, (videos) => {
      this.setState({ videos });
    });
  }
  render() {
    return (
      <div>
        <h1>Hello!!!</h1>
        <SearchBar/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  };
};

var app = document.querySelector(".container");
ReactDOM.render(<App/>, app);
