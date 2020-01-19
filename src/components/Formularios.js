import React, { Component,Fragment } from 'react';
class Formularios extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            name:"",
            validation:false,
            color:"#e8e8e8"
        }
    }
    handleInput=(e)=>{
        e.preventDefault()
        const name=e.target.value  
        const error=name !== " " && name.length < 5
         let color="green"
         if(name.trim()===""){
             color="#e8e8e8"
         }
        if (name.trim() !== " " && name.trim().length<5) {
            color = "red";
                 }
        this.setState({
            name,
            color
        })
    }
    render() { 
        const styles = {
        //   border: this.state.validation ? "4px solid red" : "1px solid #9E9E9E",
          border: `1px solid ${this.state.color}`,
          padding: ".3em .6em",
          outline: "none"
        };
        return (
            <Fragment>
                <input 
                style={styles}
                type="text" 
                name="name"
                 value={this.state.name}
                 onChange={this.handleInput}
                 />
            </Fragment>
        );
    }
}
 
export default Formularios;