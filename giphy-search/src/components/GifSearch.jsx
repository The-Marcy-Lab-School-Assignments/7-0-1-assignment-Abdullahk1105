import { handleFetch } from "../utils";
import { useEffect, useState } from "react";
import API_KEY from "../config";



function GifSearch( {setData} ) {
    // const [data, setGif] = useState([]);
    const [error, setError] = useState('')
    const [query, setInputValue] = useState("");
  
const handleSubmit = async (e) => {
    e.preventDefault();
    // The inputValue state is already updated via onChange
          const [data, error] = await handleFetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=3&rating=g`);

          console.log(data)
          if (data) setData(data);
          if (error) setError(error.message);
        
      // code to render the data or the error
      if (error) return <p>{error.message}</p>
};

// console.log(query)

    return (
        <form>
            <label htmlFor="searchInput">Enter a Search Term </label>
            <input type="text" className="form-control" id="searchInput" value={query} onChange={(e) => setInputValue(e.target.value)}/>
            <button type="submit" className="btn btn-success" onClick={handleSubmit}>Search</button>
        </form>
    )
}

export default GifSearch
