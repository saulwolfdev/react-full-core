import React, { Component } from 'react';
class Eventos extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:""
         }
    }
    
    manejadorEventos=(e)=>{
        e.preventDefault()
        this.setState({
            name:e.target.value
        })
    }
    render() { 
        return (
        <div>
            
            <input onChange={this.manejadorEventos} type="text" name="name"/>
            {this.state.name}
        </div>);
    }
}
 
export default Eventos;