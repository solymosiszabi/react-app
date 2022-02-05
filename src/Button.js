import { useState } from "react";

const Button = () => {
  const [name, setName] = useState("Mario");
  const [age, setAge] = useState(25);

  const handleClick = () => {
    setName("Luigi");
    setAge(30);
  };

  return (
    <div className="button">
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Button;
