import { useEffect } from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [joke, setJoke] = useState([]);

  const getJokesFuncion = () => {
    let options = {
      method: "GET",
      headers: {
        "x-api-key": "dDngk3K69nspwV4M2GNXFQ==yMoXWr09NuNxkpyZ",
      },
    };

    let url = "https://api.api-ninjas.com/v1/jokes?limit=1";

    fetch(url, options)
      .then((res) => res.json()) // parse response as JSON
      .then((data) => {
        console.log(data);
        setJoke(data);
      })
      .catch((err) => {
        console.log(`error ${err}`);
      });

    console.log(joke);
  };

  useEffect(() => {
    getJokesFuncion();
  }, []);

  return (
    <>
      <h1>Jokes App!</h1>
      <p>The Joke is...</p>
      <p>
        {joke?.map((joke, index) => {
          return (
            <p key={index}>
              <h2>{joke.joke}</h2>
            </p>
          );
        })}
      </p>
    </>
  );
}

export default App;
