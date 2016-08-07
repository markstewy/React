import React from 'react';
import Statelesscomp2 from './input-test3';

class InputTest2 extends React.Component {
   constructor(props) {
      super(props);
        this.state = {
         txt: 'this is my state text',
      }
      this.update = this.update.bind(this);  // allows you to not specify .bind(this) in the statless updatae
   }

   update  (elem) {
      this.setState({txt: elem.target.value})
   }
   // update  (log, elem) {    //works with commented out stateless1 and 2 in jsx below
   //    console.log("I was written in ", log);
   //    this.setState({txt: elem.target.value})
   // }



   render() {
      return (
         <div>
         ///*bind still works, but is not neccessary whe setting bind on constructor allows you to pass in other variables in addition to "this", but probably a better way to set up if this functionality is needed .bind(this) is not needed, but it doesnt break anything*/
            {/*<Statelesscomp1 txt={this.state.txt} update={this.updateLog.bind(this,1)} /> */}
            <Statelesscomp1 txt={this.state.txt} update={this.update.bind(this)} /> 
            <Statelesscomp1 txt={this.state.txt} update={this.update} />
            {/*<Statelesscomp2 txt={this.state.txt} update={this.updateLog.bind(this,4)} />*/}
            <Statelesscomp2 txt={this.state.txt} update={this.update.bind(this)} />
            <Statelesscomp2 txt={this.state.txt} update={this.update} />
         </div>
      )
   }
}

const Statelesscomp1 = props => {
   return (
      <div>
      <input type="text" placeholder="text" onChange={props.update.bind(this)} />
      <div> Stateless componenet defined outside of input2test class in same file  </div>
       <div> {props.txt} </div>
       <br/>
      </div>
   );
}


export default InputTest2
