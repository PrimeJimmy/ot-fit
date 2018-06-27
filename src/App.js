import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import Workoutplanner from './Components/Workoutplanner/Workoutplanner';
import Workouttracker from './Components/Workouttracker/Workouttracker';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';
import './App.css';


class App extends React.Component {
	constructor() {
		super();
		this.state = {
			route: 'signin',
			isSignedIn: false
		}
	}

  onRouteChange = (route) => {
  	if (route === 'signout') {
  		this.setState({isSignedIn: false})
  	} else if (route === 'home') {
  		this.setState({isSignedIn: true})
  	} else if (route === 'workouttracker') {
  		this.setState({route: 'workouttracker'})
  	}
  	this.setState({route: route});
  }

  render() {
  	const { route } = this.state
    return (
      <div className='App'>
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
        { route === 'home' 
        ? <Workoutplanner onRouteChange={this.onRouteChange} />
      	: (
      	  route === 'workouttracker' 
      	  ? <Workouttracker onRouteChange={this.onRouteChange}/>
      	  : ( route === 'signin' 
      	  ? <Signin onRouteChange={this.onRouteChange}/>
      	  : <Register onRouteChange={this.onRouteChange}/>
      	  )
      	) 
      }
      </div>
   );
  }
    
}


export default App;