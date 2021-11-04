import React, { useState } from 'react';

export default function Button() {
  /*declaration: [<value>, <function>] and initialisation with 0*/
  const [counter, setCounter] = useState(0);

  function incCounter() {
    console.log('Button was clicked!');
    setCounter(counter + 1);
  }

  const decCounter = () => {
    console.log('Button was clicked!');
    setCounter(counter - 1);
  };
  function HelloName(props) {
    return <div>Hello {props.name}</div>;
  }
  const [fieldValue, setFieldValue] = useState('');
  function handleChange(event) {
    setFieldValue(event.target.value);
    console.log(event.target.value);
  }
  return (
    <div>
      <h1>
        <HelloName name="Ryan" />
      </h1>
      <input type="button" onClick={incCounter} value="inc counter" />
      <input type="button" onClick={decCounter} value="inc counter" />
      <p>You clicked {counter} times</p>
      <form>
        <label>
          Name
          <input
            type="text"
            value={fieldValue}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
