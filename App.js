export default function App() {
  return (
    <div style={{ fontFamily: "Arial", textAlign: "center" }}>
      <h1>👋 Hi, I'm Kinjal</h1>
      <h2>React Developer</h2>

      {/* About */}
      <section>
        <h3>About Me</h3>
        <p>I build web apps using React, JavaScript and APIs.</p>
      </section>

      {/* Projects */}
      <section>
        <h3>Projects</h3>

        <div>
          <h4>🚀 React App</h4>
          <p>Counter + Todo + Weather App</p>
        </div>

      </section>

      {/* Skills */}
      <section>
        <h3>Skills</h3>
        <p>React | JavaScript | HTML | CSS</p>
      </section>

      {/* Contact */}
      <section>
        <h3>Contact</h3>
        <p>Email: kailash.gtu.it@email.com</p>
      </section>
    </div>
  );
}