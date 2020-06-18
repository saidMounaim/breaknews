import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import PostDetails from '../pages/PostDetails';

const PostCard = ({ post }) => {
	const dateFormat = (str) => {
		return moment(str).fromNow();
	};

	return (
		<React.Fragment>
			<div className="post-preview" key={post.id}>
				<a data-toggle="modal" data-target={`#m_${post.id}`}>
					<h2 className="post-title">{post.title}</h2>
				</a>
				<p className="post-meta">
					{post.category.length > 0 && <>Category : </>}
					{post.category.length > 0 &&
						post.category.map((cat) => (
							<>
								<Link key={cat} to={`/category/${cat}`}>
									{cat}
								</Link>{' '}
							</>
						))}
					Posted by
					{post.author} on {dateFormat(post.published)}
				</p>
			</div>
			<PostDetails post={post} />
			<hr />
		</React.Fragment>
	);
};

export default PostCard;
