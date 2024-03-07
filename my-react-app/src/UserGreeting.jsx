import React from "react";

function UserGreeting(props) {
  //   if (props.isLoggedIn) {
  //     return <h3>Welcome {props.username}</h3>;
  //   }
  //   return <h3>Please, Login first</h3>;

  // using the ternary operator

//   return props.isLoggedIn ? (<h2>Welcome {props.username}</h2>) : 
//                             (<h2>Please, login first</h2>);

    const welcomeMessage = <h1>Welcome here, {props.username}</h1>
    const loginWarning = <h1>Please, login to continue</h1>

    return props.isLoggedIn ? welcomeMessage : loginWarning;
}

export default UserGreeting;
