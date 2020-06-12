import React, {useState}  from 'react';
import './App.css';
import Phrase from '../Phrase/Phrase';
import GitHubUser from '../GitHubUser/GitHubUser';
import Checkbox from '../Checkbox/Checkbox';

function App({lakeList}) {
  const [status, setStatus] = useState('Open');
  return (
    <>
        <Phrase />
        <GitHubUser name="andrewstarlike" />
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
    </>
  );
}

export default App;
