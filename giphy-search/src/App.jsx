import NavBar from "./components/NavBar"; // Importing the NavBar component
import GifContainer from "./components/GifContainer"; // Importing the GifContainer component to display GIFs
import GifSearch from "./components/GifSearch"; // Importing the GifSearch component for the search functionality
import { handleFetch } from "./utils"; // Importing the handleFetch utility function for API requests
import { useEffect, useState } from "react"; // Importing React hooks: useEffect for side effects and useState for state management
import API_KEY from "./config"; // Importing the API key from the config file

function App() {
  // State to store the fetched GIF data
  const [data, setData] = useState([]);
  // State to store any errors that occur during fetching
  const [error, setError] = useState("");

  // useEffect to fetch trending GIFs on component mount
  useEffect(() => {
    // Function to handle the fetching of GIFs
    const doFetch = async () => {
      // Calling the handleFetch function to get data from the Giphy API
      const [data, error] = await handleFetch(
        `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=3&rating=g`
      );
      // If data is successfully fetched, update the data state
      if (data) setData(data);
      // If an error occurs, update the error state
      if (error) setError(error.message);
    };
    doFetch(); // Trigger the fetch operation
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  // If an error occurs, render the error message
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      {/* Render the NavBar component with a black color and title "Giphy Search" */}
      <NavBar color="black" title="Giphy Search" />
      <div className="ui container">
        {/* Render the GifSearch component, passing setData as a prop for updating the data */}
        <GifSearch setData={setData} />
        <br />
        {/* Render the GifContainer component, passing the fetched GIFs as a prop */}
        <GifContainer gifs={data.data} />
      </div>
    </div>
  );
}

export default App; // Export the App component as the default export
