import React, { useState } from 'react';
import './AddMovie.css';
import axios from '../../axios';
import { useDispatch } from 'react-redux';

const AddMovie = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleFileChange = (event) => {
    setFile(URL.createObjectURL(event.target.files[0]));
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const movie = {
      name,
      description,
      thumbnail: "https://i.ytimg.com/vi/vqu4z34wENw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLClFFjVnq8euu3-GRKUTlNBBBVpAQ",
      video: "https://www.youtube.com/watch?v=vqu4z34wENw"
    };
    try {
      await axios({
        method: 'POST',
        url: '/addMovie',
        data: movie,
        headers: {
          'Authorization': `bearer ${localStorage.getItem('token')}`
        }
      });
      dispatch({ type: "ADD_MOVIE", payload: movie })
      setName('');
      setDescription('');
      setMessage('Movie details registered successfully.');
    } catch (e) {
      console.log(`Error: ${e}`);
    }
  };

  const [file, setFile] = useState(null);
  console.log(file);
  return (
    <div className='addMovie__container'>
      <h1>Add Movie</h1>
      <div className='movieDetails__container'>
        <p className="message">{message}</p>
        <form>
          <h5>Enter Name</h5>
          <input type="text" value={name} onChange={handleNameChange} />
          <h5>Enter Description</h5>
          <input type="text" value={description} onChange={handleDescriptionChange} />
          <h5>Upload Thumbnail</h5>
          <input type="file" name="myImage" accept="image/*" onChange={handleFileChange} />
          <h5>Upload Trailer</h5>
          <input type='file' accept='video/*' onChange={handleFileChange} />
          <button className="submit__button" onClick={handleSubmit} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddMovie;
