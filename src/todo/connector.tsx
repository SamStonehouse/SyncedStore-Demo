import React, { useContext, useState } from 'react';
import { StoreContext } from '../store/store-context';

const Connector = (): JSX.Element => {
  const { connect } = useContext(StoreContext);
  const [roomName, setRoomName] = useState<string>('room');
  const [roomPassword, setRoomPassword] = useState<string>('');

  return (
    <div>
      <label>
        Room Name <input type="text" value={roomName} onChange={e => setRoomName(e.target.value)} />
      </label>
      <label>
        Password <input type="text" value={roomPassword} onChange={e => setRoomPassword(e.target.value)} />
      </label>
      <button onClick={() => connect(roomName, roomPassword)}>Connect</button>
    </div>
  );
};

export default Connector;
