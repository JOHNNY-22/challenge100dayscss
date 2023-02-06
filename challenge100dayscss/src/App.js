import React from 'react';
import './App.css';
import { lazy, Suspense, useState } from 'react';

function App() {

  
  const [numberpage, setnumberPage] = useState(1);
  const listItems = new Array();
  const [number, setNumber] = useState(1);
  const Picture = lazy(() => import(`./components/day${number}/Day${number}`))
  const filllist =() => {
    for(let i = 1; i<=100; i++) {   
      var newItem= `${i}`;
        listItems.push(newItem);
          }
  };
  filllist();
  

function addNumber() {
  numberpage == 91? setnumberPage(1): setnumberPage(numberpage+10);
}

function decrementNumber() {
  numberpage == 1? setnumberPage(91): setnumberPage(numberpage-10);
}
  return (
    <div className="App">
      <div className="title"> 
      <h1>Reto 100 días css </h1>
      </div>
      <div className='day'>
        <div className='buttonback'>
        <img className="imgNextReverse" src= "https://cdn.icon-icons.com/icons2/1993/PNG/512/arrows_chevron_direction_left_move_next_right_icon_123222.png" alt="not found" onClick={()=> { setNumber(number-1)}}/> 
        </div>
        <Suspense>
        <Picture/>
        </Suspense>
        <div className='nexbackbuttons'> 
        <img className="imgNext" src= "https://cdn.icon-icons.com/icons2/1993/PNG/512/arrows_chevron_direction_left_move_next_right_icon_123222.png" alt="not found" onClick={()=> { setNumber(number +1)}}/> 
        </div>
      </div>
     
      <div className='buttonList' > 
      <img className="arrowreverse"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCKy75k9A1vUl11UYgzKReoj_OUYgEvOnQbw&usqp=CAU" alt="not found" onClick={decrementNumber}/>
        <ol class="lista"> 
         { listItems.slice(numberpage -1, numberpage+9).map((i, index)=> {
          return (<li onClick={()=>{setNumber(index +1)} }>{i}</li>);
            })
         }
        </ol>
        <img className="arrow"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCKy75k9A1vUl11UYgzKReoj_OUYgEvOnQbw&usqp=CAU" alt="not found" onClick={addNumber}/>
        
      </div>
    </div>
      
  );
}

export default App;
