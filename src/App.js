import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddMovie from './screens/CreateMovie/AddMovie';
import Login from './screens/Login/Login';
import Home from './screens/Home/Home';
import MovieDetail from './screens/MovieDetail/MovieDetail';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header />
                <Home />
              </div>
            }
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/addMovie"
            element={<AddMovie />}
          />
          <Route
            path="/movieDetail"
            element={
              (<div>
                <Header />
                <MovieDetail />
              </div>)}
          />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
