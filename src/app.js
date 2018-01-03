import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Map from './components/Map';
import Places from './components/Places';

class App extends Component{

	render(){
		return(
				<div>
					This is the React App.
					<Map />
					<Places />
				</div>
		)
	}
}


ReactDOM.render(<App />,document.getElementById('app'));