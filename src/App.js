import React, { useEffect, useState } from 'react';
import he from 'he';
import PullToRefresh from 'pulltorefreshjs';

import cheerio from 'cheerio';

import './App.css';

const monthDay = (date) => {
  if (!date) return '';

  return [date.getMonth(), date.getDate()].join(':');
}

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
            /:$/.test(line) ? `\n${line}` : line
          ).join('\n')
    );

  const finalStructure = [];
  let currentDay;

  console.log('text', text);
  text.split('\n')
    .forEach(line => {
      if (!line) return;

      if (/Nedar:$/.test(line)) {
        if (currentDay) finalStructure.push(currentDay);

        currentDay = { shows: [], line };
      }
      else if (/\):$/.test(line)) {
        if (currentDay) finalStructure.push(currentDay);

        const [f, dateStr] = line.match(/\((.+)\)/);
        const date = new Date(dateStr + '/' + new Date().getFullYear());
        currentDay = { shows: [], line, date };
      }

      if (/@/.test(line) && currentDay) {
        const [m, isAsterisked, band, metadata] = line.match(/(\*)?(.+)@(.+)/);

        const currentShow = {
          line,
          isAsterisked: !!isAsterisked,
          band,
          metadata,
        };
        currentDay.shows.push(currentShow);
      }
    });

  if (currentDay) {
    finalStructure.push(currentDay);
  }

  localStorage.sotwData = JSON.stringify(finalStructure);
  setData(finalStructure);
  setLoading(false);
}

let initialState = [];

try {
  initialState = JSON.parse(localStorage.sotwData);
} catch (e) {
  console.log('could not parse localstorage', e);
}

const handleRefresh = ({ setLoading, setData }) => async (resolve) => {
  await fetchData({ setLoading, setData });

  resolve();
}

const App = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(initialState);

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

    fourHoursAgo.setTime(fourHoursAgo.getTime() - (4*60*60*1000))
    const $el = document.querySelector(`.day[data-date="${monthDay(fourHoursAgo)}"]`)

    $el && $el.scrollIntoView();
  }, []);

  return (
    <div className="app" data-is-loading={isLoading}>

      {data.map(day =>
        <div key={day.line} className="day" data-date={monthDay(new Date(day.date))}>
          <div class="day-title">{day.line} {day.shows.length} shows</div>

          {day.shows.map(show =>
            <div key={show.line} className="show" data-is-asterisked={show.isAsterisked}>
              <div className="band">{show.isAsterisked ? '* ' : ''}{show.band}</div>
              <div className="metadata">@{show.metadata}</div>
            </div>
          )}
        </div>
      )}

      {data && <p>
        All shows are sourced by Neddyo @ <a href="https://groups.yahoo.com/neo/groups/nyc_sotw/info">https://groups.yahoo.com/neo/groups/nyc_sotw/info</a>
      </p>}

      <a href="">FORCE REFRESH</a>
    </div>
  );
}

export default App;
