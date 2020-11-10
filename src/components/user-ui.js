import React, {Component} from 'react';

import axios from 'axios';


class CreateUser extends Component{

	constructor(props){
		super(props)
		this.state={
			username:'',
			firstname:'',
			lastname:'',
			email:'',
			password:''
		}
		this.onChangePassword = this.onChangePassword.bind(this)
		this.onChangeEmail = this.onChangeEmail.bind(this)
		this.onChangeLastname = this.onChangeLastname.bind(this)
		this.onChangeFirstname = this.onChangeFirstname.bind(this)
		this.onChangeUsername = this.onChangeUsername.bind(this);
		this.onSubmit = this.onSubmit.bind(this)
	
	}
	
	// componentDidMount(){
	// 	this.setState({
	// 		users: ['test user'],
	// 		username: 'test users'
	// 	});
	// }

	onChangePassword(e){
		this.setState({
			password:e.target.value
		})
	}

	onChangeLastname(e){
		this.setState({
			lastname:e.target.value
		})
	}

	onChangeEmail(e){
		this.setState({
			email:e.target.value
		})
	}

	onChangeFirstname(e){
		this.setState({
			firstname:e.target.value
		})
	}

	onChangeUsername(e){
		this.setState({
			username:e.target.value
		});
	}

	onSubmit(e){
		const {email} = this.state.email;
		e.preventDefault();
		if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
		const user = {
			username:	this.state.username,
			firstname: this.state.firstname,
			email: this.state.email,
			lastname:this.state.lastname,
			password:this.state.password
		}
		// console.log(user)
		// if(user ==  ""){
		// 	console.log("input all field")
		// }

		let axiosConfig = {
			headers:{
				'Content-Type': 'application/json'
			},
			body:JSON.stringify({
				user
			})
		}
		axios.post('http://localhost:5000/users/add', user)
			// if(user === ""){
			// 	console.log("input field is empty")
			// }
			// else{
				.then(data=>{
					if(data.error){
						return	alert("Sdv")
						console.log("error")

					}else{
						 console.log(data);
						 window.location = '/Login';
					}
					// res => {console.log(res.data)	
				})
				.catch(err=>{
					console.log("error")
				})
			// }
			

		this.setState({
			username:'',
			firstname:'',
			lastname:'',
			email:'',
			password:''
		})
	}
	}

	render(){
	
		return(
			<div>
				<h3> create user log</h3>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Lastname:</label>
						<input type="text" value={this.state.lastname} onChange={this.onChangeLastname}/>
					</div>
					<div className="form-group">
						<label>Email:</label>
						<input type="text" value={this.state.email} onChange={this.onChangeEmail}/>
					</div>
					<div className="form-group">
						<label>Firstname:</label>
						<input type="text" value={this.state.firstname} onChange={this.onChangeFirstname}/>
					</div>
					<div className="form-group">
						<label>Username:</label>
						<input type="text" value={this.state.username} onChange={this.onChangeUsername}/>
					</div>
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


export default CreateUser