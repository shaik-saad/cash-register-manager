import { useState } from 'react';
import './App.css';

const notesAvailable = [2000, 500, 100, 20, 10, 5, 1]

function App() {
  const [values, setValues ] = useState({
    billAmount: "",
    cashAmountGiven: "",
    noOfNotes: [],
  })
  const [showCashInput, setShowCashInput] = useState(false)
  const [showReturnChangeTable, setShowReturnChangeTable] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  
  const {billAmount, cashAmountGiven, noOfNotes} = values;

  function showErrorMessage(errMessage){
    setErrorMessage(<p id="message">{errMessage}</p>)
  }

  function showSuccessMessage(message){
    setSuccessMessage(<p 
                        id="message" 
                        style={{"backgroundColor": "rgba(0, 255, 0, 0.5)", "border": "1px solid green"}}
                      >
                        {message}
                      </p>)
  }

  function amountInputValidation(inputValue){
    if(inputValue === "")
      return showErrorMessage("Please enter the bill amount.") 
    if(inputValue%1 !== 0)
        return showErrorMessage("Please input numbers.")
    if(inputValue <= 0)
      return showErrorMessage("Invalid amount. Please enter a valid amount.")
    return true
  }

  // input
  function billAmountchangeHandler(event){
    setValues({...values, billAmount: event.target.value})
  }

  function nextButtonClickHandler(){
    if(amountInputValidation(billAmount)){
      setShowCashInput(true)
      setErrorMessage("")
    }
  }

  function cashAmountGivenchangeHandler(event){
    setValues({...values, cashAmountGiven: event.target.value})
  }

  // processing
  function checkClickHandler(){
    if(amountInputValidation(cashAmountGiven)){
      setErrorMessage("")
      setSuccessMessage("")
      setShowReturnChangeTable(false)

      // if the cash amount is equal to bill
      if(Number(cashAmountGiven)  === Number(billAmount)){
        return showSuccessMessage("Customer has given you the Exact amount. No Change has to be given.")
      }


      if(Number(cashAmountGiven)  > Number(billAmount)){
        var amountToBeReturned = cashAmountGiven - billAmount
        var notesArray = []
        for( var i = 0; i <notesAvailable.length; i++){
          const notesTobeGiven = Math.trunc(amountToBeReturned / notesAvailable[i])
          amountToBeReturned %= notesAvailable[i]
          notesArray.push(notesTobeGiven)
        }
        setValues({...values, noOfNotes: notesArray})

        // output
        showSuccessMessage("Check the Return Change Drawer.")
        setShowReturnChangeTable(true)
      } else{
        showErrorMessage("do you want to wash the dishes?")
      }    
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cash Register Manager</h1>
      </header>
        <p>
          Enter the bill amount and cash given by the customer and know minimum number of notes to return.
        </p>
        <div className="inner-container">
          <div id="message-div">{successMessage}{errorMessage}</div>
          <label htmlFor="bill-input">Bill Amount:</label>
          <input 
            id="bill-input" 
            type="text" 
            onChange={billAmountchangeHandler}
          />
          { showCashInput ? 
            <>
              <label htmlFor="cash-given-input">Cash Given:</label>
              <input 
                id="cash-given-input" 
                type="text" 
                onChange={cashAmountGivenchangeHandler}
              />
              <button 
                id="check-btn"
                onClick={() => checkClickHandler()}>
                  Check
              </button>
            </>
            : <button id="next-btn" onClick={() => nextButtonClickHandler()}>Next</button>}
          <table id="notes-display-table" style={{"display": showReturnChangeTable ? "" : "none"}}>
            <caption>Return Change</caption>
            <tbody>
            <tr>
              <th>No of Notes</th>
              {notesAvailable.map((notes, index) => {
                return <td 
                        key={index} className="no-of-notes-td"
                        style={{"backgroundColor": (noOfNotes[index] > 0) ? "rgba(0, 255, 0, 0.5)" : ""}}
                      >
                        {noOfNotes[index]}
                      </td>
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
        </div>
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
