import Nav from "./components/nav";
import "./App.css";
import { useState } from "react";
import ListUrls from "./components/ListUrls";
import axios from "axios";

function App() {
  const [urls, setUrls] = useState([]);
  const [input, setInput] = useState("");
  const setData = async (e) => {
    e.preventDefault();
    if (input) {
      const { data } = await axios.post(`http://localhost:5000/URL`, {
        URL: input,
      });
      setUrls([
        ...urls,
        {
          url: data.data.URL,
          shortUrl: data.data.Short_URL,
          id: data.data._id,
        },
      ]);
      setInput("");
    }
    try {
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      <Nav />
      {/* <div className="AlignHeaderPage"> */}
      <div className="HeaderPage">
        <div className="BigTitle">
          <p className="Title">
            More than just <br></br>shorter links
          </p>
          <p className="Paragraph">
            Build your brand's recognition and get detailed <br></br>insights on
            how your links are performing
          </p>
          <button className="buttonGetStarted">Get Started</button>
        </div>
        {/* <div className="Illustration"> */}
        <div className="Illustration_work">
          <img
            className="Illustration"
            src={process.env.PUBLIC_URL + "/images/illustration-working.svg"}
            alt="image"
          />
          <div className="whiteBackground"></div>
        </div>
      </div>
      <div className="Form">
        <form
          onSubmit={(e) => {
            setData(e);
          }}
        >
          <input
            type="text"
            onChange={(e) => {
              setInput(e.target.value);
            }}
            value={input}
            placeholder="Shorten a link here"
          ></input>
          <button className="ShortenButton"> Shorten It!</button>
        </form>
      </div>
      <ListUrls data={urls} />
    </div>
  );
}

export default App;
