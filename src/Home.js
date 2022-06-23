import logo from './sauces-svgrepo-com.svg';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The making of a fantastic career comences
          {/* not an app <code>src/App.js</code> and save to reload. */}
        </p>
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redirect to the same page
        </a>
      </header>
      <body>
        <p className="body">
          And I sing to myself
        </p>
      </body>
    </div>
  );
}
export default Home;