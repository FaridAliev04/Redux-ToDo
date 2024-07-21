import React,{useState} from 'react'
import { data } from '../data'
import { MdDeleteForever } from "react-icons/md";
import { LuPenLine } from "react-icons/lu";
import { useDispatch, useSelector } from 'react-redux';
import { handleDelete } from '../Redux/crud';
import { upId } from '../Redux/updataId';
import NewData from './NewData';

const Update = () => {
    const info=useSelector((e)=>e.crud)
    const id=useSelector((e)=>e.updata)
    const [infoId,setInfoId]=useState()
    console.log(info)
    const dispatch=useDispatch()

    const deleteFunc=(e)=>{
        dispatch(handleDelete(e))
    }
    const updataFunc=(e)=>{
        dispatch(upId(e))
        console.log(id)
    }
  return (
    <div className='update-page'>
        {info?.map((e)=>{
            return id===e.id?<NewData/>: <div key={e.id} className='value'>
                <h3 className='value-text'>{e.text}</h3>
                <div className="update-icons-div">
                <LuPenLine onClick={()=>updataFunc(e)} className="update-icon  change-icons" />
                <MdDeleteForever onClick={()=>deleteFunc(e)}  className="delete-icon change-icons"/>
                </div>
            </div>
        })}
    </div>
  )
}

export default Update