import React,{useEffect, useState} from 'react'
import { MdOutlineDone } from "react-icons/md";
import { MdClear } from "react-icons/md";
import { useDispatch ,useSelector } from 'react-redux';
import {none} from '../Redux/updataId'
import { uptate } from '../Redux/crud';
 
const NewData = () => {
  const [value,setValue]=useState('')
  const [placeholder,setPlaceholder]=useState()
  const id=useSelector((e)=>e.updata) 
  const info=useSelector((e)=>e.crud)
  const infoMap=info.find((e)=>e.id==id)

  // useEffect(()=>{
  //   if(id==infoMap){
  //     setPlaceholder(info.text)
  //   }
  // },[])

  const dispatch=useDispatch()

  const clearFunc=()=>{
    dispatch(none())
  }
  const updataFunc=()=>{
    if(value!==""){
      dispatch(uptate({upText:value,test:id}))
      dispatch(none())
    }
    
  }
  return (
    <div className='newDate-main'>
        <input placeholder={infoMap.text} onChange={(e)=>setValue(e.target.value)} type="text" className='neewData-inp' />
        <MdOutlineDone onClick={()=>updataFunc()} className='done-icons change-icons'/>
        <MdClear onClick={()=>clearFunc()} className='clear-icons change-icons' />

    </div>
  )
}

export default NewData