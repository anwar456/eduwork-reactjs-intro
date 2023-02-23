import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Tugas React JS Intro</h2>
        <table className="table">
          <tr>
            <td>Nama</td>
            <td></td>
            <td>:</td>
            <td></td>
            <td>Anwar</td>
          </tr>
          <tr>
            <td>Kelas</td>
            <td></td>
            <td>:</td>
            <td></td>
            <td>MERN</td>
          </tr>
          <tr>
            <td>Mentor</td>
            <td></td>
            <td>:</td>
            <td></td>
            <td>Dimas Bagus Susilo</td>
          </tr>
        </table>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
