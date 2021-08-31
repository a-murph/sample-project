import { useState } from 'react';

const Toggle = () => {
  const [isOn, setIsOn] = useState(true)

  const handleClick = () => {
    setIsOn(!isOn);
  };

  const message = isOn ? 'ON' : 'OFF';
  return <button onClick={handleClick}>{message}</button>;
}

export default Toggle;
