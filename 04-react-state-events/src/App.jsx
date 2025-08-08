import { useState } from "react";
import './App.css';
function Counter() {
  const [count, setCount] = useState(0);

  // event handler function
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  return (
    <div className="counter">
      <h2>🔢Counter</h2>
      <div className="counter-display">
        <span className="counter-number">{count}</span>
      </div>
      <div className="counter-buttons">
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
}

// Component 2: Text Input with state
function TextInput() {
  const [text, setText] = useState('');

  // Event handler for input change
  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  // event handler for button clear
  const handleClear = () => {
    setText('');
  };

  return (
    <div className="text-input">
      <h2>✏️ Text Input</h2>
      <div className="input-group">
        <input
          type="text"
          value={text}
          onChange={handleInputChange}
          placeholder="Type something..."
          className="text-field"
        />

        <button onClick={handleClear} className="clear-btn">
          Clear
        </button>

      </div>
      <div className="text-display">
        <p><strong>You typed:</strong> {text}</p>
        <p><strong>Character count:</strong> {text.length}</p>
      </div>
    </div>
  );
}
// Component 3: Toggle Switch với boolean state
function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);  // Boolean state

  const handleToggle = () => {
    setIsOn(!isOn);  // Toggle: true -> false, false -> true
  };

  return (
    <div className="toggle-switch">
      <h2>🔄 Toggle Switch</h2>

      <div className="switch-container">
        <div className={`switch ${isOn ? 'on' : 'off'}`} onClick={handleToggle}>
          <div className="switch-handle"></div>
        </div>
        <span className="switch-label">
          {isOn ? 'ON' : 'OFF'}
        </span>
      </div>

      <div className="status-display">
        <p><strong>Status:</strong> {isOn ? '✅ Enabled' : '❌ Disabled'}</p>
        <p><strong>Mode:</strong> {isOn ? 'Dark Mode' : 'Light Mode'}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <h1>Tutorial 5: State and Events</h1>
      <Counter />
      <TextInput />
      <ToggleSwitch />
    </div>
  );
}
export default App;