import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="bg-dark text-light">

      {/* Navbar */}
      <nav className="navbar navbar-dark bg-black px-4">
        <h3>Kinjal.dev</h3>
      </nav>

      {/* Hero Section */}
      <div className="container text-center py-5">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          👋 Hi, I'm Kinjal
        </motion.h1>

        <motion.h3
          className="text-info"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
        >
          React Developer
        </motion.h3>

        <p>I build modern web apps using React & APIs</p>

        <button className="btn btn-info m-2">Download Resume</button>
      </div>

      {/* Projects */}
      <div className="container py-4">
        <h2 className="text-center mb-4">Projects</h2>

        <div className="row">

          <motion.div
            className="col-md-4 container py-4"
            whileHover={{ scale: 1.05 }}
          >
            <div className="card bg-secondary text-light p-3">
              <h4>🚀 React App</h4>
              <p>Counter + Todo + Weather</p>
              <button className="btn btn-info m-1">Live</button>
              <button className="btn btn-light m-1">GitHub</button>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Skills */}
      <div className="container py-4 text-center">
        <h2>Skills</h2>
        <p className="text-info">
          React | JavaScript | HTML | CSS | API
        </p>
      </div>

      {/* Contact Form */}
      <div className="container py-4 text-center">
        <h2>Contact Me</h2>

        <form>
          <input className="form-control m-2" placeholder="Your Name" />
          <input className="form-control m-2" placeholder="Email" />
          <textarea className="form-control m-2" placeholder="Message" />
          <button className="btn btn-info">Send</button>
        </form>
      </div>

      {/* Footer */}
      <footer className="text-center p-3 bg-black">
        <p>© 2026 Kinjal | Built with React</p>
      </footer>

    </div>
  );
}
