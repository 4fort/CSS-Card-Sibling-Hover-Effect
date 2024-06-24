import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <div className="card-group">
          <div className="card">card1</div>
          <div className="card">card2</div>
          <div className="card">card3</div>
          <div className="card">card4</div>
          <div className="card">card5</div>
          <div className="card">card6</div>
          <div className="card">card7</div>
          <div className="card">card8</div>
        </div>
      </main>
    </>
  );
}

export default App;
