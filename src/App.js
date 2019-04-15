import React, { useEffect, useState } from 'react';
import Safe from 'react-safe';
import { JSDOM } from 'jsdom';

import './App.css';

const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://groups.yahoo.com';


const fetchData = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    (async () => {
      const href = await fetch(`${BASE_URL}/neo/groups/nyc_sotw/conversations/topics`)
        .then(res => res.text())
        .then(text => {
          const dom = new JSDOM(text)

          return dom.window.document.querySelector('#yg-msg-list a.yg-msg-link').href;
        });

      const text = await fetch(`${BASE_URL}${href}`)
        .then(res => res.text())
        .then(text => {
          const dom = new JSDOM(text)

          console.log(dom)
          return dom.window.document.querySelector('.msg-content').innerHTML;
        })

      setData(text)
    })();
  }, []);

  return data;
}

const App = () => {

  const data = fetchData();

  return (
    <div className="app">
      <a href="/">Refresh</a>

      <br />
      <br />

      <Safe.div>{data}</Safe.div>

      {data && <p>
        All shows are sourced by Neddyo @ <a href="https://groups.yahoo.com/neo/groups/nyc_sotw/info">https://groups.yahoo.com/neo/groups/nyc_sotw/info</a>
      </p>}
    </div>
  );
}

export default App;
