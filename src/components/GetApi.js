import React, {useEffect, useState, useContext} from "react";
import GetRandomJoke from "./URL/GetRandomJoke";
import NumberOfJokes from "./URL/NumberOfJokes";
// import GetCategories from "./URL/GetCategories"




function GetApi(props) {
    const [randomJoke, setRandomJoke] = useState()
    const [joke, setJokes] = useState(false)
    const [active, setActive] = useState('')
    const [numbJokes, setNumbJokes] = useState()

    useEffect(()=>{
        <GetRandomJoke path='random'/>
    },[joke])
        // function ActivateCategories() {
        //     if(active==='active'){
        //         setActive('')
        //     }else{setActive('active')}
            
        // }

  console.log(numbJokes)
return(
    <>
    <div className='container'>
        <NumberOfJokes/>
        <div className='row'>

            <div className='categories'>
                {/* <GetCategories path='categories'/> */}
            </div>

            <div className='top col-12 mt-5'>
                <div className='random col-12'>
                    <button 
                        type='button'
                        className='btn btn-danger mt-4 mb-4'
                        onClick={()=>{
                            setJokes(joke!==true)
                            setRandomJoke(<GetRandomJoke path='random/' numb={numbJokes}/>)
                    }}>Get random joke</button>
                    <input onChange={ (e) => {if (e.target.value>0){setNumbJokes(e.target.value)}
                else{setNumbJokes('')}
                }} className='input col-1 m-5' type='number' min='1'/>
                    <div className ='offset-2 align-self-end'>{randomJoke}</div>
                </div>
            </div>

        </div>
        
    </div>

    </>
)

}

export default GetApi