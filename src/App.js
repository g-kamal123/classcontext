import './App.css';
import A from './component/A';
// import Learn from './component/Learn';
import {ThemeContext} from './component/Context'
import CurrencyConverter from './component/CurrencyConverter';
import NtoW from './component/NtoW';
// import NumbertoWord from './component/NumbertoWord';
import ParentComponent from './component/ParentComponent';
import Utility from './component/Utility';
// import D from './component/D';

function App() {
  return (
    <div className="App">
    <ThemeContext>
      <h1>1.</h1>
      <A />
    </ThemeContext>
    <ParentComponent />
    <CurrencyConverter />
    <Utility />
    {/* <NumbertoWord /> */}
    <NtoW />
    </div>
  );
}

export default App;
