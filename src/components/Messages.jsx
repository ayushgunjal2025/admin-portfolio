import React from 'react';
import Card from './Card';

function Messages({ Message }) {
  return (
    <div className="messages-container">
      {Message.map((data) => (
        <Card key={data.id} {...data} />
      ))}
    </div>
  );
}

export default Messages;
