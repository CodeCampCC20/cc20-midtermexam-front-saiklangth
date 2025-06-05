import React, { useEffect, useState } from 'react'
import MovieList from '../component/MovieList'

function Movies() {
  const [movies, setMovies] = useState([])

  // const FetchMovie = () => {
  //   fetch('https://www.themoviedb.org/api/V3/movies')
  //   .then(resp => resp.json())
  //   .then(data => setMovies(data))
  // }

  // useEffect(() => {
  //   FetchMovie()
  // },[])

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  )
}

export default Movies