import './App.css';
import SmallSnake from './SmallSnake';
import Snake from './snake';

function App() {

  const smallScreen = window.matchMedia("(max-width: 600px)").matches;

  return (
    <div className="App">
      {!smallScreen && <h1 style={{fontSize:"50px"}}>Snake</h1>}
      {!smallScreen && <Snake/>}
      {smallScreen && <SmallSnake/>}
    </div>
  );
}

export default App;
