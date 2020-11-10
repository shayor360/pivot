import React, {Component} from 'react' 
import axios from 'axios';

class Post extends Component{
		constructor(props){
		super(props)
		this.state={
			
			post:'',
			myPost:[]
		}
		this.onChangePost = this.onChangePost.bind(this)
	
		this.onSubmit = this.onSubmit.bind(this)
	
	}

	

	onChangePost(e){
		this.setState({
			post: e.target.value
		})
	}

	onSubmit(e){
	 e.preventDefault();
	console.log(this.state.post)
	
		const post= {
			post:this.state.post
		}

		let axiosConfig ={
			headers:{
				
				'Content-Type': 'application/json'
			},
			body:JSON.stringify({
				post,
			})
		}
		console.log(post)
		axios.post('http://localhost:5000/post/createpost',post,axiosConfig)
			.then(res=>	 console.log(res.data)// window.push('/signin')
			)
			.catch(err=>{
				console.log("error")
			})


			

		// this.setState({
		// 	post:''
		// })

	}

	// componentDidMount(){
	// 	axios.get('http://localhost:5000/post/mypost')
	// 	.then(response =>{
	// 		this.setState({allPost:response.data})
	// 		console.log(response.data)
	// 		console.log(allPost)
	// 	})
	// 	.catch((error) =>{
	// 		console.log(error)
	// 	})
	// }


	render(){
	 
		return(
			<div>
				<h3> create post log</h3>
				<form onSubmit={this.onSubmit}>
					
					<div className="form-group">
						<label>Post:</label>
						<input type="text" value={this.state.post} onChange={this.onChangePost}/>
					</div>
					<div className="form-group">
						<input type="submit" value="Create User" className="btn btn-primary" />
					</div>
				</form>

				{
				this.state.myPost.map(({_id,post})=>{
					return(
						<h2 key={_id}>{post}</h2>
					)
						
					})
				}
					
			</div>
		)
	}
		
}


export default Post