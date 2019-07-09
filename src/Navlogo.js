import React, {Component} from 'react';
import logo from './img/logo2.png';
import './Navlogo.css';
class Navlogo extends Component{
  


  render(){
    return(

<div>
<ul className="nav">
  <li className="nav-item">
    <a><img className="logo navbar-brand" src={logo} /></a>
  </li>
  
</ul>
</div>
);
}
}

export default Navlogo;