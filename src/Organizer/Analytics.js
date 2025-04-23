import React from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import './Analytics.css';

const widgets = [
  'Ticket Sales',
  'Top 5 Participant Companies',
  'Top 5 Participant Designations',
  'Payment Methods Used',
  'Top 5 UTM Source Parameters',
  'Top 5 UTM Medium Parameters',
];

export default function Analytics() {
  return (
    <div className="analytics-page">
      {/* White content panel */}
      <section className="content">
        <div className="section-header">
          <h1 className="section-title">Analytics</h1>
          <div className="filter">
            <FilterListIcon className="filter-icon" />
            <span className="filter-text">Filter</span>
            <ExpandLessIcon className="filter-arrow" />
          </div>
        </div>

        <div className="card-grid">
          {widgets.map((title, i) => (
            <div key={i} className="card">
              <div className="card-title">{title}</div>
              <div className="card-placeholder">No data to display</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
