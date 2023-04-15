import Cookies from 'js-cookie';

export const getCookie=(name)=>{
    return Cookies.get(name)
  }
  
  export const checkCookie=()=> {
    let username = getCookie("username");
    if (username != "" && username) {
     alert("Welcome again " + username);
    } else {
      username = prompt("Please enter your name:", "");
      if (username != "" && username != null) {
        Cookies.set('username', username);
      }
    }
  }