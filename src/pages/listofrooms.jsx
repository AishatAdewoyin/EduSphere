import React from 'react'

function Listofrooms() {
  return (
    <div className="px-8">
      <form className="px-8 pt-6 pb-8 mb-4 w-full lg:w-5/12 bg-white p-5 font-mono rounded-lg mx-auto my-10">
        <h3 className="py-6 text-2xl text-center">Search for a Chat Room</h3>
        <div className="mb-4">
          <label className="block my-2 text-sm font-bold text-gray-700" for="room_name">
            Input Room Name
          </label>
          <input
            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow focus:outline-none focus:shadow-outline"
            id="room_name"
            type="text"
            name='room_name'
            placeholder="Write a room name"
          />
        </div>
        <div className="my-6 text-center">
          <button
            className="w-full px-4 py-2 font-bold text-black bg-[#00df9a] rounded-full hover:bg-[#47ffc5] focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Search a Room
          </button>
        </div>
      </form>
    </div>
  );
}

export default Listofrooms