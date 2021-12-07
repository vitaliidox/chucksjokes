import React, {useEffect, useState, useContext} from "react";
import GetRandomJoke from "./URL/GetRandomJoke";
import NumberOfJokes from "./URL/NumberOfJokes";
import GetCategories from "./URL/GetCategories"




function GetApi(props) {
    const [randomJoke, setRandomJoke] = useState()
    const [joke, setJokes] = useState(false)
    const [lastPath, setLastPath] = useState()
    const [path, setPath] = useState('random')
    useEffect(()=>{
        <GetRandomJoke path='random'/>
    },[joke])
        // function ActivateCategories() {
        //     if(active==='active'){
        //         setActive('')
        //     }else{setActive('active')}
            
        // }



return(
    <>
    <div className='container'>
        <NumberOfJokes/>
        <div className='row'>


            <div className='top col-12 mt-5'>
                <div className='random'>
                    <button 
                        type='button'
                        className='btn btn-danger mt-4 mb-4 mr-5'
                        onClick={()=>{
                            setJokes(joke!==true)
                            setRandomJoke(<GetRandomJoke path={path} lastPath={lastPath}/>)
                    }}>Get random joke</button>
                    <label className='labelForInput' for="numberJokes">Number of jokes:</label>
                    <input id='numberJokes' onChange={ (e) => {if (e.target.value>0){setLastPath('/'+e.target.value)}
                        else{setLastPath('')}
                        }} className='input col-1 m-5' type='number' min='1'/>

                    <label className='labelForInput' for="idJokes">Id:</label>
                    <input id="idJokes" onChange={ (e) => {if (e.target.value>0){setPath(e.target.value)}
                        else{setPath('random')}
                        }} className='input col-1 m-5' type='number' min='0'/>

                    <GetCategories/> 

                </div>
               
            </div>
      
                        <div className='offset-8 align-self-end'>
                            {randomJoke}
                        </div>
                            
        </div>
            
    </div>

    </>
)

}

export default GetApi