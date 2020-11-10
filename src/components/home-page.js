import React, {Component} from 'react';
import axios from 'axios';

class Home extends Component{
	constructor(props){
		super(props)
		this.state={
			allPst:[]
		}

	}

	componentDidMount(){
		axios.get('http://localhost:5000/post/allpost')
		.then((response) =>{
			const array=response.data.posts;
			// array.map(function({_id, post,postedBy}){
			// 	console.log({_id, post})
			// })
			this.setState({
				allPst:array
			})
			
		})
		.catch((error) =>{
			console.log(error)
		})
		// console.log(this.state.allPst)
	}

	render(){
		const allPst = this.state;
		
		return(
			<div>
				welcome to pivotal tracker page
				{
				this.state.allPst.map(({_id,post})=>{
					
						
						return(
							<h2 key={_id}>{post}</h2>
						)
						
					})
				}
			</div>
		)
	}
}

export default Home