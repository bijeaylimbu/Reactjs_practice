// return the user data from the session storage
// export const getUser = () => {
//     const userStr = sessionStorage.getItem('user');
//     if (userStr) return JSON.parse(userStr);
//     else return null;
//   }
  
  // return the token from the session storage
  export const getToken = () => {
    return sessionStorage.getItem('token') || null;
  }
  export const getUser = () => {
    return  sessionStorage.getItem('user') || null;
     
     
  }



  // export const getUser = () => {
  //   return sessionStorage.getItem('user') || null;
  // }


  // return the user data from the session storage

  
  
  // remove the token and user from the session storage
  export const removeUserSession = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
  }
  
  // set the token and user from the session storage
  export const setUserSession = (token, user) => {
    sessionStorage.setItem('token', token);
   
    
     sessionStorage.setItem('user', user);
     
  }