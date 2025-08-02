function App() {
  const myName = 'John';
  const myAge = 25;
  return (
    <div>
      <h1>Hell {myName}!</h1>
      <p>Next year: {myAge + 1}</p>

      <p>Adult: {myAge >= 18 ? "Yes" : "No"}</p>

      <p style={{
        color: 'red',
        fontSize: '24px',
        backgroundColor: 'lightgray'
      }}>Styled text</p>
    </div>
  );
}
export default App;