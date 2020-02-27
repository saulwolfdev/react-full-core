import React, { Component } from 'react';
class Peticiones extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users:[],
			loading:true
		};
	}
	componentDidMount(){
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(res=>res.json())
			.then(users=>this.setState({users,loading:false}))
	}
	render() {
		let loadingCharge=(this.state.loading)?<h1>PLEASE JUST MOMENT</h1>:"";
		return (
		<div>
			{this.state.users.map(user=>(
				<ul key={user.id}>
					<li>{user.name}</li>
					<a href={`http://${user.website}`}>website</a>
				</ul>
			))}
			{loadingCharge}
		</div>	
		);
	}
}

export default Peticiones;