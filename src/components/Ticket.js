import React from 'react';

const Ticket = ({ ticket }) => {
  return (
    <div className="ticket">
      <h4>{ticket.title}</h4>
      <p>Status: {ticket.status}</p>
      <p>Priority: {ticket.priority}</p>
      <p>Assigned User: {ticket.user}</p>
    </div>
  );
};

export default Ticket;
