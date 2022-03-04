import { useEffect, useState } from 'react';

import { Cards } from './componets/Card';
import Footer from './componets/Footer';
import Navbar from './componets/Navbar';

import api from './Service/api';

import './styled.scss'

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    api.get('books').then(({ data }) => {
      setData(data.data)
    })
    // eslint-disable-next-line 
  }, [])
  return (
    <>
      <title>Bibbble</title>
      <Navbar></Navbar>
      <div className='home'>
        {
          // eslint-disable-next-line
          data?.map(books =>
          (<Cards
            key={books.id}
            title={books.title}
            author = {books.author}
            srcImg={books.image}
            description={books.description}
            genre={books.genre}
            published={books.published}
          />)
          )}
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
