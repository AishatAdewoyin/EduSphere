import React, { useState, useEffect } from 'react';
import {
  collection,
  query,
  onSnapshot,
  orderBy,
  limit,
} from 'firebase/firestore';
import { db } from '../helpers/firebase';

function Listofrooms() {
  const [rooms, setRooms] = useState([]);
  const [limitValue, setLimitValue] = useState(5); // Default limit

  useEffect(() => {
    const roomsRef = collection(db, 'messages');
    const q = query(roomsRef, orderBy('createdAt', 'desc'), limit(limitValue));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const roomsList = [];
      snapshot.forEach((doc) => {
        roomsList.push({ ...doc.data(), id: doc.id });
      });
      setRooms(roomsList);
    });

    return () => unsubscribe();
  }, [limitValue]);

  return (
    <div className='px-8'>
      <form className='px-8 pt-6 pb-8 mb-4 w-full lg:w-5/12 bg-white p-5 font-mono rounded-lg mx-auto my-10'>
        <h3 className='py-6 text-2xl text-center'>Search for a Chat Room</h3>
        <div className='px-8'>
          <h3 className='py-6 text-2xl text-center'>Chat Rooms</h3>
          <label
            htmlFor='room_limit'
            className='block my-2 text-sm font-bold text-gray-700'
          >
            Number of rooms to display:
          </label>
          <input
            type='number'
            id='room_limit'
            value={limitValue}
            onChange={(e) =>
              setLimitValue(Math.min(5, Math.max(1, e.target.value)))
            }
            className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow focus:outline-none focus:shadow-outline'
          />
          <ul>
            {rooms.map((room) => (
              <li key={room.id} className='mb-4 p-4 border rounded shadow'>
                {room.name}
              </li>
            ))}
          </ul>
        </div>
        <div className='mb-4'>
          <label
            className='block my-2 text-sm font-bold text-gray-700'
            for='room_name'
          >
            Input Room Name
          </label>
          <input
            className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow focus:outline-none focus:shadow-outline'
            id='room_name'
            type='text'
            name='room_name'
            placeholder='Write a room name'
          />
        </div>
        <div className='my-6 text-center'>
          <button
            className='w-full px-4 py-2 font-bold text-black bg-[#00df9a] rounded-full hover:bg-[#47ffc5] focus:outline-none focus:shadow-outline'
            type='submit'
          >
            Enter a Room
          </button>
        </div>
      </form>
    </div>
  );
}

export default Listofrooms;
