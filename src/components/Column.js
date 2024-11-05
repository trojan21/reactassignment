import React from 'react';
import Ticket from './Ticket';

const Column = ({ title, tickets, ordering }) => {
  console.log('Tickets in Column:', tickets); 
  const sortedTickets = [...tickets].sort((a, b) => {
    if (ordering === 'priority') {
      return b.priority - a.priority; // Descending order by priority
    } else if (ordering === 'title') {
      return a.title.localeCompare(b.title); // Ascending order by title
    }
    return 0;
  });

  return (
    <div className="column">
      <h3>{title}</h3>
      {sortedTickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default Column;
