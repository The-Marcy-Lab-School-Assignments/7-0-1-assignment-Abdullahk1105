import NavBar from './components/NavBar'
import GifContainer from './components/GifContainer'
import GifSearch from './components/GifSearch'
import { handleFetch } from './utils';
import { useEffect, useState } from 'react';
import API_KEY from './config'


function App() {
  
    const [data, setData] = useState([]);
    const [error, setError] = useState('')
  
    useEffect(() => {
      const doFetch = async () => {
        const [data, error] = await handleFetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=3&rating=g`);
        if (data) setData(data);
        if (error) setError(error.message);
      }
      doFetch();
    }, []); // empty array will run only once
  
    // code to render the data or the error
    if (error) return <p>{error.message}</p>
  
  return (
    <div>
      <NavBar color='black' title="Giphy Search" />
      <div className="ui container">
        <GifSearch setData={setData}/>
        <br />
        <GifContainer gifs ={data.data}/>
      </div>
    </div>
  );
}

export default App;
