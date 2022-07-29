
import './App.css';

function App() {
  const maxDate = new Date();
  const maxDateMonth = maxDate.getMonth() < 10 ? `0${maxDate.getMonth()}` : `${maxDate.getMonth()}`
  const maxDateDay = maxDate.getDate() < 10 ? `0${maxDate.getDate()}` : `${maxDate.getDate()}`
  const maxDateFormatted = `${maxDate.getFullYear()}-${maxDateMonth}-${maxDateDay}`
  return (
    <div className="App">
      <button>Search</button>
      <input type="date" min="0001-01-01" max={maxDateFormatted}/>
    </div>
  );
}

export default App;
