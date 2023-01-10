import React, { useState } from "react";
import "./AddMovie.css";
import UploadImage from "../../components/UploadImage";

const AddMovie = () => {
  const [movieName, setMovieName] = useState("");
  const [description, setDescription] = useState("");

  const onMovieNameChange = (event) => {
    setMovieName(event.target.value);
  };

  const onDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div className="movie__details">
      <input
        type="text"
        className="input__text"
        value={movieName}
        onChange={(event) => onMovieNameChange(event.target.value)}
      />
      <input
        type="text"
        className="input__text"
        value={description}
        onChange={(event) => onDescriptionChange(event.target.value)}
      />
      <UploadImage />
      <UploadImage />
    </div>
  );
};

export default AddMovie;
