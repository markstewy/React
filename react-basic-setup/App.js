import React from 'react';
import NavBar from './navbar';
import InputTest from './input-test';
import InputTest2 from './input-test2';

// SMART COMPONENET (WITH STATE)
class App extends React.Component {
   render() {
      return (
         <div>
         <NavBar/>
            <h2>hellllo world </h2>
            <InputTest/>
            <hr/>
            <hr/>
            <br/>
            <InputTest2/>
         </div>
      )
   }
}

export default App
