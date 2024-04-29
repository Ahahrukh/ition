import React from 'react'

const MovieCard = ({details}) => {
  return (
        <div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
        <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
            <img src={details.moviemainphotos[0]} alt="movie-picture" className='w-full' />
        </div>
        <div class="p-6 text-center">
            <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
             {details.movietitle}
            </h4>
        </div>
        <div class="flex justify-center p-6 pt-2 gap-7">
            Genars
            {details.moviegenres.map((elem)=>(
                <span class="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2">{elem}</span>
            ))}
        </div>
        </div>
  )
}

export default MovieCard