// Component 1: Greeting (keep as is)
function Greeting(props) {
  return (
    <div className="greeting-card">
      <h2>Hello, {props.name}! 👋</h2>
      <p>You are {props.age} years old</p>
      <p>Your hobby is {props.hobby}</p>
      <p>Status: {props.isStudent ? "Student" : "Working"}</p>
    </div>
  );
}

// Component 2: User Card with multiple props
function UserCard(props) {
  return (
    <div className="user-card">
      <div className="user-header">
        <h3>{props.name}</h3>
        <span className="user-age">{props.age} years old</span>
      </div>

      <div className="user-info">
        <p><strong>Job:</strong> {props.job}</p>
        <p><strong>Location:</strong> {props.location}</p>
        <p><strong>Email:</strong> {props.email}</p>
        <p><strong>Skills:</strong> {props.skills}</p>
      </div>

      <div className="user-stats">
        <span>Experience: {props.experience} years</span>
        <span>Projects: {props.projects}</span>
      </div>
    </div>
  );
}

// Main App
function App() {
  return (
    <div className="app">
      <h1>🎯 Tutorial 4: Props</h1>

      <h2>Simple Greetings</h2>
      <Greeting
        name="John"
        age={25}
        hobby="Gaming"
        isStudent={true}
      />

      <h2>Detailed User Cards</h2>
      <UserCard
        name="Sarah Wilson"
        age={28}
        job="Frontend Developer"
        location="San Francisco, CA"
        email="sarah@email.com"
        skills="React, JavaScript, CSS"
        experience={5}
        projects={15}
      />

      <UserCard
        name="Mike Johnson"
        age={32}
        job="UI/UX Designer"
        location="New York, NY"
        email="mike@email.com"
        skills="Figma, Photoshop, HTML"
        experience={8}
        projects={25}
      />
    </div>
  );
}

export default App;