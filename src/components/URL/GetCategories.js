import React, {useEffect, useState, useContext, useMemo} from "react";
import { Context } from "../Context";


function GetCategories(props) {

    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null)
    const path = props.path
    const {urljoke, setUrljoke} = useContext(Context)
    
    const {data, setData} = useContext(Context)
 

    useEffect(()=>{
        fetch(`${urljoke}${props.path}`)
        .then((res)=>res.json())
        .then((result)=>{
            setData(result)
            setIsLoaded(true)
            
        },
        (error)=>{
            setIsLoaded(true)
            setError(error)
        })

    },[])



    return (<>
            <div className="row justify-content-center">
                <ul>
                {}
                </ul>
            
             
            </div>
</>)
    

}


export default GetCategories