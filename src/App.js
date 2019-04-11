import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'
/*	BrowserRouter for servers that respond to requests
		HashRouter if using a static file server
			- Both will create a special HISTORY object
*/

function Main() {
	return <h2>Home</h2>;
}
function Profile() {
	return <h2>Profile</h2>;
}
function Appts() {
	return <h2>Appointments</h2>;
}

class App extends Component {
  render() {
    return (
			<React.Fragment>
	      <div className="App">
					<Router>
						<div>
							<nav>
								<ul>
									<li><Link to="/">Home</Link></li>
									<li><Link to="/profile/">Profile</Link></li>
									<li><Link to="/apptmts/">Appointments</Link></li>
								</ul>
							</nav>
							<Route path="/" exact component={Main}/>
							<Route path="/profile/" component={Profile}/>
							<Route path="/apptmts/" component={Appts}/>
						</div>
					</Router>
	        <div className='container-fluid py-3'>

					</div>
	      </div>
			</React.Fragment>
    );
  }
}

export default App;
