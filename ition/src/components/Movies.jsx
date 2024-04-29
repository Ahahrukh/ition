import React from 'react'
import { useState , useEffect } from 'react'
import MovieCard from './MovieCard'
const Movies = () => {
    let [ movies , setMovies] = useState([])
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [filters, setFilters] = useState({
        language: '',
        country: '',
        genre: ''
    });
    useEffect(() => {
        fetchMovies()
    }, [])
    async function fetchMovies() {
        try {
            let jsondata = await fetch('http://localhost:8000/movies')
            let data = await jsondata.json()
            console.log(data)
            setMovies(data)
        } catch (error) {
            console.log(error.message)
        }
    }

  useEffect(() => {
    // Apply filters to movies when filter criteria change
    setFilteredMovies(movies.filter(movie => {
      return (
        (!filters.language || movie.movielanguages.includes(filters.language)) &&
        (!filters.country || movie.moviecountries.includes(filters.country)) &&
        (!filters.genre || movie.moviegenres.includes(filters.genre))
      );
    }));
  }, [filters , movies]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };
  return (
    <>
    <div className='flex gap-16 mx-2 my-4'>
        <select className='border rounded' name="language" value={filters.language} onChange={handleFilterChange}>
          <option value="">Select Language</option>
          <option value="english">English</option>
          <option value="spanish">Hindi</option>
          <option value="spanish">Punjabi</option>
          <option value="spanish">Marathi</option>
        </select>
        <select className='border rounded' name="country" value={filters.country} onChange={handleFilterChange}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="Australia">Australia</option>
          <option value="Canada">Canada</option>
          <option value="United States">United States</option>
          <option>United Kingdom</option>
          {/* Add more country options here */}
        </select>
        <select className='border rounded' name="genre" value={filters.genre} onChange={handleFilterChange}>
          <option value="">Select Genre</option>
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
          {/* Add more genre options here */}
        </select>
      </div>
    <div className='container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-2 gap-16 py-4 flex mx-auto h-full bg-gray-900'>
        {movies.map((elem)=>(
            <MovieCard details={elem}/>
        ))}
    </div>
    </>
  )
}

export default Movies