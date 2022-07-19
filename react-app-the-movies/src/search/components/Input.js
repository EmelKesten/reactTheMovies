import { useState } from "react";


const Input = () => {
    const [message, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);

    console.log('value is:', event.target.value);
  };
  return (
    <input
        className="form-control bg-yay"
        id="txt-input"
        placeholder="Search"
        aria-label="Search"
        onChange={handleChange}
        value={message}
    />
    );
}

export default Input;