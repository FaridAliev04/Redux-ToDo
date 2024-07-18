import React,{useState} from 'react'
import { MdOutlineDone } from "react-icons/md";
import { MdClear } from "react-icons/md";
import { useDispatch } from 'react-redux';
import {none} from '../Redux/updataId'
 
const NewData = () => {
  const [noneValue,setNoneValue]=useState('')
  const dispatch=useDispatch()

  const clearFunc=()=>{
    dispatch(none())
  }
  return (
    <div className='newDate-main'>
        <input type="text" className='neewData-inp' />
        <MdOutlineDone className='done-icons change-icons'/>
        <MdClear onClick={()=>clearFunc()} className='clear-icons change-icons' />

    </div>
  )
}

export default NewData