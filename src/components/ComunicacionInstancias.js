
import React, { Component } from 'react';

const Header=()=>{
    const subtitle={
        fontWeight:"bold"
    }
    const title={
        margin:"0.6rem",
        border:"0.3em",
        padding:"1px solid #d2d2d2",
        fontFamily:"monospace",
        fontSize:"17px"
    }
    return(
        <header style={title}>
            <h1>COMUNICACION ENTRE COMPONENTES</h1>
            <div style={subtitle}>
                Metodos de instancia
            </div>
        </header>
    )
}
class Hijo extends Component {
    state={
        message:"HE MUTADO DESDE HACIENDO CLICK DESDE HIJO O PADRE"
    }
    dispachAlert=(e, message="Alert desde el HIJO")=>{
        // alert(message)
        this.setState({message})
    }
    render() { 
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.dispachAlert}>
                    HIJO
                </button>
            </div>
        );
    }
}

class ComunicacionInstancias extends Component {

        hijo= React.createRef()
    
    handleClick=()=>{
       this.hijo.current.dispachAlert(null,"Click desde el PADRE")
    }
    render() {
        
        return (
           <div>
               <Header/>
               <Hijo ref={this.hijo}/>
               <button onClick={this.handleClick}>
                   PADRE
               </button>
           </div> 
        );
    }
}

export default ComunicacionInstancias;