import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Appbar from './Components/Appbar';
import MyCalendar from './Components/Calendar';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
	<div>
	<Appbar />
	<MyCalendar />
	</div>
, document.getElementById('root'));
registerServiceWorker();
