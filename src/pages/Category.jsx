import React, { useState, useEffect } from 'react';
import AppServices from '../services/AppServices';
import PostCard from '../components/PostCard';

const Category = (props) => {
	const [news, setNews] = useState([]);
	const category = props.match.params.category;

	const fetchNews = async () => {
		try {
			const data = await AppServices.getCategoryNews(category);
			setNews(data);
		} catch (error) {
			console.log(error.response);
			props.history.push('/');
		}
	};

	useEffect(() => {
		fetchNews();
	}, [category]);

	return (
		<div className="container">
			<div className="row">
				<div className="col-lg-8 col-md-10 mx-auto">{news && news.map((post) => <PostCard post={post} />)}</div>
			</div>
		</div>
	);
};

export default Category;
