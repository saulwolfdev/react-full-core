import React, { Component,Fragment } from 'react';
import Formularios from './components/Formularios';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}
	render() { 
		return (
      <Fragment>
		  <Formularios/>
      </Fragment>
    );
	}
}
 
export default App;