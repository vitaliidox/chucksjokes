import React, {useEffect, useState, useContext, useMemo} from "react";
import { Context } from "../Context";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"


function GetCategories() {

    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null) 
    const [data, setData] = useState('')
    const [isActive, setActive] = useState()
  

    useEffect(()=>{
        fetch(`http://api.icndb.com/categories`)
        .then((res)=>res.json())
        .then((result)=>{
            setData(result.value)
            setIsLoaded(true)
        },
        (error)=>{
            setIsLoaded(true)
            setError(error)
        })

    },[])

    const ToggleClass = () => {
        setActive(!isActive); 
       };


    
    return (<>
            <div className='col-2'>
            <ul className='list-group'>
                    <span className="labelForInput">Categories</span>
                    <li onClick={ToggleClass} className={isActive? "list-group-item active" : 'list-group-item'}>{data[0]}</li>  
                    <li onClick={ToggleClass} className={isActive? "list-group-item active" : 'list-group-item'}>{data[1]}</li>
                </ul>
            </div>
                
            
             
            
</>)
    

}


export default GetCategories