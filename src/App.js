import React, { Component,Fragment } from 'react';
import Tasks from './components/Tasks';

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