import React, {Component} from 'react';
import fire from './Fire';
import Navlogo from './Navlogo';
//import Facebook from './Facebook';
import './Login.css'

class Login extends Component {
	constructor(props){
		super(props);
		this.login=this.login.bind(this);
			this.handleChange=this.handleChange.bind(this);
		this.signup=this.signup.bind(this);
		this.state={
			name:'',
			email:'',
			password:''
		}
	}
	login(e){
		e.preventDefault();
		const displayName = this.state.displayName;
		fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(function(){
            const user = fire.auth().currentUser;
            user.updateProfile({
                displayName: displayName
            })
        }).catch((error)=>{
	console.log(error);
});
	}

	signup(e){
		e.preventDefault();
		fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
		.catch((error)=>{
			console.log(error);
		})
	}



	handleChange(e){
		this.setState({[e.target.name]: e.target.value });
	}
	render(){
		return(


			<div>
<Navlogo/>
<div className="container ">
			<form className="card rounded-lg">
			<div className="form-group">
			<label className="register">Registrate</label>

<input value={this.state.name} onChange={this.handleChange} type="name" name="name"
			className="form-control form" 
			placeholder="Nombre Completo"/>
</div>
<div className="form-group">
			
			<input value={this.state.email} onChange={this.handleChange} type="email" name="email"
			className="form-control form" id="exampleInputEmail" 
			placeholder="Correo electrónico"/>
	</div>
	<div className="form-group">
	<input value={this.state.password} onChange={this.handleChange} type="password"
	name="password" class="form-control form" id="exampleInputPassword1" placeholder="password"/>
	</div>
	<button type="submit" onClick={this.login} className="btnSign btn-success">Login</button>
	<button onClick={this.signup} className="btn">-- Signup --</button>
	
	</form>
</div>
	</div>



	);
}
}
export default Login;