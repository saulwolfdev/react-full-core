import React, { Component,Fragment } from 'react';
import RequestAsync from './components/PeticionesAsincronas';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}
	render() { 
		return (
      <Fragment>
		  <RequestAsync/>
      </Fragment>
    );
	}
}
 
export default App;