import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEvent, editEvent, deleteEvent } from '../features/eventSlice';

const EventManager = () => {
  const events = useSelector((state) => state.events);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  return (
    <div>
      <h2>Event Management</h2>
      <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input placeholder="Description" value={desc} onChange={(e) => setDesc(e.target.value)} />
      <button onClick={() => { dispatch(addEvent({ title, desc })); setTitle(''); setDesc(''); }}>Add Event</button>

      <ul>
        {events.map((e) => (
          <li key={e.id}>
            <b>{e.title}</b>: {e.desc}
            <button onClick={() => dispatch(deleteEvent(e.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventManager;