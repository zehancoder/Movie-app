import React from 'react'
import Container from '../../common/Container'
import { useSelector } from 'react-redux'
function MoviesSection() {

    // get all movies from redux store
    const playingData = useSelector((state) => state.movies);
    console.log(playingData)
    // successfuly get data from redux store

  return (
    <div>
      <Container>
        <div>

        </div>
      </Container>
    </div>
  )
}

export default MoviesSection