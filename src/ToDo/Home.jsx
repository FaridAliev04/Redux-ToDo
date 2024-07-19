import React, { useState } from 'react'
// import { IoIosAddCircleOutline } from "react-icons/io";
import { GoPlus } from "react-icons/go";

import Update from './Update'
import { useDispatch,useSelector } from 'react-redux';
import { add } from '../Redux/crud';

const Home = () => {
    const dispatch=useDispatch()
    const info=useSelector((e)=>e.crud)
    const [newText,setNewText]=useState('')

    const addFunc=()=>{
      if(newText!=""){
        dispatch(add({id:info.length+1,text:newText}))
      }
      
    }
  return (
    <div className='add-page'>
      <div className="center-page">
          <div className='input-div'>
              <input onChange={(e)=>setNewText(e.target.value)} type="text"  className='add-inp' />
                <GoPlus onClick={()=>addFunc()} className='add-icons change-icons' />
          </div>     

          <Update/>
      </div>
        

    </div>
  )
}

export default Home