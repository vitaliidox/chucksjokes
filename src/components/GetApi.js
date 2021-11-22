import React, {useEffect, useState, useContext} from "react";
import GetRandomJoke from "./URL/GetRandomJoke";
import NumberOfJokes from "./URL/NumberOfJokes";
// import GetCategories from "./URL/GetCategories"




function GetApi(props) {
    const [randomJoke, setRandomJoke] = useState()
    const [joke, setJokes] = useState(false)
    const [active, setActive] = useState('')
    useEffect(()=>{
        <GetRandomJoke path='random' joke={joke}/>

    },[])
        function ActivateCategories() {
            if(active==='active'){
                setActive('')
            }else{setActive('active')}
            console.log()
        }
return(
    <>
    <div className='container'>
        <NumberOfJokes/>
        <div className='row gy-5'>

            <div className='categories'>
                {/* <GetCategories path='categories'/> */}
            </div>

            <div className='top col-12 mt-5'>
                <div className='random col-12'>
                    <button 
                    type='button'
                    className='btn btn-danger mt-4 mb-5'
                    onClick={()=>{
                        setJokes(joke!==true)
                        setRandomJoke(<GetRandomJoke path='random'/>)
                    }}>Get random joke</button>
                    <div className ='col align-self-end'>{randomJoke}</div>
                </div>
            </div>

        </div>
        
    </div>

    </>
)

}

export default GetApi