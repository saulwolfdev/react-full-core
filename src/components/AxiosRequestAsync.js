import React, { Component } from 'react';
// import axios from "axios"
class RequestAxiosAsync extends Component {
constructor(props) {
		super(props);
		this.state = { 
			  movie: {},
			  loadingMovie:false
		}
	}
	  handleSubmit = (e) => {

    e.preventDefault()
	this.setState({loadingMovie:true})
    const title = e.target[0].value
    const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=5c24385e';
    // axios.get(url,{
	// 	params:{
	// 		t:title 
	// 	}
	// })
    //   .then(res => this.setState({ movie:res.data,  loadingMovie:false }))

  const res = await fetch(url + '&t=' + title);
  const movie= await res.json()

  this.setState({movie,loadingMovie:false})


  }
	render() { 
		console.log("Movie",this.state.movie)
		const {movie,loadingMovie} =this.state
		return (<Fragment>
			<h1>peticiones Asincronas</h1>
			<form onSubmit={this.handleSubmit}> 
				<input placeholder="ingrese nombre pelicula"/>
				<button>
            Buscar
          </button>
			</form>
				{loadingMovie&&(
					<h5>Un momento por favor estamos cargando...</h5>
				)}
				{movie.Title&&(
					<div>
						<h4>MOVIE: {movie.Title}</h4>
						<strong>Year:{movie.Year}</strong>
						<p>Description:{movie.Plot}</p>
						<img src={movie.Poster} alt={movie.Title} />
					</div>
				)}
		</Fragment>);
	}
}

export default RequestAxiosAsync;
