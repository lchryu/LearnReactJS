import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function Welcome() {
  return <h1>Welcome to React</h1>
}

// Component with logic
function AboutMe() {
  const name = "John";
  const age = 25;

  return (
    <div>
      <h1>About Me</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}
function App() {
  return (
    <div>
      <Welcome />
      <AboutMe />
    </div>
  );
}

export default App
