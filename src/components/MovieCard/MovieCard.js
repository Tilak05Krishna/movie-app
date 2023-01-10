import React from 'react';
import './MovieCard.css';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ name, imageUrl, description }) => {
    const navigate = useNavigate();
    return (
        <div className="movie__card" onClick={() => navigate('/movieDetail', { state: { name, imageUrl, description } })}>
            <img src={imageUrl} alt={name} description={description} />
            <h3 className='movie__name'>{name}</h3>
            <div className="movie__description ellipsize">{description}</div>
        </div>
    )
};

export default MovieCard;