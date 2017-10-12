import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {battle, fetchPopularRepos} from './Apigit';

import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  NavNavLink,
  Redirect
} from 'react-router-dom'

const Home = (props) => {
  return (
    <div className="container">
      <h1 className="text-center"><strong>Github Battle: Battle your friends... and stuff.</strong></h1>
      <center>
      <NavLink  className="text-center"
      to= "/battle"
      ><button>Battle</button>
      </NavLink>   
      </center>
      <hr />

    </div>
  );
}


const Battle = (props) => {

  return(
    <section>
    <div className="container">
      <div className="row">
        <div className ="col-lg-6 col-xs-6">
         <form>
           <label>Player One</label>
           <input placeholder="Github Username"></input>
          <center> <button>Submit</button></center>
           </form>
           </div>
           <div className="col-lg-6 col-xs-6 ">
           <label>Player Two</label>
           <input placeholder="Github Username"></input>
           <center><button>Submit</button></center>
             </div>
      </div>
    </div>
    </section>
  )
     
  
};
const All = () => {

      
};


const Ruby = () => {
 
}
const JavaScript = () => {

}
const Css =()=>{

}

const Java =()=>{

}

const Python =()=>{

}

const Popular = (props) => {
  return (
    <div>
     
      <ul className="list-inline text-center">
        <li>  <NavLink exact to="/popular/all"> All </NavLink> </li>
        <li>  <NavLink to="/popular/ruby"> Ruby </NavLink> </li>
        <li>  <NavLink to="/popular/javascript"> JavaScript </NavLink> </li>
        <li>  <NavLink exact to="/popular/Java"> Java </NavLink> </li>
        <li>  <NavLink to="/popular/css"> Css </NavLink> </li>
        <li>  <NavLink to="/popular/python"> Python </NavLink> </li>
      </ul>

      <Switch>
        <Route exact path="/popular"
          render={() => <Redirect to="/popular" />} />

        <Route path="/popular/all" component={All} />
        <Route path="/popular/ruby" component={Ruby} />
        <Route path="/popular/javascript" component={JavaScript} />
        <Route path="/popular/java" component={Java} />
        <Route path="/popular/css" component={Css} />
        <Route path="/popular/python" component={Python} />
      </Switch>
    </div>
  );
}





class App extends Component {
  render() {
    return (
       (
  <BrowserRouter>
    <nav className="navbar navbar-default ">
      <div className="container">
        <div className="navbar-header">

          <ul className="nav navbar-nav navbar-left">
            <li className="active"><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/battle">Battle</NavLink></li>
            <li><NavLink to="/popular">Popular</NavLink></li>
          

          </ul>
          <hr />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/battle" component={Battle} />
           <Route path="/popular" component={Popular} />

          </Switch>
        </div>
      </div>
    </nav>
  </BrowserRouter>
)
    );
  }
}

export default App;
