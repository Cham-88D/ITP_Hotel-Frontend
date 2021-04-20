import React from 'react';
import AuthService from "../adapters/AuthService";
import {useHistory} from "react-router";


function Room() {
  const user = AuthService.getCurrentUser();
  const history= useHistory();
  if(user === null)
  {
    history.push("/login");
  }
  else
  {
    let role='';
    user["roles"].map(result => {
      role = result
    return role;}
    );

    if (role !== 'user') {

      history.push("/login");
    }
  }

  return (
      <h1>Room</h1>
  );
}
export default Room;