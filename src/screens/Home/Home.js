import React, { useEffect } from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import './Home.css';
import axios from '../../axios';
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies);

    const fetchMovies = async () => {
        try {
            const movies = await axios({
                method: 'GET',
                url: '/movies'
            });
            console.log(movies);
            for (const movie of movies.data) {
                console.log(movie);
                dispatch({ type: 'ADD_MOVIE', payload: movie })
            }
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <div className="home">
            <h1 className='home__title'>Movies</h1>
            <div className='movies__container'>
                {movies.map(movie => (
                    <MovieCard key={movie.id} name={movie.name} imageUrl={movie.imageUrl} description={movie.description} />
                ))}
            </div>
        </div>
    )
};

export default Home;