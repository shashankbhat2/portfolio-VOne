import React from 'react';
import Bhat from './bhat.svg'
import './index.css'
const App = () =>  {
  return (
    <div className="main">
      <img src={Bhat} alt="logo"></img>
      <h1>
       Hello <span role="img" description="hand-wave" aria-label="hand">👋</span>,
      </h1>
      <h2>
      Shashank Bhat here!
      </h2>
      <br></br>
      <h3>
      Learning Javascript and React <span role="img" description="heart" aria-label="heart">❤️</span>
      </h3>
      <h4>
      Studying Bachelor of Computer Applications at PESU,Bangalore <span role="img" description="books" aria-label="books">📚</span>
      </h4>
      <br/>
      <h4>I design and build sites when free.</h4>
      <div className="social">
        <br/>
        <a href="https://github.com/shashankbhat2"  rel="noopener noreferrer"  target="_blank">
        Github
        </a>
        <a href="https://www.linkedin.com/in/shashank-bhat-1b9a89163/"  rel="noopener noreferrer"  target="_blank">
        Linkedin
        </a>
        <a href="https://www.instagram.com/bhat.exe/"  rel="noopener noreferrer"  target="_blank">
        Instagram
        </a>
      </div>
      <h6 className="version">version 1.0</h6>
    </div>
  );
}

export default App;
