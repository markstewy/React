import React from 'react';
import ReactDOM from 'react-dom'; //neccessary for refs to work

class InputTest extends React.Component {
   constructor(props) {
      super(props);
        this.state = {
         txt1: 'this is my state text1',
         txt2: 'this is my state text2',
         txt2a: 'this is my state text2a with ref',
         txt2b: 'this is my state text2b with ref'
      }
   }


   update1 (elem) {
      this.setState({txt1: elem.target.value})
   }

   update2 (elem) {
      this.setState({
         txt2: elem.target.value,
         txt2a: ReactDOM.findDOMNode(this.refs.txt2a).value,
         txt2b: ReactDOM.findDOMNode(this.refs.txt2b).value
      })
   }

   render() {
      return (
         <div>
           <input type="text" placeholder="text1" onChange={this.update1.bind(this)} />
           <input type="text" placeholder="text1a" onChange={this.update1.bind(this)} />
           <h1> {this.state.txt1} </h1>
           <hr/>

           use the same update2 method, but differentiate using refs (instead of creating a new function like update1 & txt1 vs update2 & txt2)
            <br/>
           No Ref<input type="text" placeholder="text2 NO REF" onChange={this.update2.bind(this)} />
           Ref 2a<input type="text" placeholder="text2 ref a" ref="txt2a" onChange={this.update2.bind(this)} />
           Ref 2b<input type="text" placeholder="text2 ref b" ref="txt2b" onChange={this.update2.bind(this)} />
            <h1> {this.state.txt2} </h1>
            <h1> {this.state.txt2} </h1>
            <h1> {this.state.txt2a} </h1>
            <h1>{this.state.txt2b} </h1>
         </div>
      )
   }
}

export default InputTest
