import React from 'react';

const Statelesscomp2 = props => {
   return (
      <div>
      <input type="text" placeholder="text" onChange={props.update.bind(this)} />
      <div> Stateless componenet defined outside of input2test class in separate file  </div>
       <div> test3{props.txt} </div>
       <br/>
      </div>
   );
}


export default Statelesscomp2
