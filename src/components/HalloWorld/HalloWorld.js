export default function HelloWorld() {
  function myButtonHandler() {
    console.log('Button was clicked!');
  }

  return (
    <div>
      <button onClick={myButtonHandler}>klick mich</button>
    </div>
  );
}
