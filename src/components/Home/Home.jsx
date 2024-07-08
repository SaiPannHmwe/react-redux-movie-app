import { useState, useEffect } from "react";
import MovieApi from "../../api/MovieApi";
import { APIKey } from "../../api/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovie } from "../../store/Reducer";
import './Home.scss'
//components
import MovieList from "../MovieList/MovieList";

function Home() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      const searchKey = search ? search : "Thor";
      const res = await MovieApi.get(
        `?apikey=${APIKey}&s=${searchKey}&type=movie`
      );

      setTimeout(() => {
        dispatch(addMovie(res.data.Search));
      }, 500);
    };

    fetchMovie();
  }, [search]);
  return (
    <div>
      <h3 style={{ margin: "1rem 0" }}>Movies</h3>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <MovieList />
    </div>
  );
}

export default Home;
