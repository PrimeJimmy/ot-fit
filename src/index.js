import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Appbar from './Components/Appbar';
import Workouttracker from './Components/Workouttracker';
import Addevent from './Components/Addevent';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';



ReactDOM.render(
	<div>
	<article>
		<Appbar />
		<Workouttracker />
		<Addevent />
	</article>	
	</div>
, document.getElementById('root'));
registerServiceWorker();
