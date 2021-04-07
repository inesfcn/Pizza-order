import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Homepage from "./Homepage";
import Nav from "./Nav";
import Order from "./Order";
import Signup from "./Signup";
import Login from "./Login";
import "../css/App.css"

const Routes = () => {
    return(
    <Router>
        <Nav/>
        <Switch>
            <Route path ="/" exact component={Homepage}/>
             <Route path="/order" component={Order}/>
             <Route path="/signup" component={Signup}/>
             <Route path="/login" component={Login}/>
        </Switch>
    </Router>
    )
}

export default Routes;