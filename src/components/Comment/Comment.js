import React from 'react';
import './Comment.css';

const Comment = ({ userName, userComment }) => {
    return (
        <div className='comment'>
            <div className='userName'>{userName}</div>
            <div className="user__comment">{userComment}</div>
        </div>
    )
};

export default Comment;