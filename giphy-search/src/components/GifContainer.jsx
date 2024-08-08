function GifContainer({ gifs }) {
    console.log(gifs, typeof gifs)
    return (
        <ul>
          {gifs?.map((gif) => (
              <li key={gif.id}>
                <p>{gif.information}</p>
                <img src={gif.images.fixed_height.url} alt={gif.title} />
              </li>
            ))
          }
        </ul>
      )
}

export default GifContainer
