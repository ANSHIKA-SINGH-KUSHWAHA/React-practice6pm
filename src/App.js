import logo from './logo.svg';
import './App.css';
import React from 'react';
import MyComponent from './MyComponent';
import MyComponentClass from './MyComponentClass';


// const App = () =>
// {
//   const myFunction = () =>
//   {
//     console.log("This is my function!!!")
//   }

//   myFunction ()

//   const buttonHandler = () =>
//   {
//     console.log("Button is clicked!!!")
//   }

//   let fristVariable=1
//   console.log ("fristVariable:",fristVariable)

//   const ell = <h2>This is a sample JSK code snippet</h2>
//   console.log ("ell:",ell)


//   //  return React.createElement(
//   //   "div",
//   //    null,
//   //     "Hello Anshika!!",
//   //      React.createElement("p" , null , "This is my Paragraph!!"),
//   //      React.createElement("ul" , null , 
//   //       React.createElement("li" , null , "This is my list item 1"),
//   //       React.createElement("li" , null , "This is my list item 2"),
//   //       React.createElement("li" , null , "This is my list item 3"),
//   //       React.createElement("li" , null , "This is my list item 4"),
//   //  )   
//   // );

//   return<div>
//     <p>This is my Paragraph!!</p>
//     <ul>
//      <li>This is my list item 1</li> 
//      <li> This is my list item 2</li>
//      <li>This is my list item 3</li> 
//      <li>This is my list item 4</li> 
//     </ul>
//     <MyComponent color="yellow" size="medium"/>
//     <br/>
//   <MyComponentClass color="red" size="medium" onClick={()=>
//   {
//     console.log("this is executed in App.js")
  
//    }} />
//   </div>
  
// };





class App extends React.Component
{
  state = {classComponent:  <MyComponentClass color="red" size="medium" onClick={()=>
      {
       console.log("this is executed in App.js")
      }} />}

      unmountfunction = () =>
      {
        console.log("testing git commit")
        this. setState ({classComponent:"class component unmounted now !!" })
      }
      render ()
      {
      return <div>
              <p>This is my Paragraph!!</p>
              <ul>
                 <li>This is my list item 1</li> 
                 <li> This is my list item 2</li>
                 <li>This is my list item 3</li> 
                <li>This is my list item 4</li> 
              </ul>
          <MyComponent color="yellow" size="medium"/>
          <br/>
          {this.state.classComponent}

          <br/>
          <button onClick={this.unmountfunction}>Unmount Class Comp </button>
          </div>
      }
    }
          

export default App;
