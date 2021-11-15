import React, { memo, useState } from "react";

const Diffing: React.FC = () => {
  const [message, setMessage] = useState({
    name: "alx",
  });

  const [count, setCount] = useState(0);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setMessage({
      ...message,
      name: e.target.value,
    });
  };

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>Diffing</h1>
      <input onChange={handleInput} value={message.name} />
      <Tile message={message.name} />
      <Tile message={undefined} />
      <button onClick={increaseCount}>click me</button>
      {count}
    </div>
  );
};

const Tile = memo(({ message }: { message: string | undefined }) => {
  console.log("I rerenderdd");
  return <div>{message}</div>;
});

export default Diffing;
