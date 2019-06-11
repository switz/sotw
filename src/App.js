import React, { useEffect, useState } from 'react';
import he from 'he';
import PullToRefresh from 'pulltorefreshjs';
import Sticky from 'react-stickynode';

import cheerio from 'cheerio';

import './App.css';

const monthDay = (date) => {
  if (!date) return '';

  return [date.getMonth(), date.getDate()].join(':');
};

const URL = 'https://20iikcfmr1.execute-api.us-east-1.amazonaws.com/default/sotw-dev-hello';

const fetchData = async ({ setLoading, setData }) => {
  setLoading(true);

  const finalStructure = await fetch(URL)
    .then(res => res.json())
    .then(json => json.items);

  setData(finalStructure);
  setLoading(false);
};

let initialState = [];

try {
  initialState = JSON.parse(localStorage.sotwData);
} catch (e) {
  console.log('could not parse localstorage', e);
}

const handleRefresh = ({ setLoading, setData }) => async (resolve) => {
  await fetchData({ setLoading, setData });

  resolve();
};

const App = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(initialState);

  const aDayAgo = new Date();

  aDayAgo.setTime(aDayAgo.getTime() - (4*60*60*1000) - (24*60*60*1000));

  useEffect(() => {
    PullToRefresh.init({
      mainElement: 'body',
      async onRefresh() {
        await fetchData({ setLoading, setData });

        return Promise.resolve();
      },
    });

    fetchData({ setLoading, setData });

    // this so is at 2 - 4 am it still displays the shows for the previous day
    const fourHoursAgo = new Date();

    fourHoursAgo.setTime(fourHoursAgo.getTime() - (4*60*60*1000));
    const $el = document.querySelector(`.day[data-date="${monthDay(fourHoursAgo)}"]`);

    $el && $el.scrollIntoView();
  }, []);

  return (
    <div className="app" data-is-loading={isLoading}>

      {data.filter(day => new Date(day.date) > aDayAgo).map(day =>
        <div key={day.line} className="day" data-date={monthDay(new Date(day.date))}>
          <Sticky enabled={true} top={0} innerZ={1}>
            <div className="day-title">{day.line} {day.shows.length} shows</div>
          </Sticky>

          {day.shows.map(show =>
            <div key={show.line} className="show" data-is-asterisked={show.isAsterisked}>
              <div className="band">{show.isAsterisked ? '* ' : ''}{show.band}</div>
              <div className="metadata">@{show.metadata}</div>
            </div>
          )}
        </div>
      )}

      <br />
      <br />
      <br />

      {data && <p>
        All shows are sourced by Neddyo @ <a href="https://groups.yahoo.com/neo/groups/nyc_sotw/info">https://groups.yahoo.com/neo/groups/nyc_sotw/info</a>
      </p>}

      <br />
      <br />

      <a href="">FORCE REFRESH</a>
      <br />
      <br />
      <br />
    </div>
  );
};

export default App;
