import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useState} from 'react'
import GetApi from "./components/GetApi";
import GetRandomJoke from "./components/URL/GetRandomJoke";
import { Context } from "./components/Context";
import "./Style.css"


function App() {

const [urljoke, setUrljoke] = useState('http://api.icndb.com/jokes/')
const [data, setData] = useState({})
return (
    <>
    <Context.Provider value={{urljoke,setUrljoke, data, setData}}>
        <Router>
          <Routes>
            <Route path="random" elemennt={<GetRandomJoke path='random'/>}/>
            <Route path="/" exact element={<GetApi/>}/>   
          </Routes>
        </Router>
      </Context.Provider>
    </>
  );
}

export default App;
