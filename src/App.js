import './App.css';

const notesAvailable = [2000, 500, 100, 20, 10, 5, 1]
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cash Register Manager</h1>
      </header>
        <p>
          Enter the bill amount and cash given by the customer and know minimum number of notes to return.
        </p>
        <div className="inner-container">
          <label htmlFor="bill-input">Bill Amount:</label>
          <input id="bill-input" type="number"/>
          <button id="next-btn">Next</button>
          <label htmlFor="cash-given-input">Cash Given:</label>
          <input id="cash-given-input" type="number"/>
          <button id="check-btn">Check</button>
        </div>
        <table id="notes-display-table" style={{"border": "1px solid white"}}>
          <caption>Return Change</caption>
          <tbody>
          <tr>
            <th>No of Notes</th>
            {notesAvailable.map(note => {
              return <td key={note} className="no-of-notes-td"></td>
            })}
          </tr>
          <tr>
            <th>Note</th>
            {notesAvailable.map(note => {
              return <td key={note} className="notes-td">{note}</td>
            })}
          </tr>
          </tbody>
        </table>
        <footer>
          <p>If you loved❤️ this app, make sure to follow me on</p>
          <ul id="non-bullet-list">
          <li className="list-item">
                <a className="link" href="https://www.linkedin.com/in/shaik-saad">
                    <i className="fab fa-linkedin"></i>
                </a>
            </li>
            <li className="list-item">
                <a className="link" href="https://twitter.com/shaiksaadullah">
                    <i className="fab fa-twitter"></i>
                </a></li>
            <li className="list-item">
                <a className="link" href="https://github.com/shaik-saad">
                    <i className="fab fa-github"></i>
                </a>
            </li>
          </ul>
        </footer>
    </div>
  );
}

export default App;
