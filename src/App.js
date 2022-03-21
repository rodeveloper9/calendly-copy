import './App.css';
import Calendly from './components/calendly';
import MyCalendly from './components/MyCalendly/myCalendly';

function App() {
  return (
    <div className="calendlyWrap">
      {/* <Calendly /> */}
      <MyCalendly />
    </div>
  );
}

export default App;
