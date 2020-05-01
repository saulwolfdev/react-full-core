import React, { Component,Fragment } from 'react';
import ComunicacionInstancias from './components/ComunicacionInstancias';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}
	render() { 
		return (
      <Fragment>
		  <ComunicacionInstancias/>
      </Fragment>
    );
	}
}
 
export default App;