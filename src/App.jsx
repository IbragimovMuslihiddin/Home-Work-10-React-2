import React, { useState } from 'react';
import Header from './components/pages/header/header';
import ToLog from './components/pages/toLoog/toLoog';
import Table from './components/pages/tables/tables';
import './index.css';


const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', city: 'New York', status: 'active' },
    { id: 2, name: 'Jane Doe', city: 'London', status: 'inactive' },
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [city, setCity] = useState('');
  const [status, setStatus] = useState('');
  const [isAddFormVisible, setAddFormVisible] = useState(false);
  const [isEditFormVisible, setEditFormVisible] = useState(false);
  const [currentEditId, setCurrentEditId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editCity, setEditCity] = useState('');
  const [editStatus, setEditStatus] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleCityChange = (city) => {
    setCity(city);
  };

  const handleStatusChange = (status) => {
    setStatus(status);
  };

  const filteredData = data.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (city ? item.city === city : true) &&
      (status ? item.status === status : true)
    );
  });

  const handleAddClick = () => {
    setAddFormVisible(!isAddFormVisible);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newItem = {
      id: data.length + 1,
      name: e.target.name.value,
      city: e.target.city.value,
      status: e.target.status.value,
    };
    setData([...data, newItem]);
    setAddFormVisible(false);
  };

  const handleEditClick = (id) => {
    const item = data.find((item) => item.id === id);
    setEditName(item.name);
    setEditCity(item.city);
    setEditStatus(item.status);
    setCurrentEditId(id);
    setEditFormVisible(true);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const updatedData = data.map((item) =>
      item.id === currentEditId
        ? { ...item, name: e.target.name.value, city: e.target.city.value, status: e.target.status.value }
        : item
    );
    setData(updatedData);
    setEditFormVisible(false);
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleStatusChangeAction = (id) => {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, status: item.status === 'active' ? 'inactive' : 'active' } : item
      )
    );
  };

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <Header toggleDarkMode={setDarkMode} onAddClick={handleAddClick} />

      {isAddFormVisible && (
  <div className="modal">
    <form onSubmit={handleAdd}>
      <input type="text" name="name" placeholder="Name" required />
      <input type="text" name="city" placeholder="City" required />
      <select name="status" required>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      <button type="submit">Add</button>
    <button onClick={() => setAddFormVisible(false)}>Close</button>
    </form>
  </div>
)}


      {isEditFormVisible && (
        <div className="modal">
          <form onSubmit={handleEdit}>
            <input type="text" name="name" value={editName} onChange={(e) => setEditName(e.target.value)} required />
            <input
              type="text"
              name="city"
              value={editCity}
              onChange={(e) => setEditCity(e.target.value)}
              required
            />
            <select name="status" value={editStatus} onChange={(e) => setEditStatus(e.target.value)} required>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <button type="submit">Edit</button>
          </form>
        </div>
      )}

      <ToLog
        onSearch={handleSearch}
        onCityChange={handleCityChange}
        onStatusChange={handleStatusChange}
        searchQuery={searchQuery}
        city={city}
        status={status}
      />

      <Table
        data={filteredData}
        onDelete={handleDelete}
        onEdit={handleEditClick}
        onStatusChange={handleStatusChangeAction}
      />
    </div>
  );
};

export default App;
