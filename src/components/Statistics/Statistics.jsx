import React from "react";
import PropTypes from "prop-types";
import css from './Statistics.module.css';
import color from '../utils/RandomColor';


export default function Statistics({ title, stats }) {
  return (<section className={css.statistics}>
  <h2 className={css.title}>{title}</h2>
    <ul className={css.stat_list}>
            {stats.map(({ id, label, percentage }) => 
            {
              return (<li key={id} className={css.item} style={{ backgroundColor: `${color()}` }}>
                <span className={css.label}>{label}</span>
                <span className={css.percentage}>{percentage}%</span>
            </li>)})}
  </ul>
</section> )
};

Statistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};