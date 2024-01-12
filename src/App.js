import axios from 'axios';
import './App.css';
import SearchHeader from './SearchHeader';

function App() {

  const searchImages = (term) => {
   axios.get('https://api.unsplash.com/search/photos',{
    headers:{
      Authorization:'Client-ID EIvUT-KQ9KDonDy6QP4QZnLrMOeSQgA2g093N0uwme0'
    }
   })
      };

  const handleSubmit = (term) => {
    console.log(term);
searchImages(term);

  };

  return (
    <div className="App">
     <SearchHeader search={handleSubmit}/>
    </div>
  );
}

export default App;
