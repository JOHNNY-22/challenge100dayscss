
import './App.css';
import { lazy, Suspense, useState } from 'react'
function App() {
  const [number, setNumber] = useState(1);
  const Picture = lazy(() => import(`./components/day${number}/index`))
  return (
    <div className="App">
      <h1>Reto 100 días css </h1>
      <div>
        <button onClick={()=> { setNumber(number+1)}}>Hacia delante</button>
      </div>
      <Suspense>
      <Picture/>
      </Suspense>
     
    </div>
  );
}

export default App;
