import React, { Component, Fragment } from "react";
import styles from "../index.module.scss";
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
  agregar = () => {
    this.setState({
      price: this.state.price + 1
    });
  };
  quitar = () => {
    this.setState({
      price: this.state.price - 1
    });
  };
  limpiar = () => {
    this.setState({
      price: 0
    });
  };

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
    const hasItems=this.state.price>0;
    const style = {
      border: "1px solid red",
      borderRadius: "5px",
      padding: "5px",
      backgroundColor: hasItems > 0 ? "#51ffc3" : "#00e1ff",
      color: hasItems > 0 ? "#FFF" : "#b400ff",
      transition:"all 500ms ease-out"
    };
    const borderPrice = hasItems ? styles["priceActive"] :"";
    const border=styles.priceDefault + " "+ borderPrice;
    return (
      <Fragment>
        <div className={styles.price}>
          <div style={style}>
            <h1 >{this.props.name}</h1>
            <div className={border}></div>
            <p>{this.state.price}</p>
            <button onClick={this.agregar}>agregar</button>
            <button onClick={this.quitar}>quitar</button>
            <button onClick={this.limpiar}>limpiar</button>
    <p>{this.props.price * this.state.price}</p>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Tasks;