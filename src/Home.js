import React, {Component} from 'react';
import NavBar from './NavBar';
import Post from './Post';


class Home extends Component{
	

	render(){
		return(
			<div>
			<NavBar/>
			<h1>You are home</h1>
<Post/>
			</div>
			);
	}
}

export default Home;