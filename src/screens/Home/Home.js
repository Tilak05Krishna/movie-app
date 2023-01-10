import React from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import './Home.css';

const movies = [
    { id: 1, name: 'Movie 1', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,', imageUrl: 'https://media.istockphoto.com/id/490736905/photo/meenakshi-hindu-temple-in-madurai-tamil-nadu-south-india.jpg?s=612x612&w=0&k=20&c=OlOLvdryIdkdyKcY9gRPsM1RZa5HiP6QBr2JVAIvPb0=' },
    { id: 2, name: 'Movie 2', description: 'description 2', imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' },
    { id: 3, name: 'Movie 3', description: 'description 3', imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' },
    { id: 4, name: 'Movie 4', description: 'description 4', imageUrl: 'https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg' },
    { id: 5, name: 'Movie 5', description: 'description 5', imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' },
    { id: 6, name: 'Movie 6', description: 'description 6', imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' },
];

const Home = () => {
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