import React, {useEffect, useState, useContext} from "react";
import { Context } from "../Context";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"


function GetRandomJoke(props) {

    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null)
    const path = props.path
    const numb = props.lastPath
    const {urljoke, setUrljoke} = useContext(Context)
    const {data, setData} = useContext(Context)
    const [styles, setStyles] = useState()

    useEffect(()=>{
        fetch(`${urljoke}${path}${numb}`)
        .then((res)=>res.json())
        .then((result)=>{
            setData(result.value)
            setIsLoaded(true)

        },
        (error)=>{
            setIsLoaded(true)
            setError(error)
        })
        setStyles({display:"flex"})
    },[props])


    function hideDiv() {
        setStyles({display:"none"})
    }
    console.log(numb)
    
//    const NumberJoke = ()=> {
//         data.forEach(element => {
//             <div style={styles} className="alert alert-light justify-content-center " role="alert">
//             {element.joke}
//         </div>
//         });
//     }
              
   

    return <>
    <Link to="#" 
        className="randomJoke"
        onClick={
        ()=> hideDiv()
        
            }>
            
                <div className="row justify-content-end">
                <div className="col-4 mt-5">
                    
                    <div style={styles} className="alert alert-light justify-content-center " role="alert">
                        {data.joke}
                    </div>

                   {/* {data?.forEach(element => 
                     <div style={styles} className="alert alert-light justify-content-center " role="alert">
                        {element.joke}
                     </div>)} */}

                </div>
                </div>
           
    </Link></>

}


export default GetRandomJoke