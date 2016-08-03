import React from 'react';

class NavBar extends React.Component {
   render() {
      return (
         <div>
            <ul>
               <li className="home">Home</li>
               <li>About</li>
               <li>Contact</li>
            </ul>
         </div>
      )
   }
}

export default NavBar
