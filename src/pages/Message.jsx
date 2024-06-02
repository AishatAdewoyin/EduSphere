import React from 'react';
import Chat from '../components/Chat';

const Message = () => {
  return (
    <>
    {room ? 
     (<Chat room={room} />): }
    </>
  );
};

export default Message;
