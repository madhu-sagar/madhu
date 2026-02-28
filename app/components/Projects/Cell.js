import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Cell = ({ data }) => (
  <div className="project-card">
    <a href={data.link} className="project-card-link">
      <header>
        <h3>{data.title}</h3>
        {data.subtitle && <span className="subtitle">{data.subtitle}</span>}
        <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
      </header>
      <p className="desc">{data.desc}</p>
    </a>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
