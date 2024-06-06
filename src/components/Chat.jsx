import React, { useState, useEffect } from 'react';
import {
  collection,
  addDoc,
  where,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from 'firebase/firestore';
import { db, auth } from '../helpers/firebase';

const Chat = ({ room }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesRef = collection(db, 'messages');

  useEffect(() => {
    const queryMessages = query(
      messagesRef,
      where('room', '==', room),
      orderBy('createdAt')
    );
    const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      console.log('New message')
      console.log(messages);
      setMessages(messages);
    });

    return () => unsuscribe();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (newMessage === '') return;
    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName || auth.currentUser.email,
      userId: auth?.currentUser.uid,
      room,
    });

    setNewMessage('');
  };

  return (
    <>
      <div className='flex h-screen flex-col bg-purple-700'>
        <div className=''>
          <h1 className='text-center text-2xl font-bold bg-white text-red-400'>
            {room} Chat - EduSphere
          </h1>
        </div>
        <div className='flex-grow overflow-y-auto'>
          <div className='flex flex-col space-y-2 p-4'>
            {messages.map((message) => (
              <div
                key={message.userId}
                className={`flex items-center py-2 px-3 rounded-xl ${
                  message.user === auth.currentUser.displayName ||
                  message.user === auth.currentUser.email
                    ? 'self-end bg-green-400 text-white rounded-tr'
                    : 'self-start bg-gray-200'
                }`}
              >
                <p>{message.text}</p> <p className='text-xs'>{message.user}</p>
              </div>
            ))}
          </div>
        </div>
        <form className='flex items-center p-4' onSubmit={handleSubmit}>
          <input
            type='text'
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder='Type your message...'
            className='w-full rounded-lg border border-gray-300 px-4 py-2'
          />
          <button
            type='submit'
            className='ml-2 rounded-lg bg-green-400 px-4 py-2 text-white'
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default Chat;
