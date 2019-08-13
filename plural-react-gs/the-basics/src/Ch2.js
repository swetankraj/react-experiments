import React, { useState } from "react";

// Part a of the app.
function PartA() {
  const [counter, setCounter] = useState(10);
  const handleClick = () => setCounter(counter + 1);
  return (
    <div>
      <p>
        <p>a. Incrementer Button</p>
      </p>
      <button onClick={handleClick}>{counter}</button>
    </div>
  );
}

// Part b of the app.
function PartBDisp(props) {
  return (
    <div>
      <p>{props.message}</p>
    </div>
  );
}

function PartBButt(props) {
  return <button onClick={props.update}>+1</button>;
}

function PartB() {
  const [counter, setCounter] = useState(10);
  const handleClick = () => setCounter(counter + 1);
  return (
    <div>
      <p>b. View Incrementer Button</p>
      <PartBDisp message={counter} />
      <PartBButt update={handleClick} />
    </div>
  );
}

// Part c of the app.
function PartCDisp(props) {
  return <p>{props.message}</p>;
}

function PartCBut(props) {
  const handleIncrement = () => props.update(props.value);
  return <button onClick={handleIncrement}>+{props.value}</button>;
}
function PartC() {
  const [counter, setCounter] = useState(10);
  const handleClick = newUpdate => setCounter(counter + newUpdate);
  return (
    <div>
      <p>c. Component Reusability</p>
      <PartCDisp message={counter} />
      <PartCBut update={handleClick} value={1} />
      <PartCBut update={handleClick} value={5} />
      <PartCBut update={handleClick} value={10} />
      <PartCBut update={handleClick} value={100} />
    </div>
  );
}

//Global app.
function Ch2() {
  return (
    <div>
      <h2>Chapter 2: The Basics</h2>
      <PartA />
      <PartB />
      <PartC />
    </div>
  );
}

export default Ch2;
