import { useState, useEffect } from 'react';
import './App.css'
import {BsArrowDownCircle} from 'react-icons/Bs';
import {BsArrowUpCircle} from 'react-icons/Bs';
function App() {
  const [joke, setJoke] = useState([]);
 const [openDiv, setOpenDiv]=useState(false);
  useEffect(() => {
    if(openDiv){

    }
  },[openDiv]);
   useEffect(() => {
    getJokesFuncion();
  }, []);
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

  const GetAJoke=()=>{
    if(openDiv){
      setOpenDiv(false);
      console.log("Now its false");
    } else{
      setOpenDiv(true);
      console.log("Now its true");

    }
  }

  return (
    <>
     <>{!openDiv?<div className="container">
    <BsArrowDownCircle className='icon up' onMouseEnter={GetAJoke} onMouseLeave={GetAJoke}/> </div>:<div className='fullContainer'> <h1>Jokes App!</h1>
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
  );<BsArrowUpCircle className='icon down' onMouseEnter={GetAJoke} onMouseLeave={GetAJoke}/></div>}
    <div className='jokeTitle'>Have an ice day</div> </>
     


}

export default App;
