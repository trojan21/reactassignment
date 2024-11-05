import React, { useEffect, useState } from 'react';
import KanbanBoard from './components/KanbanBoard';
import './styles.css';

const App = () => {
  const [data, setData] = useState(null);
  const [grouping, setGrouping] = useState('status'); // Default grouping by 'status'
  const [ordering, setOrdering] = useState('priority'); // Default ordering by 'priority'

  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  if (!data) return <div>Loading...</div>;

  const handleGroupingChange = (event) => {
    setGrouping(event.target.value);
  };

  const handleOrderingChange = (event) => {
    setOrdering(event.target.value);
  };

  return (
    <div>
      <div className="header">
        <label>
          Group By:
          <select value={grouping} onChange={handleGroupingChange}>
            <option value="status">Status</option>
            <option value="userId">User</option>
            <option value="priority">Priority</option>
          </select>
        </label>

        <label>
          Order By:
          <select value={ordering} onChange={handleOrderingChange}>
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </label>
      </div>

      <KanbanBoard tickets={data.tickets} grouping={grouping} ordering={ordering} />
    </div>
  );
};

export default App;
