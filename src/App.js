import React, {useState, useEffect}  from 'react';
import './App.css';
import Phrase from './Phrase/Phrase';
import GitHubUser from './GitHubUser/GitHubUser';
import Checkbox from './Checkbox/Checkbox';
import Library from './Library/Library';

const lakeList = [
    "First lake",
    "Another lake",
    "The fire lake"
];

const bookList = [
  {'title': 'Fear', 'author': 'Thich Nhat Hanh'},
  {'title': 'The five love languages', 'author': 'Gary Chapman'}
];

function App() {
  const name = 'andrewstarlike';
  const [status, setStatus] = useState('Open');
  const [data, setData] = useState(null);

  useEffect(() => {
      fetch(`https://api.github.com/users/${name}`)
          .then(response => response.json())
          .then(setData)
          .catch(console.error);
  }, [data]);

  return (
    <>
        <Phrase />
        if(data) {
            <GitHubUser data={data} />
        }
        <p>Status {status}</p>
        <button onClick=
                    {
                        () => setStatus('Closed')
                    }
        >
            Closed
        </button>
        <ul>
            {
                lakeList.map((lake, i) => (
                    <li key={i}>{lake}</li>
                ))
            }
        </ul>
        <Checkbox />
        <Library books={bookList} />
    </>
  );
}

export default App;
