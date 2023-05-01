import { useState } from 'react'

import { AiOutlineLike } from 'react-icons/ai'
import { AiFillLike } from 'react-icons/ai'
import { AiOutlineDislike } from 'react-icons/ai'
import { AiFillDislike } from 'react-icons/ai'

import './App.css'
import './styles/like.css'

const Like = () => {
  const [likes, setLikes] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const [dislikes, setDislikes] = useState(0)
  const [isDisliked, setIsDisliked] = useState(false)


  const likeClick = () => {

    if (!isLiked) {
      setLikes(likes + 1)
      setDislikes(0)
      setIsLiked(true)
      setIsDisliked(false)
    }

  }

  const dislikeClick = () => {
    if (!isDisliked) {
      setDislikes(dislikes + 1)
      setLikes(0)
      setIsDisliked(true)
      setIsLiked(false)
    }
  }

  return (
    <div className='likes-container'>
      <div className='like'>
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
  )
}

function App() {

  return (
    <>
      <Like />
    </>
  )
}

export default App
