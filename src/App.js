import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {useState} from 'react'
import GetApi from "./components/GetApi";
import CreateURL from "./components/URL/CreateURL";
import { Context } from "./components/Context";
import "./Style.css"

function App() {

const [urljoke, setUrljoke] = useState('https://api.chucknorris.io/jokes/')
const [data, setData] = useState({})
return (
    <>
    <Context.Provider value={{urljoke,setUrljoke, data, setData}}>
     <Router>
        <Switch>
          <CreateURL path='random'/>
          <Route path="/" exact>
            <GetApi/>
          </Route>
        </Switch>
      </Router>
      </Context.Provider>
    </>
  );
}

export default App;
