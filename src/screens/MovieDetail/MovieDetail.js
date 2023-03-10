import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './MovieDetail.css';
import Comment from '../../components/Comment/Comment';
import axios from '../../axios';

const MovieDetail = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const comments = useSelector((state) => state.comments);
    const { state } = useLocation();
    const { name, description, imageUrl } = state;
    const [comment, setComment] = useState('');
    console.log(name);
    console.log(description);
    console.log(imageUrl);

    const handleTextChange = (event) => {
        setComment(event.target.value);
    };

    const handleCommentAdded = async () => {
        setComment('');
        dispatch({
            type: 'ADD_COMMENT', payload: {
                userName: user[0].email,
                userComment: comment
            }
        });
        await axios({
            method: 'POST',
            url: '/movie/{id}/addComment',
            data: {
                userComment: comment
            }
        });
    };

    return (
        <div className="movie__detail">
            <div className="movie__detail_container">
                <ReactPlayer className="movie_detail_trailer" url="https://www.youtube.com/watch?v=d9MyW72ELq0" width="100%" height="600px" controls={true} />
                <h2>{name}</h2>
                <h3>Description</h3>
                <div className="description">
                    {description}
                </div>
                <div className="comments__container">
                    <h3 className="total_count">{comments.length} Comments</h3>
                    <div className="add_comment_container" >
                        <textarea className="add_comment" rows="3" value={comment} placeholder="Add a comment..." onChange={handleTextChange} />
                        <button className="comment__button" onClick={handleCommentAdded} type="submit">
                            Comment
                        </button>
                    </div>
                    <div className="all_comments">
                        {comments.map(comment => (<Comment userName={comment.userName} userComment={comment.userComment} />))}
                    </div>
                </div>
            </div>
        </div >
    )
};

export default MovieDetail;