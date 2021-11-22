import React, {useEffect, useState, useContext} from "react";
import { Context } from "../Context";


function GetNumberOfJokes() {
const [count, setCount] = useState({})
const [isLoaded, setIsLoaded] = useState(false);
const [error, setError] = useState(null)



    useEffect(()=>{
        fetch(`http://api.icndb.com/jokes/count`)
        .then((res)=>res.json())
        .then((result)=>{
            setCount(result)
            setIsLoaded(true)
            // console.log(result)
        },
        (error)=>{
            setIsLoaded(true)
            setError(error)
        })
    },[])

   

    return <>
   
            <div className="container">
                <div className="row justify-content-center">
                    <div className="counter justify-content-center">
                    <h3>The number of jokes:</h3> <span className='countersNumber'>{count.value}</span>
                    </div>
                </div>
            </div>
        </>

}


export default GetNumberOfJokes