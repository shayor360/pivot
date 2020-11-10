import React, {Component} from 'react' 
import axios from 'axios';
import style from './stylesheet/login.css';

class Login extends Component{
		constructor(props){
		super(props)
		this.state={
			email:'',
			password:''
		}
		this.onChangePassword = this.onChangePassword.bind(this)
		this.onChangeEmail = this.onChangeEmail.bind(this)
		this.onChangeUsername = this.onChangeUsername.bind(this);
		this.onSubmit = this.onSubmit.bind(this)
	
	}

	onChangePassword(e){
		this.setState({
			password:e.target.value
		})
	}

	onChangeEmail(e){
		this.setState({
			email:e.target.value
		})
	}

	onChangeUsername(e){
		this.setState({
			username:e.target.value
		});
	}

	onSubmit(e){
		// const {email} = this.state.email;
		e.preventDefault();
		// if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
		const user = {
			email: this.state.email,
			password:this.state.password
		}

		let axiosConfig = {
			headers:{
				'Content-Type': 'application/json'
			},
			body:JSON.stringify({
				user
			})
		}

		axios.post('http://localhost:5000/users/signin', user,axiosConfig)
				.then(data=>{
					if(data.error){
						console.log("error")
					}else{
						// localStorage.setItem("jwt", data.token)
						// localStorage.setItem("user", JSON.stringify(data.user))
						 console.log(data);
						window.location = '/post';
					}	
				})
				.catch(err=>{
					console.log("error")
				})

			

		this.setState({
			email:'',
			password:''
		})

	}

	render(){
	 
		return(
			<div>
				<h3> Login page</h3>
				<form onSubmit={this.onSubmit}>
					
					<span className="form-group">

						<label>Email:</label>
						<input type="text" value={this.state.email} onChange={this.onChangeEmail}/>
					</span><br/>
					
					<div className="form-group">
						<label>Password:</label>
						<input type="password" value={this.state.password} onChange={this.onChangePassword}/>
					</div>
					<div className="form-group">
						<input type="submit" value="Create User" className="btn btn-primary" />
					</div>
				</form>
			</div>
		)
	}
		
}


export default Login