import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { GlobalProvider } from './context/GlobalState';
import Category from './pages/Category';
import HomePage from './pages/HomePage';

const App = () => {
	useEffect(() => {
		let scripts = [
			{ src: 'https://code.jquery.com/jquery-3.5.1.slim.min.js' },
			{ src: 'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js' },
			{ src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js' },
		];
		scripts.map((item) => {
			const script = document.createElement('script');
			script.src = item.src;
			script.async = true;
			document.body.appendChild(script);
		});
	}, []);

	return (
		<GlobalProvider>
			<Router>
				<div className="App">
					<Header />
					<Switch>
						<Route exact path="/category/:category" component={Category} />
						<Route exact path="/" component={HomePage} />
					</Switch>
					<Footer />
				</div>
			</Router>
		</GlobalProvider>
	);
};

export default App;
