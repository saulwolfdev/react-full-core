import React, { Component,Fragment } from 'react';

class Tasks extends Component {
  constructor(props) {
    super(props);
    // this.agregar = this.agregar.bind(this);
    // this.quitar = this.quitar.bind(this);
    this.state = {
      price: 0
    };
    const METHODS = ["agregar", "quitar", "limpiar"];

    METHODS.forEach(method => {
      this[method] = this[method].bind(this);
    });
  }
  //////////////////////
  //INICIALIZADORES
  state = {
    price: 0
  };
  agregar=()=> {
    this.setState({
      price: this.state.price + 1
    });
  }
  quitar=()=> {
    this.setState({
      price: this.state.price - 1
    });
  }
  limpiar=()=> {
    this.setState({
      price: 0
    });
  }

  /////////////////////
//   agregar() {
//     this.setState({
//       price: this.state.price + 1
//     });
//   }
//   quitar() {
//     this.setState({
//       price: this.state.price - 1
//     });
//   }
//   limpiar() {
//     this.setState({
//       price: 0
//     });
//   }
  render() {
    return (
      <Fragment>
        <div className="price">
          <h1>{this.props.name}</h1>
          <p>{this.state.price}</p>
          <button onClick={this.agregar}>agregar</button>
          <button onClick={this.quitar}>quitar</button>
          <button onClick={this.limpiar}>limpiar</button>
        </div>
      </Fragment>
    );
  }
}

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}
	render() { 
		return (
      <Fragment>
		  <Tasks name={"price product"} price={10}/>
      </Fragment>
    );
	}
}
 
export default App;