

function Header() {
  return (
    <header>
      <h1>
        🎯 My Personal Website
      </h1>
      <p>
        Learning React step by step
      </p>
    </header>
  );
}
function AboutMe() {
  const myName = "Luong Chung Hoi";
  const myAge = 18;
  const myJob = "Student";

  return (
    <section>
      <hr />
      <h2>👤 About Me</h2>
      <p>Name: {myName}</p>
      <p>Age: {myAge} years old</p>
      <p>Job: {myJob}</p>
      <p>Next year I'll be: {myAge + 1}</p>
    </section>
  );
}
function Skills() {
  return (
    <section>
      <hr />
      <h2>💪 My Skills</h2>
      <ul>
        <li>HTML & CSS</li>
        <li>JavaScript</li>
        <li>React (learning)</li>
        <li>Problem Solving</li>
      </ul>
    </section>
  );
}
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <hr />
      <p>© {currentYear} - My Personal Website</p>
      <p>Built with React & Vite</p>
    </footer>
  );
}
function App() {
  return (
    <div className="app">
      <Header />
      <AboutMe />
      <Skills />
      <Footer />
      <hr />
      <h1>Hello   World!</h1>
      <p>Tutorial 3: Multiple Components</p>
      <p>Tai sao khong co tac dung gi nhi</p>
    </div>
  );
}
export default App
