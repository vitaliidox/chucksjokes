import React, {useEffect, useState, useContext} from "react";
import CreateURL from "./URL/CreateURL";




function GetApi(props) {
    const [randomJoke, setRandomJoke] = useState()
    const [joke, setJokes] = useState(false)
    useEffect(()=>{
        <CreateURL path='random' joke={joke}/>
    },[])

return(
    <>
    <div className='container'>
        <div className='row'>
            <div className='categiries'>

            </div>
            <div className='top col-6'>
                <div className='random col-12 justify-content-center'>
                    <button 
                    type='button'
                    className='btn btn-danger mt-4 mb-5 offset-md-1'
                    onClick={()=>{
                        setJokes(joke!==true)
                        setRandomJoke(<CreateURL path='random'/>)
                    }}>Get random goke</button>
                    <div>{randomJoke}</div>
                </div>
            </div>
        </div>
        
    </div>

    </>
)

}

export default GetApi