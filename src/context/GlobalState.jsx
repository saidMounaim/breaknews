import React, { createContext, useEffect, useReducer } from 'react';
import AppReducer from './AppReducer';
import AppServices from '../services/AppServices';

// create initial state

const initialState = {
	news: [],
};

// create context

export const GlobalContext = createContext(initialState);

// context provider

export const GlobalProvider = (props) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	const fetchNews = async () => {
		try {
			const data = await AppServices.getNews();
			dispatch({ type: 'FETCH_NEWS', payload: data });
		} catch (error) {
			console.log(error.response);
		}
	};

	useEffect(() => {
		fetchNews();
	}, []);

	return (
		<GlobalContext.Provider
			value={{
				news: state.news,
			}}
		>
			{props.children}
		</GlobalContext.Provider>
	);
};
