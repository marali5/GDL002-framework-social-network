import React, {Component} from 'react';
import fire from './Fire';
import menu from './img/menu.png'
import logo from './img/logo2.png';
import './NavBar.css';


class NavBar extends Component {
	constructor(props){
	 super(props);
	 this.logout=this.logout.bind(this);
	}
	logout(){
	 fire.auth().signOut();
	}
  render(){
    return(
    <div>
    	<nav className="navbar">
      <div className="dropdown">
      <a role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img className="d-inline-block menu" src={menu}/>
      </a>
      <img class="d-inline-block logo" src={logo}/>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <a className="dropdown-item" href="#">Action</a>
      <a className="dropdown-item" href="#">Another action</a>
      <a className="dropdown-item" href="#"><button onClick={this.logout}>Logout</button></a>
      </div>
      </div> 
      </nav>
    </div>
    )
  }
}
export default NavBar;