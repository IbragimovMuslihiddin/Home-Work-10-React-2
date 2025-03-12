import React from 'react';

const Table = ({ data, onDelete, onEdit, onStatusChange }) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>City</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.city}</td>
            <td>
  <span className={item.status === "active" ? "active" : "inactive"}>
    {item.status}
  </span>
</td>

            <td>
              <button className='btnEdit' onClick={() => onEdit(item.id)}>Edit</button>
              <button className='btnDelete' onClick={() => onDelete(item.id)}>Delete</button>
              <button className='btnCheck' onClick={() => onStatusChange(item.id)}>{item.status === 'active' ? 'Check' : 'Check'}</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
