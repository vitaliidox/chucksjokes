import React, {useEffect, useState, useContext} from "react";
import { Context } from "../Context";


function CreateURL(props) {

    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null)
    const path = props.path
    const {urljoke, setUrljoke} = useContext(Context)
    const {data, setData} = useContext(Context)
    const [styles, setStyles] = useState()

    useEffect(()=>{
        fetch(`${urljoke}${props.path}`)
        .then((res)=>res.json())
        .then((result)=>{
            setData(result)
            setIsLoaded(true)
            console.log(result)
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

    return <>
    <a href="#" 
        className="randomJoke"
        onClick={
        ()=> hideDiv()
            }>
            <div className="container">
                <div className="row justify-content-center">
                    
                    <div style={styles} className="alert alert-danger justify-content-center" role="alert">
                        {data.value}
                        
                    </div>
                </div>
            </div>
    </a></>

}


export default CreateURL