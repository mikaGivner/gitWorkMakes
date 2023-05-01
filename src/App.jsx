import { useState, useEffect } from "react";
import "./App.css";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";

function App() {
  const [joke, setJoke] = useState([]);
  const [openDiv, setOpenDiv] = useState(false);

  useEffect(() => {
    getJokesFunction();
  }, []);

  const getJokesFunction = () => {
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

  const getAJoke = () => {
    setOpenDiv(!openDiv);
    console.log(`Now it's ${openDiv}`);
  };

  return (
    <>
      {!openDiv ? (
        <div className="container">
          <BsArrowDownCircle
            className="icon up"
            onMouseEnter={getAJoke}
            onMouseLeave={getAJoke}
          />
        </div>
      ) : (
        <div className="fullContainer">
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
          <BsArrowUpCircle
            className="icon down"
            onMouseEnter={getAJoke}
            onMouseLeave={getAJoke}
          />
        </div>
      )}
      <div className="jokeTitle">Have a nice day</div>
    </>
  );
}

export default App;
