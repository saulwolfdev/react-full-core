import React, { Component,Fragment } from 'react';
import RequestThen from './components/PeticionesPromesas';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}
	render() { 
		return (
      <Fragment>
		  <RequestThen/>
      </Fragment>
    );
	}
}
 
export default App;