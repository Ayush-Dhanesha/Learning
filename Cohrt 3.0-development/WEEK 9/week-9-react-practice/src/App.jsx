import { useState,useEffect } from "react";

function App() {
    let [counterVisible,setCounterVisible] =useState( true);

    useEffect(function(){
        setInterval(function(){
           setCounterVisible(c => !c);
        },5000)
    },[])

    return <div>
        hi 
        {counterVisible && <Counter></Counter>}
         there
    </div>


}


//mounting-re-rendering-unmounting
function Counter(){
  const [count,setCount]=useState(0);


  useEffect(function() {

   console.log("on Mount");
   let clock=setInterval(function(){
    console.log("hi from inside the interval");
    setCount(count=>count+1);
    
  },1000)
   
  return function(){
    console.log("on Unmount");
    clearInterval(clock);
  }
},[])//dependency array,clean up,fetch inside useEffect

  function increment(){
      setCount(count=>count+1);
  }
  
  return <div>
    <h1 id="text">{count}</h1>
    <button onClick={increment}>Increment</button>
  </div>
}

export default App
