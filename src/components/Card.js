
import React from 'react';

const Card = ({ ticket }) => {
  return (
    <div className="card">
      <h4>{ticket.title}</h4>
      <span className="tag">{ticket.status}</span> {/* Status tag */}
      <span className="priority">Priority: {ticket.priority}</span> {/* Priority information */}
      <span className="user">User: {ticket.user?.name || 'Unassigned'}</span> {/* User information */}
    </div>
  );
};

export default Card;
