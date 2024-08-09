function GifContainer({ gifs }) {
  // Logging the gifs prop and its type for debugging purposes
  console.log(gifs, typeof gifs);

  return (
      <ul>
          {/* 
          Mapping over the gifs array to render each GIF as a list item.
          The optional chaining (gifs?.map) ensures that the map function only runs if gifs is not null or undefined.
          */}
          {gifs?.map((gif) => (
              // Each list item must have a unique key prop, here it's using the gif's id
              <li key={gif.id}>
                  {/* Display additional information about the GIF if available */}
                  <p>{gif.information}</p>
                  {/* Render the GIF image using the fixed height URL from the Giphy API, with alt text as the GIF title */}
                  <img src={gif.images.fixed_height.url} alt={gif.title} />
              </li>
          ))}
      </ul>
  );
}

export default GifContainer; // Export the GifContainer component as the default export
