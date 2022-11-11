const Results=({results})=> {
  return (
    <div>{results.map((movie)=>{
        return(
            <>
            {movie.poster_path}
            </>
        )
    })
    }</div>
  )
}

export default Results