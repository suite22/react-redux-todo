import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux' 
import App from './components/App'
import todoApp from './reducers'

const store = createStore(todoApp)

render(
	<App />, 
	document.getElementById('app')
)