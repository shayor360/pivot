import {Route, BrowserRouter as Router, Link} from "react-router-dom";
import Style from "./components/stylesheet/style.css";
import Home from "./components/home-page";
import Login from "./components/login";
import CreateUser from "./components/user-ui";
import Post from "./components/post";

function App() {
  return (
    <Router>
      <div className="container">
            <nav>
              <label className="logo">trakcer<Link to="/">Home</Link></label>

              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/signup">CreateUser</Link></li>
                <li><Link to="/post">Post</Link></li>
              </ul>

            </nav>
      <Route path='/' exact component={Home}/>
      <Route path='/Login' component={Login}/>
      <Route path='/signup' component={CreateUser}/>
      <Route path='/post' component={Post}/>
    </div>
    </Router>
  );
}

export default App;
