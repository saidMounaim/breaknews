import axios from 'axios';

function getNews() {
	const API_KEY = '5-5an4PajbjvI1Os7JuW6GERY7Ls2aP0Bsyth3m5BS2W7Qpz';
	return axios
		.get(`https://api.currentsapi.services/v1/latest-news?language=en&apiKey=${API_KEY}`)
		.then((response) => response.data.news);
}

function getCategoryNews(catname) {
	const API_KEY = '5-5an4PajbjvI1Os7JuW6GERY7Ls2aP0Bsyth3m5BS2W7Qpz';
	return axios
		.get(`https://api.currentsapi.services/v1/search?category=${catname}&language=en&apiKey=${API_KEY}`)
		.then((response) => response.data.news);
}

export default {
	getNews,
	getCategoryNews,
};
