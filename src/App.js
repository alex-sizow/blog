import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import './header.css';
import { Menu} from 'antd';

function App() {
	return (
		<div className='App'>
			<Menu className='header'>
				<div className='header-item'>Главная</div>
				<div className='header-item'>Новости</div>
				<div className='header-item'>Обо мне</div>
			</Menu>
			
		</div>
	);
}

export default App;
