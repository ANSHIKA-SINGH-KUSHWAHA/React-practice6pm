import { useState } from "react"

const MyComponent = (props) => 
{
  const [counter, setCounter] = useState (1)
  const [string, setMyString] = useState ("Default")
  const [object, setObject] = useState ({
    Key1: "This is property's value " ,
    Key2: 2 ,
    Key3: true ,
    Key4: [{}] ,
    Key5: {}
  })
  let count = 0
  console.log("props:",props)
  console.log("color:",props.color)

  const incrementCounter = () =>
  {
    setCounter (counter+1)
  }

  const increment = () =>
  {
    count = count + 1
    console. log ("count" , count)
  }

    return <div>
                 <h1>Functional Component</h1>
                 Hello React!!<br/>
                 Color:<lable style={{backgroundColor :props.color}}>
                           {props.color} 
                      </lable>
                <br/>
        
        -------------------------------------------------
        <br/>
          <div>
            Count : {count}
            <br/>
            <button onClick={increment}>Increment</button>
            <br/>
            Counter : {counter}
            <br/>
          <button onClick={ incrementCounter}>Update Counter</button>  
          </div>  
     </div>
}

export default MyComponent


