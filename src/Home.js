import React, {Component} from 'react';
import NavBar from './NavBar';
import Post from './Post';
import ShowComent from './ShowComent'
import fire from './Fire';



class Home extends Component{

	

	render(){
		
		return(
			<div>
			<NavBar/>
			 <Post/> 
			 <ShowComent/>
			</div>
			)
	}
}

export default Home;