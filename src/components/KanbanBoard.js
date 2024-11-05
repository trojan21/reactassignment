import React from 'react';

const KanbanBoard = ({ tickets, grouping, ordering }) => {
  const groupTickets = (tickets, grouping) => {
    const grouped = {};

    if (Array.isArray(tickets)) {
      tickets.forEach((ticket) => {
        const key = ticket[grouping] || 'Ungrouped';
        if (!grouped[key]) grouped[key] = [];
        grouped[key].push(ticket);
      });
    }

    // Sort within each group if ordering is provided
    Object.keys(grouped).forEach((key) => {
      grouped[key].sort((a, b) => {
        if (ordering === 'priority') {
          return b.priority - a.priority; 
        }
        if (ordering === 'title') {
          return a.title.localeCompare(b.title); 
        }
        return 0;
      });
    });

    return grouped;
  };

  const groupedTickets = groupTickets(tickets, grouping);

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map((group) => (
        <div key={group} className="column">
          <h3>{group}</h3>
          {groupedTickets[group].map((ticket) => (
            <div key={ticket.id} className="ticket">
              <h4>{ticket.title}</h4>
              <p>Status: {ticket.status}</p>
              <p>Priority: {ticket.priority}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
