import React, { useEffect, useState } from 'react';
import ReactPullToRefresh from 'react-pull-to-refresh';
import he from 'he';
import Safe from 'react-safe';
import sanitizeHtml from 'sanitize-html';

import cheerio from 'cheerio';

import './App.css';

const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://groups.yahoo.com';

const fetchData = async ({ setLoading, setData }) => {
  setLoading(true);

  const href = await fetch(`${BASE_URL}/neo/groups/nyc_sotw/conversations/topics`)
    .then(res => res.text())
    .then(text => {
      const $ = cheerio.load(text)

      return $('#yg-msg-list a.yg-msg-link').attr('href');
    });

  const text = await fetch(`${BASE_URL}${href}`)
    .then(res => res.text())
    .then(text => {
      const $ = cheerio.load(text);

      return $('.msg-content').html().replace(/<(?:\/?(span|a)).*?>/gm, '').replace(/<(?:.|\n)*?>/gm, '\n').replace(/\n+/g, '\n');
    })
    .then(text => he.decode(text))
    .then(text =>
      text.split('\n')
          .map(line =>
            /\:$/.test(line) ? `\n${line}` : line
          ).join('\n')
    );

  localStorage.sotwData = text;
  setData(text)
  setLoading(false);
}

const handleRefresh = ({ setLoading, setData }) => async (resolve) => {
  await fetchData({ setLoading, setData });

  resolve();
}

const App = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(localStorage.sotwData || '');

  useEffect(() => {
    fetchData({ setLoading, setData });
  }, []);

  return (
    <ReactPullToRefresh
      onRefresh={handleRefresh({ setLoading, setData })}
    >
      <div className="app" data-is-loading={isLoading}>
        <pre>{data}</pre>

        {data && <p>
          All shows are sourced by Neddyo @ <a href="https://groups.yahoo.com/neo/groups/nyc_sotw/info">https://groups.yahoo.com/neo/groups/nyc_sotw/info</a>
        </p>}
      </div>
    </ReactPullToRefresh>
  );
}

export default App;
