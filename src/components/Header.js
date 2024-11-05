import React from 'react';

const Header = ({ setGrouping, setOrdering }) => {
  return (
    <div className="header">
      <button>Display</button>
      <select onChange={(e) => setGrouping(e.target.value)}>
        <option value="status">Status</option>
        <option value="user">User</option>
        <option value="priority">Priority</option>
      </select>
      <select onChange={(e) => setOrdering(e.target.value)}>
        <option value="priority">Priority</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
};

export default Header;
