import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import PostCard from '../components/PostCard';
import Paginate from '../components/Paginate';

const HomePage = () => {
	const { news } = useContext(GlobalContext);
	const [currentPage, setCurrentPage] = useState(1);

	const postPerPage = 4;

	const lengthNews = news.length;
	const pagesCount = Math.ceil(lengthNews / postPerPage);

	const indexOfLastPost = currentPage * postPerPage;
	const indexOfFirstPost = indexOfLastPost - postPerPage;

	const currentPosts = news.slice(indexOfFirstPost, indexOfLastPost);

	const handleChangePage = (page) => {
		setCurrentPage(page);
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-lg-8 col-md-10 mx-auto">
					{currentPosts && currentPosts.map((post) => <PostCard post={post} />)}
					<Paginate
						currentPage={currentPage}
						news={news}
						handleChangePage={handleChangePage}
						pagesCount={pagesCount}
					/>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
