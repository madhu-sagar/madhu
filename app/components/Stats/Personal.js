import React, { Fragment, useState, useEffect } from 'react';

import Table from './Table';
import personalData from '../../data/stats';

const PersonalStats = () => {
  const [data, setData] = useState(personalData);

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const startTime = new Date('2006-06-01T09:24:00');
    setData(Object.assign({}, data, {
      age: {
        label: 'Age',
        value: ((Date.now() - startTime) / divisor).toFixed(11),
      },
    }));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => { clearInterval(timer); };
  }, []);

  return (
    <Fragment>
      <h3>Some stats about me</h3>
      <Table data={Object.keys(data).map(key => data[key])} />
    </Fragment>
  );
};

export default PersonalStats;
