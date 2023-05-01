import { useState, useEffect } from 'react';
import './App.css'
import {BsArrowDownCircle} from 'react-icons/Bs';
import {BsArrowUpCircle} from 'react-icons/Bs';
function App() {
  const [openDiv, setOpenDiv]=useState(false);
  useEffect(() => {
    if(openDiv){

    }
  },[openDiv]);
  const GetAJoke=()=>{
    if(openDiv){
      setOpenDiv(false);
      console.log("Now its false");
    } else{
      setOpenDiv(true);
      console.log("Now its true");

    }
  }
  return <>{!openDiv?<div className="container">
    <BsArrowDownCircle className='icon up' onMouseEnter={GetAJoke} onMouseLeave={GetAJoke}/> </div>:<div className='fullContainer'><BsArrowUpCircle className='icon down' onMouseEnter={GetAJoke} onMouseLeave={GetAJoke}/></div>}
    <div className='jokeTitle'>Have an ice day</div> </>
    
 
  
}

export default App
