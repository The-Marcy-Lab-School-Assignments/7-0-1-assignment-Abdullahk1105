import { handleFetch } from "../utils"; // Importing the handleFetch utility function for API requests
import { useEffect, useState } from "react"; // Importing React hooks: useState for state management
import API_KEY from "../config"; // Importing the API key from the config file

function GifSearch({ setData }) {
    // State to store any errors that occur during fetching
    const [error, setError] = useState('');
    // State to store the user's search query
    const [query, setInputValue] = useState("");

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevents the default form submission behavior

        // Fetch GIFs based on the user's search query
        const [data, error] = await handleFetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=3&rating=g`);

        // Logging the fetched data for debugging purposes
        console.log(data);

        // If data is successfully fetched, update the data state passed from the parent component
        if (data) setData(data);
        // If an error occurs, update the error state
        if (error) setError(error.message);

        // If an error occurs, render the error message (this may not work as intended here since it's within the submit function)
        if (error) return <p>{error.message}</p>;
    };

    return (
        <form>
            {/* Label for the search input field */}
            <label htmlFor="searchInput">Enter a Search Term </label>
            {/* Input field for the search query, with its value tied to the query state */}
            <input
                type="text"
                className="form-control"
                id="searchInput"
                value={query}
                onChange={(e) => setInputValue(e.target.value)} // Update the query state when the input value changes
            />
            {/* Button to submit the search form, triggering the handleSubmit function */}
            <button
                type="submit"
                className="btn btn-success"
                onClick={handleSubmit}
            >
                Search
            </button>
        </form>
    );
}

export default GifSearch; // Export the GifSearch component as the default export

