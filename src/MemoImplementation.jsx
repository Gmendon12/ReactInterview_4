import React, { useMemo, useState } from 'react'

export default function MemoImplementation() {
  
    const[count, setcount] = useState(0);
    const[todos, settodos] = useState([]);
    const calculation = useMemo(() => expensiveCalculation(count), [count])
  
    const Increment = () =>{
        setcount((c) => c + 1);
    }

    const addTodo = () =>{
        settodos((t) => [...t, "New TODO"])
    }

    return (
    <div>
        <div>
            <h2>
                My Todos
                {todos.map((todo, index) =>{
                    return <p key={index}>{todo}</p>
                })}
                <button onClick={addTodo}>Add Todo</button>
            </h2>
        </div>
        <hr />
        <div>
            Count: {count}
            <button onClick={Increment}>+</button>
            <h2>Expensive Calculation</h2>
            {calculation}
        </div>
    </div>
  )
}


const expensiveCalculation = (num) =>{
    console.log("Calculatiing...");
    for(let i=0;i<100000000;i++){
        num += 1;
    }
    return num
}