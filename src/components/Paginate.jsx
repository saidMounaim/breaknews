import React from 'react';

const Paginate = ({ handleChangePage, currentPage, news, pagesCount }) => {
	return (
		<div className="clearfix">
			{currentPage !== 1 && (
				<button className="btn btn-primary float-left" onClick={() => handleChangePage(currentPage - 1)}>
					&rarr; Newst Posts
				</button>
			)}
			{currentPage !== pagesCount && (
				<button className="btn btn-primary float-right" onClick={() => handleChangePage(currentPage + 1)}>
					Older Posts &rarr;
				</button>
			)}
		</div>
	);
};

export default Paginate;
