import React from 'react';

const ToLog = ({ onSearch, onCityChange, onStatusChange, searchQuery, city, status }) => {
  return (
    <div>
      <select className='selectOne' onChange={(e) => onCityChange(e.target.value)} value={city}>
        <option value="">Select City</option>
        <option value="New York">New York</option>
        <option value="London">London</option>
        <option value="Dubai">Dubai</option>
      </select>
      <select className='selectTwo' onChange={(e) => onStatusChange(e.target.value)} value={status}>
        <option value="">Select Status</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      <input className='searchOne' type="text" placeholder="Search..." value={searchQuery} onChange={(e) => onSearch(e.target.value)}/>
    </div>
  );
};

export default ToLog;
