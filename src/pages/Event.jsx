import React from 'react';
import AuthService from "../adapters/AuthService";
import {useHistory} from "react-router";

function Event() {
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
      return result;}
    );

    if (role !== 'user') {

      history.push("/login");
    }
  }

  return (
     <h1>a</h1>
  );
}
export default Event;