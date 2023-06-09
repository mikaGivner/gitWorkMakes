
import { useState, useEffect, useRef } from 'react'

import { AiOutlineLike } from 'react-icons/ai'
import { AiFillLike } from 'react-icons/ai'
import { AiOutlineDislike } from 'react-icons/ai'
import { AiFillDislike } from 'react-icons/ai'
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";

import './App.css'
import './styles/like.css'



function App() {
  const [joke, setJoke] = useState([]);
  const [openDiv, setOpenDiv] = useState(false);
  const [likes, setLikes] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const [dislikes, setDislikes] = useState(0)
  const [isDisliked, setIsDisliked] = useState(false)

  const likeRef = useRef()


  const likeClick = () => {

    if (!isLiked) {
      setLikes(likes + 1)
      setDislikes(0)
      setIsLiked(true)
      setIsDisliked(false)
      likeRef.current.style.backgroundColor = '#B0DAFF'
    }


  }

  const dislikeClick = () => {
    if (!isDisliked) {
      setDislikes(dislikes + 1)
      setLikes(0)
      setIsDisliked(true)
      setIsLiked(false)
      likeRef.current.style.backgroundColor = '#FF6D60'
    }
  }

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

          <div className='likes-container' >
            <div className='like' ref={likeRef}>
              <div className='like-logo'> {isLiked ? <AiFillLike /> : <AiOutlineLike />} </div>
              <div className='like-counter' >{likes}</div>
              <div className='dislike-logo'>{isDisliked ? <AiFillDislike /> : <AiOutlineDislike />}</div>
              <div className='dislike-counter'>{dislikes}</div>
            </div>
            <div className='buttons'>
              <button onClick={() => likeClick()}>Like</button>
              <button onClick={() => dislikeClick()}>Dislike</button>
            </div>

          </div >
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

export default App
